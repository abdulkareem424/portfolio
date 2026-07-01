import express from 'express'
import nodemailer from 'nodemailer'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = process.env.PORT || 3000
const recipientEmail = process.env.CONTACT_TO_EMAIL || 'alhallakabdulkareem@gmail.com'

app.use(express.json({ limit: '20kb' }))

app.post('/api/contact', async (req, res) => {
  const { name = '', email = '', message = '' } = req.body || {}
  const cleanName = String(name).trim()
  const cleanEmail = String(email).trim()
  const cleanMessage = String(message).trim()

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return res.status(500).json({
      error: 'Contact form is not configured yet. Please use the email or WhatsApp links.',
    })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      replyTo: cleanEmail,
      to: recipientEmail,
      subject: `Portfolio message from ${cleanName}`,
      text: [
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        '',
        'Message:',
        cleanMessage,
      ].join('\n'),
    })

    return res.json({ ok: true })
  } catch (error) {
    console.error('Failed to send contact email:', error)
    return res.status(500).json({
      error: 'Unable to send your message right now. Please use email or WhatsApp.',
    })
  }
})

app.use(express.static(path.join(__dirname, 'dist')))

app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Portfolio server listening on port ${port}`)
})
