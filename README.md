# Abdulkareem Alhallak Portfolio

Personal portfolio for Abdulkareem Alhallak, a Full-Stack and Mobile Developer building practical web applications, mobile apps, dashboards, backend APIs, and business systems.

## Highlights

- One-page developer portfolio built with React, Vite, and Tailwind CSS.
- Project sections for Tabeley, Clinic Management, Acadia Store, and academic/training work.
- Docker-ready production server.
- Contact form backed by Express and Nodemailer.
- Direct links for email, WhatsApp, GitHub, and LinkedIn.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Express
- Nodemailer
- Docker

## Local Development

```bash
npm install
npm run dev
```

The development site runs with Vite. The contact form API is available only through the production server.

## Production Build

```bash
npm run build
npm start
```

The production server serves `dist` and exposes:

```text
GET  /
POST /api/contact
```

## Environment Variables

Create a `.env` file from `.env.example` when deploying:

```env
PORT=3000
CONTACT_TO_EMAIL=alhallakabdulkareem@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=alhallakabdulkareem@gmail.com
SMTP_PASS=your_gmail_app_password
SMTP_FROM=alhallakabdulkareem@gmail.com
```

For Gmail, use a Google App Password instead of your normal account password.

## Docker

```bash
docker build -t abdulkareem-portfolio .
docker run -p 3000:3000 --env-file .env abdulkareem-portfolio
```

## Deployment Note

GitHub Pages can host the static frontend, but it cannot run the Express contact API. For the live contact form, deploy the Docker container to a platform that supports Node servers, such as Render, Railway, Fly.io, a VPS, or any Docker-capable host.

## Contact

- Email: [alhallakabdulkareem@gmail.com](mailto:alhallakabdulkareem@gmail.com)
- WhatsApp: [00963983233965](https://wa.me/963983233965)
- GitHub: [abdulkareem424](https://github.com/abdulkareem424)
- LinkedIn: [Abdulkareem Alhallak](https://www.linkedin.com/in/abdulkareem-alhallak-46a09b298/)
