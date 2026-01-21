import {
  react,
  js,
  ux,
  frontend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mayaluna,
  redux_company,
  guarapo,
  amiralabs,
  stockstores,
  sparkwatch,
  artiheal,
  github,
  linkedin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socials = [
  {
    id: 1,
    name: "Github",
    url: "https://github.com/VinuSion/",
    img: github,
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/william-dev-g/",
    img: linkedin,
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Javascript Developer",
    icon: js,
  },
  {
    title: "UX Designer",
    icon: ux,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Intern",
    company_name: "Mayaluna Seguros",
    icon: mayaluna,
    iconBg: "#ffffff",
    date: "Jul 2023 - Dec 2023",
    points: [
      "Contributed to the development and maintenance of the company's public-facing website using React and Next.js, working on production features rather than isolated demos.",
      "Implemented responsive, design-driven UI components in close collaboration with designers, ensuring visual consistency across devices and browsers.",
      "Integrated dynamic content and participated in code reviews, improving code quality and aligning with team standards.",
      "Identified and resolved frontend performance and UI consistency issues, helping improve page responsiveness and overall user experience.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Amira Labs",
    icon: amiralabs,
    iconBg: "#1affbe",
    date: "Jun 2025 - Sep 2025",
    points: [
      "Designed and built the frontend for Amira SENSE, a production web dashboard for monitoring ML-based language detection across multiple broadcast streams, using Next.js, React, and Tailwind CSS.",
      "Delivered a responsive, data-driven UI capable of handling real-time or near-real-time monitoring requirements across multiple channels.",
      "Worked directly with clients and stakeholders to define requirements, prioritize features, and deliver iterative releases within agreed timelines.",
      "Improved UI/UX beyond the initial Figma designs by refining information hierarchy, interaction flows, and usability for operational users.",
      "Integrated backend services documented via OpenAPI/Swagger, collaborating with a FastAPI backend to ensure reliable frontend-backend communication.",
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    company_name: "Guarapo Labs",
    icon: guarapo,
    iconBg: "#ffffff",
    date: "Aug 2025 - Dec 2025",
    points: [
      "Owned the architecture and full-stack implementation of claveDIAN, an OAuth-secured automation platform for distributing DIAN emails to accountants across multiple communication channels.",
      "Converted business requirements and stakeholder feedback into scalable technical designs, balancing delivery speed with long-term maintainability.",
      "Built and iterated on frontend and backend features in close collaboration with clients, enabling rapid validation and continuous improvement.",
      "Integrated external messaging services (email, WhatsApp, SMS) and implemented secure authentication and automation workflows.",
      "Established clear technical documentation and development standards to support maintainability and future iteration.",
      "Led UI design and user-flow validation using Figma and interactive prototyping tools.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Redux",
    icon: redux_company,
    iconBg: "#ffffff",
    date: "Jan 2024 - Present",
    points: [
      "Developed, maintained, and extended frontend features across multiple client websites within a shared business platform, working on active production codebases.",
      "Collaborated closely with Client Success Managers to translate client requirements into technical solutions, integrating CMS-managed content seamlessly into the frontend.",
      "Built and launched new client sites on the platform, adapting existing architecture and components to meet varying business needs and branding requirements.",
      "Optimized frontend performance, responsiveness, and cross-browser compatibility, while integrating third-party APIs and external services where required.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "William is an outstanding Full-Stack Engineer with strong React.js expertise, known for delivering scalable, user-focused applications even under tight deadlines.",
    name: "Juan Salas",
    designation: "Frontend Developer",
    company: "Redux",
    image: "https://res.cloudinary.com/stkv2/image/upload/v1767309935/juan_rhd9c5.jpg",
  },
  {
    testimonial:
      "He distinguishes himself by generously sharing knowledge, writing clean, best-practice code, and continuously pursuing new technologies.",
    name: "Charly Palencia",
    designation: "CEO",
    company: "Guarapo LLC",
    image: "https://res.cloudinary.com/stkv2/image/upload/v1767309935/charly_t6uiru.jpg",
  },
  {
    testimonial:
      "A dependable and curious teammate, he works autonomously to a high standard while keeping a positive, collaborative attitude.",
    name: "Joan Romero",
    designation: "People Ops Lead",
    company: "Redux",
    image: "https://res.cloudinary.com/stkv2/image/upload/v1767309935/joan_rehkuy.jpg",
  },
];

const projects = [
  {
    name: "StockStores",
    description:
      "A web-based platform empowering local store owners to effortlessly manage their neighborhood convenience store inventory, offering a streamlined and effective solution for local business administration.",
    language: "Spanish",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "purple-text-gradient",
      },
    ],
    image: stockstores,
    demo: "https://stockstores.onrender.com/",
    source_code_link: "https://github.com/VinuSion/StockStores-v2",
  },
  {
    name: "Sparkwatch Movies",
    description:
      "Web application that replicates IMDb movie listing using themoviedb.org API, enabling users to find their favorite movies and favorite them with ease with useful and relevant information of each movie title.",
    language: "English",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      },
      {
        name: "material-ui",
        color: "blue-text-gradient",
      },
    ],
    image: sparkwatch,
    demo: "https://sparkwatch-movies-8095d.web.app/",
    source_code_link: "https://github.com/VinuSion/SparkWatch-Movies",
  },
  {
    name: "Artiheal",
    description:
      "A comprehensive health follow-up platform that allows users to choose their daily health routine and keep up with details about the state of their health with an intuitive dashboard.",
    language: "Spanish",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: artiheal,
    demo: "https://artiheal.onrender.com/",
    source_code_link: "https://github.com/VinuSion/Artiheal",
  },
];

const cvLinks = {
  english:
    "https://github.com/user-attachments/files/24778543/William_Gomez_Frontend_Developer.pdf",
  spanish:
    "https://github.com/user-attachments/files/24778549/William_Gomez_Desarrollador_Frontend.pdf",
};

export {
  socials,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  cvLinks,
};
