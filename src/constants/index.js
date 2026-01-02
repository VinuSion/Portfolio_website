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
      "Developed and maintained company homepage using React and Next.js.",
      "Collaborated with design team to implement visually appealing and responsive UI components.",
      "Integrated dynamic content, conducted code reviews, and communicated effectively with cross-functional teams.",
      "Proactively addressed challenges, emphasized visual consistency, and optimized frontend performance at Mayaluna Seguros.",
    ],
  },
  {
    title: "Jr. Frontend Developer",
    company_name: "Redux",
    icon: redux_company,
    iconBg: "#ffffff",
    date: "Jan 2024 - Present",
    points: [
      "Contributed to code maintenance on diverse client projects within a business platform at SpeedDigital.",
      "Communicated with Client Success Managers (CSMs) to manage CMS content and seamlessly integrate it with the frontend.",
      "Proactively addressed challenges in creating and building new sites for platform clients.",
      "Optimized code for enhanced performance across multiple platforms and devices, integrating third-party APIs and services effectively.",
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
      "William stands out for his willingness to share knowledge, commitment to clean code and best practices, and continuous drive to learn new technologies.",
    name: "Charly Palencia",
    designation: "CEO",
    company: "Guarapo LLC",
    image: "https://res.cloudinary.com/stkv2/image/upload/v1767309935/charly_t6uiru.jpg",
  },
  {
    testimonial:
      "William is a highly dependable and curious team member who consistently works with autonomy, excellence, and a positive collaborative attitude.",
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
    source_code_link: "https://github.com/VinuSion/StockStores",
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
    "https://github.com/user-attachments/files/24403231/WILLIAM-GOMEZ_CV-English.pdf",
  spanish:
    "https://github.com/user-attachments/files/24403232/WILLIAM-GOMEZ_CV-Spanish.pdf",
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
