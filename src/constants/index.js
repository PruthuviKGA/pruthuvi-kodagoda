import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.jpg";
import education1 from "../assets/education/uom_logo.png";
import education2 from "../assets/education/kcc_logo.png";
import Publication1 from "../assets/publication/publication1.jpg";

export const HERO_CONTENT = `Self-motivated and technically skilled software engineering undergraduate with comprehensive hands-on experience in full-stack development and Agile SDLC environments. A fast learner with a strong ability to quickly adapt to new programming languages, tools, and frameworks. Passionate about solving complex problems, collaborating in diverse teams, and exploring innovative solutions through cutting-edge research and emerging technologies.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
  {
    title: "University of Moratuwa",
    image: education1,
    year: "2021 - Present",
    description:
      "Bachelor Of Science in Information Technnology <br /> Current GPA: 3.52",
    technologies: ["Major - Full Stack Development", "Minor - Machine Learning"],
  },
  {
    title: "C. W. W. Kannangara Central College Matugama",
    image: education2,
    year: "2010 - 2019",
    description:
      "GCE Advanced Level | 2019 <br /> Stream: Physical Science <br /> Z-Score: 1.7345",
    technologies: ["ICT", "Combined Mathematics", "Physics"],
  },
];

export const EXPERIENCES2 = {
    year: "Jan 2024 - Aug 2024",
    role: "Software Engineer Intern",
    company: "Xeptagon (Pvt) Ltd",
    description: `Contributed to 4+ projects involving UI/UX design, frontend development, backend development, RESTful API integration, and unit testing for backend services based on client requirements. Specific project details are confidential due to company policy. Demonstrated strong technical skills, adaptability, and teamwork throughout the period.`,
    technologies: ["ReactTS", "SCSS", "NestJS", "PostgreSQL", "SharePoint (SPFx) Framework", "Figma", "Docker", "Jira", "Bootstrap", "Ant Design"]
};

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Automated Step-By-Step Visual Performance Guide Generation from Sinhala Demonstration Videos",
    image: project1,
    description:
      "A system that automatically creates visual performance guides from Sinhala demonstration videos, letting viewers to swiftly understand crucial information using synced text and images. ",
    role: " Visual Content Extraction and Alignment (Responsible for Module 3)",
    technologies: ["Python", "YOLO", "OpenCV"],
    link:"https://github.com/shakila2030/Automated-Step-By-Step-Visual-Performance-Guide-Generation-from-Sinhala-Demonstration-Videos",
  },
  {
    title: "Wine Quality Prediction System",
    image: project2,
    description:
      "Developed a machine learning model to predict wine quality (rated 1–10) based on physicochemical properties and wine type (red/white). Performed data preprocessing, feature engineering, and applied cross-validation with multiple algorithms. Achieved 91.69% accuracy using Random Forest. Implemented test predictions and visual evaluation metrics like confusion matrix for model validation.",
    role: " ML Developer",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    link:"https://github.com/PruthuviKGA/wine-quality-prediction-system",
  },
  {
    title: "Library Management System",
    image: project3,
    description:
      "Designed and maintained 50+ automated test suites for website UI and backend APIs, ensuring functionality, performance, and security with continuous reporting via GitHub Actions.",
    role: " Conducted backend API Testing & Generated reports using CI/CD pipeline",
    technologies: ["Postman", "GitHub Actions"],
    link:"https://github.com/PruthuviKGA/Library-Management-System",
  },
  {
    title: "Procurement Workflow Management System",
    image: project4,
    description:
      "Contributed to the development of a comprehensive Procurement Management System by leading frontend implementation with modern, user-friendly interfaces and seamless functionality. Established 15+ key API integrations to enable real-time data synchronization between frontend and backend. Supported backend development by designing optimized database models, controllers, and services to enhance overall application performance.",
    role: "Full Stack Developer",
    technologies: ["ReactJS", ".NET Core", "MSSQL", "Material UI"],
    link:"https://github.com/PruthuviKGA/ProcurementManagementSystem",
  },
  {
    title: "Jam Cheese Applicator (Microcontroller Based)",
    image: project5,
    description:
      "Designed a system to evenly apply spreads like butter, jam, or cheese on bread slices, detecting empty spread or bread containers and alerting the user. Developed to enhance real-world problem-solving skills through an automation challenge.",
    role: "System Designer & Implementation Engineer",
    technologies: ["C", "Atmel Studio", "Proteus Simulation", "KiCad"],
    link:"https://github.com/PruthuviKGA/Jam-Cheese-Applicator",
  },
];

export const PUBLICATION = [
  {
    year: "Apr 2024",
    image: Publication1,
    title: "Use of Artificial Intelligence in the Automobile Industry",
    conference: "ICTIS 2025",
    description: `Accepted and presented at the 9th International Conference on Information and Communication Technology for Intelligent Systems, held on 6th April 2025 in Bangkok, Thailand. This paper focused on AI applications in the automobile industry, examined current challenges, and proposed future directions with practical suggestions, emphasizing ethical, security, and sustainability considerations.`,
    authors: "K. G. A. P Dilshan & K. A. D. T Kulawansa",
  },
];

export const CONTACT = {
  address: "Bentota, Sri Lanka",
  phoneNo: "+94 71 103 2925",
  email: "pruthuvidilshan@gmail.com",
};
