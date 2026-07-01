export const featuredProjects = [
  {
    title: 'Tabeley',
    type: 'Restaurant & Cafe Booking Platform',
    description:
      'A mobile-first reservation platform for restaurants and cafes, backed by a Laravel API and a Flutter application.',
    problem:
      'Restaurants need a better way to manage reservations, table availability, weak-hour offers, attendance, and customer rules.',
    solution:
      'Built customer, vendor, and admin flows to manage reservation requests, table assignment, pricing snapshots, blacklist policies, and offer cards.',
    tech: [
      'Flutter',
      'Riverpod',
      'Laravel 12',
      'Sanctum',
      'PostgreSQL',
      'Docker',
      'REST API',
    ],
    features: [
      'Customer mobile app',
      'Vendor dashboard',
      'Admin panel',
      'Approve / reject workflow',
      'Table auto assignment',
      'Reservation lifecycle',
      'Blacklist rules',
      'Offers with countdown',
    ],
    status: 'MVP / In Development',
    tone: 'orange',
    image: '/images/tabeley-logo.webp',
    github: 'https://github.com/abdulkareem424/tabeley-mvp',
    demo: '',
  },
  {
    title: 'Physio Center Management System',
    type: 'Clinic Operations System',
    description:
      'A desktop-first clinic management system with a Flutter client, Laravel API, PostgreSQL schema, appointments, queue, billing, reports, and backup flows.',
    problem:
      'The clinic needs reliable local operations for patient records, appointments, queue handling, visits, invoices, payments, reports, and LAN-ready access.',
    solution:
      'Designed a Laravel API contract and PostgreSQL data model with a Flutter desktop client for day-to-day clinic workflows and local deployment.',
    tech: ['Flutter Desktop', 'Laravel 13', 'PostgreSQL', 'REST API', 'UUIDs', 'LAN-ready'],
    features: [
      'Admin login',
      'Patient management',
      'Appointments',
      'Daily queue',
      'Visits',
      'Invoices and payments',
      'Daily reports',
      'Backup logs',
      'License status',
    ],
    status: 'MVP / Architecture & Implementation',
    tone: 'sky',
    image: '/images/clinic-icon.png',
    github: 'https://github.com/abdulkareem424/clinic',
    demo: '',
  },
  {
    title: 'Acadia E-commerce Website',
    type: 'Storefront, Admin, and API',
    description:
      'A full-stack e-commerce store with React frontend, Express API, Prisma models, product uploads, authentication, and cart flow.',
    problem:
      'A local store needs a branded online storefront with product management, categories, secure auth, and a practical shopping workflow.',
    solution:
      'Built separate frontend and backend apps using React Router, Axios, Express, Prisma, JWT, validation, uploads, and product/category services.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Express', 'Prisma', 'JWT', 'Multer', 'Zod'],
    features: [
      'Landing page',
      'Product listing',
      'Product details',
      'Cart',
      'Admin API',
      'Product uploads',
      'Category management',
      'Validation',
    ],
    status: 'Full-stack MVP',
    tone: 'emerald',
    github: '',
    demo: '',
  },
]

export const academicProjects = [
  {
    title: 'Image Editor Desktop App',
    type: 'Academic Project',
    description:
      'A desktop image editor built with C# WinForms with basic and advanced image editing tools.',
    tech: ['C#', 'WinForms', 'Image Processing'],
    features: [
      'Grayscale',
      'Crop',
      'Rotate',
      'Flip',
      'Color channels',
      'Shapes',
      'Text',
      'Filters',
      'Undo / Redo',
    ],
    status: 'Academic',
    tone: 'violet',
    github: '',
    demo: '',
  },
  {
    title: 'Physio Center Node API',
    type: 'Backend Training Project',
    description:
      'A Node.js backend prototype for a physiotherapy center using Express, Sequelize, SQL Server, JWT authentication, and role-aware APIs.',
    tech: ['Node.js', 'Express', 'Sequelize', 'SQL Server', 'JWT', 'bcrypt'],
    features: [
      'Authentication',
      'CORS setup',
      'Environment config',
      'SQL Server connection',
      'ORM models',
      'API foundation',
    ],
    status: 'Training / Backend Prototype',
    tone: 'amber',
    github: '',
    demo: '',
  },
  {
    title: 'Simple HTTP Web Server',
    type: 'Networking Project',
    description:
      'A Python HTTP server that handles GET and POST requests, serves static files, and processes multipart uploads.',
    tech: ['Python', 'Sockets', 'HTTP', 'Multipart Upload'],
    features: ['GET requests', 'POST requests', 'Static files', 'File uploads', 'Multipart parsing'],
    status: 'Training Project',
    tone: 'rose',
    github: '',
    demo: '',
  },
  {
    title: 'Data Mining Notebook',
    type: 'Data & ML Project',
    description:
      'A notebook applying classification, regression, and clustering techniques on real datasets.',
    tech: ['Python', 'Jupyter Notebook', 'Pandas', 'Scikit-learn'],
    features: ['KNN', 'Decision Tree', 'Linear Regression', 'KMeans', 'Dataset preprocessing'],
    status: 'Academic',
    tone: 'orange',
    github: '',
    demo: '',
  },
]
