export const caseStudies = {
  tabeley: {
    role: 'Full-stack product developer across the Flutter client, Laravel API, data model, and deployment setup.',
    architecture: [
      { label: 'Flutter app', detail: 'Riverpod state, authenticated API client, venue discovery, bookings, notifications, and customer/admin screen foundations.' },
      { label: 'Laravel 12 REST API', detail: 'Sanctum tokens, throttled OTP endpoints, request validation, uploads, and customer/vendor/admin routes.' },
      { label: 'Reservation domain', detail: 'Lifecycle transitions, status history, table assignment, reminders, notifications, fees, and customer rules.' },
      { label: 'PostgreSQL', detail: 'Relational models for users, roles, venues, reservations, tables, offers, pricing, feedback, and notifications.' },
      { label: 'Docker delivery', detail: 'Separate PHP application, Nginx, and PostgreSQL services plus a separately deployable static landing page.' },
    ],
    workflows: [
      'Customer registration, OTP verification, Sanctum token creation, and authenticated profile access.',
      'Venue browsing, venue details, seating selection, availability checks, and reservation creation.',
      'Vendor review with approve, reject, venue cancellation, no-show, and completion transitions.',
      'Transactional table assignment that checks overlapping reservations before selecting capacity.',
      'Reservation status history, customer notifications, reminder records, and strike/block rules.',
    ],
    decisions: [
      'Separated the Flutter client, Laravel backend, and landing page so each can be deployed independently.',
      'Used route middleware to keep customer, vendor, and admin capabilities explicit at the API boundary.',
      'Used database transactions and row locking around approval and table assignment to reduce conflicting assignments.',
      'Stored lifecycle changes in a status-history table rather than relying only on the current reservation state.',
    ],
    challenges: [
      'Keeping availability and table assignment consistent while reservations move through multiple states.',
      'Supporting three roles without mixing privileged venue-management actions into customer routes.',
      'Connecting a mobile workflow to uploads, authentication, notifications, and deployment-specific API origins.',
    ],
    contribution: [
      'Implemented Laravel endpoints for authentication, venues, reservations, notifications, feedback, and administration.',
      'Designed reservation lifecycle transitions, table-assignment checks, status history, and customer strike rules.',
      'Built Flutter screens and Riverpod-backed flows for authentication, venues, bookings, notifications, profiles, and an admin venue foundation.',
      'Added PostgreSQL migrations and Eloquent models for the reservation domain.',
      'Prepared Docker/Nginx services and a configurable static landing-page deployment.',
    ],
    limitations: [
      'The repository describes the product as an MVP in active development.',
      'The public landing page is working, but the configured API root and venue endpoint returned HTTP 503 during this audit; it is not presented as a working full-app demo.',
      'Application source remains private.',
      'The Flutter client currently fails a web build because its router imports two vendor screens that are missing from the repository.',
      'The repository contains only baseline example tests, so automated coverage does not yet match the workflow depth.',
    ],
    gallery: [
      { src: '/images/tabeley-logo.webp', alt: 'Tabeley application icon from the Flutter and landing-page source', caption: 'Real Tabeley application asset used by the product.', width: 256, height: 256 },
      { src: '/images/screenshots/tabeley-landing-desktop.webp', alt: 'Tabeley public landing page at desktop width', caption: 'Verified public landing page; this is not presented as a Flutter application screenshot.', width: 1280, height: 800 },
      { src: '/images/screenshots/tabeley-landing-mobile.webp', alt: 'Tabeley public landing page at mobile width', caption: 'Verified 390px view of the public Tabeley landing page.', width: 390, height: 844 },
    ],
  },
  'alc-orientation': {
    role: 'Full-stack developer for the registration frontend, Node.js server, data layer, administration, and deployment container.',
    architecture: [
      { label: 'RTL web frontend', detail: 'Static registration, administration, attendance, settings, and login pages with shared JavaScript.' },
      { label: 'Node.js HTTP server', detail: 'Static delivery, JSON APIs, request parsing, security headers, session cookies, and health checks.' },
      { label: 'Registration workflows', detail: 'Capacity-aware registration, admin/session-manager permissions, status changes, and attendance recording.' },
      { label: 'PostgreSQL or JSON', detail: 'PostgreSQL schema for sessions, registrations, Telegram links, and attendance, with a documented JSON fallback.' },
      { label: 'Integrations', detail: 'Telegram bot polling and confirmation plus browser-side QR generation and PDF ticket export.' },
    ],
    workflows: [
      'Student registration with session settings, interest selection, capacity checks, and unique registration codes.',
      'Telegram confirmation that links chat data to a pending registration.',
      'QR or manual-code attendance with duplicate-attendance protection.',
      'Admin management of registrations and settings, with a narrower session-manager attendance role.',
      'Browser-side ticket rendering and PDF download using QRCode, html2canvas, and jsPDF.',
    ],
    decisions: [
      'Used Node core HTTP modules with only the PostgreSQL client as a server dependency, keeping the runtime small.',
      'Signed role-bearing session cookies and applied separate page/API permission maps for admin and session-manager access.',
      'Kept a JSON fallback for local continuity while supporting a relational PostgreSQL production schema.',
      'Added Docker health checks and security headers directly in the application server.',
    ],
    challenges: [
      'Linking a browser registration to a Telegram chat without losing pending confirmations.',
      'Keeping QR attendance idempotent so a registration cannot be checked in twice.',
      'Maintaining equivalent registration and settings behavior across PostgreSQL and JSON storage paths.',
    ],
    contribution: [
      'Built the Arabic RTL registration and administration interfaces.',
      'Implemented registration, settings, attendance, authentication, and health APIs in Node.js.',
      'Designed the PostgreSQL schema for users, sessions, registrations, Telegram links, attendance logs, and bot state.',
      'Implemented Telegram confirmation, QR attendance, and PDF ticket workflows.',
      'Added role-based admin/session-manager access, security headers, and Docker packaging.',
    ],
    limitations: [
      'The source repository is private.',
      'The public ALC website does not currently expose this registration application, so it is not used as a live demo.',
      'Development fallback credentials in the server must be removed or made mandatory environment variables before public release.',
    ],
    gallery: [
      { src: '/images/alc-logo.jpg', alt: 'ALC logo from the orientation registration repository', caption: 'Real ALC brand asset used by the registration application.', width: 735, height: 314 },
      { src: '/images/screenshots/alc-registration-desktop.webp', alt: 'ALC orientation registration page running at desktop width', caption: 'Desktop registration route captured from the actual Node.js application.', width: 1280, height: 800 },
      { src: '/images/screenshots/alc-registration-mobile.webp', alt: 'ALC orientation registration page running at mobile width', caption: 'Responsive 390px registration view captured from the actual application.', width: 390, height: 844 },
    ],
  },
  'alhallak-prices': {
    role: 'Frontend and automation developer for the public RTL price board and its owner-controlled publishing workflow.',
    architecture: [
      { label: 'GitHub Pages frontend', detail: 'Static Arabic HTML/CSS/JavaScript interface for search, USD pricing, SYP conversion, and update timestamps.' },
      { label: 'JSON data files', detail: 'The published product catalog and exchange-rate state are read directly by the browser.' },
      { label: 'Owner edit request', detail: 'The management page opens a structured GitHub issue under the repository owner account.' },
      { label: 'GitHub Actions', detail: 'One workflow validates owner edits; another checks exchange-rate sources on a schedule.' },
      { label: 'Repository publish', detail: 'Validated changes are committed to JSON and become available through the static deployment.' },
    ],
    workflows: [
      'Load products and the current exchange-rate record from versioned JSON files.',
      'Search the Arabic catalog and convert USD items to displayed Syrian-pound values in the browser.',
      'Send an owner-only price edit through a structured GitHub issue.',
      'Validate the requested product, currency, unit, and price before committing the catalog update.',
      'Check configured exchange-rate sources on a schedule while retaining the previous manual value if sources fail.',
    ],
    decisions: [
      'Used static hosting because the public price board only needs read access to versioned data.',
      'Reused GitHub identity and Actions for owner-controlled edits instead of introducing a separate public admin backend.',
      'Kept the previous exchange rate when external checks fail rather than publishing an invalid value.',
      'Stored update status and timestamps alongside the rate so the frontend can communicate freshness.',
    ],
    challenges: [
      'Providing controlled edits for a static site without exposing a custom authentication service.',
      'Handling changing third-party exchange-rate page formats and temporary source failures.',
      'Keeping the Arabic mobile layout readable across long product names, units, and two currencies.',
    ],
    contribution: [
      'Built the responsive RTL price board, search, conversion display, and update-state messaging.',
      'Built the management page that prepares owner-authorized catalog edits.',
      'Implemented the GitHub Actions workflow that validates and publishes product changes.',
      'Implemented scheduled exchange-rate checks with a safe manual fallback.',
    ],
    limitations: [
      'The project intentionally has no conventional backend or database; published JSON is the data source.',
      'Administration depends on the repository owner being signed in to GitHub.',
      'Automated rate checks depend on third-party page structures and may retain the last manual value.',
    ],
    gallery: [
      { src: '/images/screenshots/alhallak-desktop.webp', alt: 'Alhallak Store Prices page running at desktop width', caption: 'Verified desktop view of the deployed static price-board interface.', width: 1280, height: 800 },
      { src: '/images/screenshots/alhallak-mobile.webp', alt: 'Alhallak Store Prices page running at mobile width', caption: 'Verified 390px view of the responsive Arabic price board.', width: 390, height: 844 },
    ],
  },
  'physio-center': {
    role: 'Prototype developer for the Flutter desktop interface, Laravel API foundation, localization, and implementation planning.',
    architecture: [
      { label: 'Flutter desktop prototype', detail: 'Routed clinic modules, in-memory UI models, Arabic/English localization, and light/dark/system themes.' },
      { label: 'Laravel 13 API', detail: 'Versioned development endpoints for login, patients, appointments, queue, visits, invoices, reports, health, and backup.' },
      { label: 'Validation layer', detail: 'Laravel request validation for the implemented patient and appointment creation endpoints.' },
      { label: 'Sample in-memory data', detail: 'The current API and desktop build use sample arrays; domain persistence is not implemented yet.' },
    ],
    workflows: [
      'Prototype login and navigation across dashboard, patients, appointments, queue, visits, billing, reports, backup, and settings.',
      'Create patient and appointment records inside the current desktop prototype session.',
      'Switch Arabic/English locale and light/dark/system theme.',
      'Read versioned sample API resources and summary data from `/api/v1`.',
    ],
    decisions: [
      'Separated the desktop client and API in a monorepo to support the planned local-service boundary.',
      'Established localization and theming before expanding domain implementation.',
      'Kept the current API explicitly developmental instead of presenting sample arrays as completed persistence.',
    ],
    challenges: [
      'Mapping a broad clinic workflow into clear modules before the database and authorization layers are complete.',
      'Designing for an offline Windows installation while runtime packaging remains future work.',
    ],
    contribution: [
      'Built the routed Flutter desktop shell and clinic module screens.',
      'Added Arabic/English localization and theme switching.',
      'Implemented versioned Laravel development endpoints and request validation.',
      'Documented the database, licensing, backup, installer, and staged implementation plan.',
    ],
    limitations: [
      'The current build uses in-memory sample data in both the Flutter app and Laravel routes.',
      'PostgreSQL domain migrations, real token authentication, roles, licensing, backups, and the Windows installer remain planned work.',
      'Source is private and no public demo is available.',
    ],
    gallery: [
      { src: '/images/clinic-icon.png', alt: 'Flutter application icon present in the clinic desktop repository', caption: 'Current Flutter project icon; the repository does not include product screenshots.', width: 512, height: 512 },
    ],
  },
  'geneva-university': {
    role: 'Frontend developer for the responsive multi-page experience, interactions, validation, and static deployment.',
    architecture: [
      { label: 'Static pages', detail: 'Separate HTML routes for public information, courses, admissions, account flows, faculty, news, and admin prototypes.' },
      { label: 'Frontend layer', detail: 'Shared CSS and JavaScript with Tailwind CDN utilities, Font Awesome, and GSAP on selected pages.' },
      { label: 'Validation workflow', detail: 'A Python script checks maintained page links and local assets before deployment.' },
      { label: 'GitHub Pages', detail: 'GitHub Actions packages the maintained root pages and images into the Pages artifact.' },
    ],
    workflows: [
      'Navigate university information, courses, admissions, faculty, news, and account screens.',
      'Filter course/faculty content and open client-side information modals.',
      'Validate links and assets before publishing the static site through GitHub Actions.',
    ],
    decisions: [
      'Kept the project build-free so it can run from any static server.',
      'Documented prototype-only account, admissions, and admin behavior instead of implying a working LMS backend.',
      'Excluded the legacy nested snapshot from the deployed Pages artifact.',
    ],
    challenges: [
      'Keeping navigation and local assets valid across many standalone HTML pages and a repository subpath.',
      'Making mixed legacy page implementations behave consistently on static hosting.',
    ],
    contribution: [
      'Built the multi-page university interface and responsive navigation.',
      'Implemented course, admissions, faculty, news, modal, and account-flow prototypes.',
      'Added site validation and a GitHub Pages deployment workflow.',
    ],
    limitations: [
      'There is no LMS backend, database, or production authentication service.',
      'Forms, login, password recovery, news publishing, and administration actions are client-side prototypes.',
    ],
    gallery: [
      { src: '/images/geneva-university.webp', alt: 'Geneva International University logo from the project repository', caption: 'Real university portal brand asset.', width: 1200, height: 1200 },
      { src: '/images/screenshots/geneva-home-desktop.webp', alt: 'Geneva International University home page running at desktop width', caption: 'Home route captured from the maintained static application.', width: 1280, height: 800 },
      { src: '/images/screenshots/geneva-courses-desktop.webp', alt: 'Geneva International University courses page running at desktop width', caption: 'Courses route captured from the maintained static application.', width: 1280, height: 800 },
    ],
  },
  'wisc-assessment': {
    role: 'Flutter prototype developer for participant selection, question delivery, local persistence, timing, and raw scoring.',
    architecture: [
      { label: 'Flutter interface', detail: 'Participant selection, subtest navigation, timed questions, score controls, and result presentation.' },
      { label: 'JSON question assets', detail: 'Question content is loaded from bundled Vocabulary and Block Design JSON files.' },
      { label: 'SQLite', detail: 'Local tables store children, adults, sessions, and per-question answers on supported desktop/mobile platforms.' },
      { label: 'Scoring foundation', detail: 'The current service sums question scores into a raw subtest total.' },
    ],
    workflows: [
      'Add or select a child/adult record and choose the available subtest flow.',
      'Load bundled questions, run a per-question timer, and record scores locally.',
      'Compute and display the raw score at the end of the question sequence.',
    ],
    decisions: [
      'Used SQLite with an FFI database factory on Windows, Linux, and macOS for local prototype persistence.',
      'Separated question data into JSON assets and scoring into a dedicated service.',
      'Kept the current result explicitly at raw-score level rather than claiming standardized interpretation.',
    ],
    challenges: [
      'Coordinating timer state, question progression, session creation, and local answer writes.',
      'Supporting SQLite initialization across mobile and desktop targets.',
    ],
    contribution: [
      'Built participant, subtest, question, and result screens in Flutter.',
      'Implemented SQLite tables and methods for participants, sessions, and answers.',
      'Added JSON question loading, question timers, score controls, and raw-score calculation.',
    ],
    limitations: [
      'The repository describes the application as experimental.',
      'The current navigable subtest list exposes Vocabulary only, despite an additional Block Design question asset.',
      'Scoring is a raw sum only; standardized norms, interpretation, and clinical validation are not implemented.',
      'No public live build or project-specific screenshots are included.',
    ],
    gallery: [],
  },
}
