# Abdulkareem Alhallak Portfolio

Portfolio for Abdulkareem Alhallak, a Full-Stack Developer and Software Engineer building web, backend, and Flutter products with React, Laravel/PHP, Node.js/Express, SQL databases, Docker, and Linux.

## Portfolio Highlights

- Evidence-focused project catalog with honest live, private-source, prototype, and repository-pending labels.
- Detailed case studies with verified architecture, workflows, contributions, engineering decisions, and limitations.
- Real repository/running-page galleries with an accessible enlarged preview and explicit fallbacks where screenshots are missing.
- Lightweight project filters and separate actions for source code, verified live pages, and internal case studies.
- Responsive React 19, Vite, and Tailwind CSS interface.
- Docker-ready Express server with a Nodemailer contact endpoint.
- Static GitHub Pages deployment with email and WhatsApp contact fallbacks.

## Project Evidence

| Project | Source | Live demo | Portfolio status |
| --- | --- | --- | --- |
| Tabeley | [Private repository](https://github.com/abdulkareem424/tabeley-mvp) | [Verified landing page](https://tabeley.com/) | MVP / in development; application API unavailable during audit |
| ALC Orientation Registration | [Private repository](https://github.com/abdulkareem424/alc-orientation-registration) | Not published | Source-verified MVP |
| Physio Center Management | [Private repository](https://github.com/abdulkareem424/clinic) | Not published | Prototype / in progress |
| Alhallak Store Prices | [Public repository](https://github.com/abdulkareem424/alhallak-prices-live) | [Verified deployment](https://abdulkareem424.github.io/alhallak-prices-live/) | Live |
| Acadia E-commerce | Repository pending | Not published | Local MVP |
| Geneva International University | [Public repository](https://github.com/abdulkareem424/geneeua-university) | [Verified deployment](https://abdulkareem424.github.io/geneeua-university/) | Academic front-end project |
| WISC Assessment Workflow | [Public repository](https://github.com/abdulkareem424/wisc4test) | Not published | Flutter prototype |

The remaining academic and training entries are retained as local-source work and are labeled `Repository Pending` until their source is published. See [PROJECT_REPOS.md](PROJECT_REPOS.md) for the full audit.

The six repository-backed case studies live in `src/data/caseStudies.js`. Their screenshots are captures of actual running pages; projects without screenshots show a clear fallback instead of generated product UI.

## Tech Stack

- React 19, Vite, Tailwind CSS
- Express 5, Nodemailer
- oxlint
- Docker
- GitHub Actions and GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

The development site runs with Vite. The contact form API is available only through the production server.

## Quality Checks

```bash
npm run lint
npm run build
```

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
CONTACT_TO_EMAIL=your_contact_email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_user
SMTP_PASS=your_app_password
SMTP_FROM=your_smtp_from_address
```

For Gmail, use a Google App Password instead of your normal account password. Never commit `.env` or production credentials.

## Docker

```bash
docker build -t abdulkareem-portfolio .
docker run -p 3000:3000 --env-file .env abdulkareem-portfolio
```

## Deployment Note

GitHub Pages can host the static frontend, but it cannot run the Express contact API. For the live contact form, deploy the Docker container to a platform that supports Node servers. On GitHub Pages, the interface automatically presents direct email and WhatsApp actions instead of the unavailable form.

## Contact

- Email: [alhallakabdulkareem@gmail.com](mailto:alhallakabdulkareem@gmail.com)
- WhatsApp: [00963983233965](https://wa.me/963983233965)
- GitHub: [abdulkareem424](https://github.com/abdulkareem424)
- LinkedIn: [Abdulkareem Alhallak](https://www.linkedin.com/in/abdulkareem-alhallak-46a09b298/)
