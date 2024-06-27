import project2 from "../assets/projects/project-2.jpg";


export const HERO_CONTENT = `I'm a passionate full stack developer dedicated to crafting exceptional web experiences. With a solid foundation in both front-end and back-end development, I specialize in leveraging technologies like React, Next.js, Node.js, and various databases including MySQL, PostgreSQL, and MongoDB. I thrive on solving complex problems and turning ideas into scalable solutions that drive business growth and user engagement. Beyond coding, I enjoy staying updated with emerging technologies, contributing to open-source projects, and collaborating with teams to deliver impactful results`;

export const ABOUT_TEXT = `I am a passionate full stack developer who loves building user-friendly web applications. Although I am just starting my career, I am eager to learn and grow in this field. I have experience with front-end technologies like React and Next.js, as well as back-end technologies like Node.js. I am also familiar with databases such as MySQL, PostgreSQL, and MongoDB. My journey began with a curiosity about how web applications work, and now I am focused on creating efficient solutions. I enjoy working in teams and solving problems together. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

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
    title: "Job Search Portal",
    image:
      "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9ic3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "This application is a job search portal built using the MERN stack (MongoDB, Express, React, and Node.js). It allows users to search for jobs, view job details, and apply for jobs. The application also includes features for user authentication and job management.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://github.com/shivPratap007/job-search",
  },
  {
    title: "Public Review App",
    image: project2,
    description:
      "This project is a simple public review application built with React, TypeScript, and Vite. Users can submit reviews by writing a review text containing a hashtag for the topic (e.g., #TopicName). The app displays a list of all submitted reviews and allows users to filter reviews by topics",
    technologies: ["HTML", "CSS", "React.js"],
    link: "https://github.com/shivPratap007/public-review",
  },
  {
    title: "Book Management Application",
    image:
      "https://plus.unsplash.com/premium_photo-1677187301535-b46cec7b2cc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvb2slMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww",
    description:
      "This application is built using Express, Node.js, MongoDB, and Cloudinary. It allows users to store information about books, including the PDF file and the writer's name, in a MongoDB database and store the PDF files on Cloudinary.",
    technologies: ["Node.js", "Express", "React"],
    link: "https://github.com/shivPratap007/book-app",
  },
  {
    title: "Blogging Platform",
    image:
      "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3N8ZW58MHx8MHx8fDA%3D",
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["EJS", "Node.js", "React.js", "Express", "Mongodb"],
    link: "https://github.com/shivPratap007/bloggingApp",
  },
];

export const CONTACT = {
  address: "Ghaziabad, UttarPradesh, India ",
  phoneNo: "+ 4555 666 00 ",
  email: "sp09singhwaghel@gmail.com",
};
