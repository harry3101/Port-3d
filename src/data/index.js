import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "CodSoft",
    date: "july(2024)-august(2024)",
    details: [
      "<strong>Developed and maintained</strong> responsive web applications, enhancing user experience and functionality.",
      "<em>Designed visually appealing</em> and interactive web pages, improving <span style='color: white;'>UI/UX and engagement</span>.",
      "<u>Collaborated with a team</u> to build and optimize web solutions, ensuring <span style='color: white;'>performance, scalability, and accessibility</span>.",
    ],
  },
  {
    title: "Frontend head",
    company_name: "Horixon sirsa",
    date: "2024-present",
    details: [
      "<strong>Led the frontend development</strong> of scalable web applications, ensuring high performance and user-friendly interfaces.",
      "<em>Designed and optimized</em> modern UI/UX components, improving <span style='color: white;'>accessibility and responsiveness</span>.",
      "<u>Collaborated with cross-functional teams</u> to implement innovative frontend solutions, enhancing <span style='color: white;'>efficiency and maintainability</span>.",
    ],
  },
  
  {
    title: " AWS-job similuation",
    company_name: "Forage",
    date: "2024",
    details: [
     "<strong>Deployed and managed</strong> cloud-based applications using AWS services, ensuring <span style='color: white;'>scalability and reliability</span>.",
  "<em>Configured and optimized</em> AWS resources, improving <span style='color: white;'>performance and cost efficiency</span>.",
  "<u>Implemented security best practices</u> for cloud infrastructure, enhancing <span style='color: white;'>data protection and compliance</span>.",
    ],
  },
];

const portfolio = [
  {
    name: "LMS(Learning Management System",
    description:
      "A full-featured LMS built with Next.js, Redux Toolkit, and Clerk authentication, backed by AWS S3 for storage and DynamoDB with an Express.js backend. It enables seamless course creation, management, and enrollment, with a responsive UI and secure access controls. Designed 🎓💻",
    image: oscs,
  },
  {
    name: "Job Portal",
    description:
      "A modern job portal built with MERN stack (MongoDB, Express, React, Node.js), featuring real-time job listings, user authentication, and application tracking. Employers can post jobs, while candidates can search, apply, and track applications seamlessly. Optimized for performance and a smooth user experience. 🔍💼.",
    image: devnotes,
  },
  {
    name: "Chat-Application",
    description:
      "A real-time chat application built with MERN stack and Socket.io, enabling instant messaging, group chats, and media sharing. Features user authentication, online status indicators, and responsive UI for a seamless experience. Secure and scalable for smooth communication. 💬⚡.",
    image: algorithms,
  },
];

export { experiences, portfolio };

