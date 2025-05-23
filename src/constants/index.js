import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tensorflow,
    tailwind,
    nodejs,
    mongodb,
    git,
    flask,
    python,
    figma,
    pytorch,
    docker,
    tire,
    ETIC,
    tydal,
    liverExpert,
    BaborPneus,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "python",
      icon: python,
    },
    {
      name: "pytorch",
      icon: pytorch,
    },
    {
      name: "tensorflow",
      icon: tensorflow,
    },
    {
      name: "flask",
      icon: flask,
    },
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
      name: "React JS",
      icon: reactjs,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "IA Developer",
      company_name: "Tydal Machine",
      icon: tydal,
      iconBg: "#383E56",
      date: "December 2024 - Current",
      points: [
        'Offensive Language Detection (NLP): Collected and cleaned multilingual data, then fine-tuned BERT and DistilBERT models to classify offensive vs. non-offensive text.',
        'Facial Recognition Attendance System: Built a real-time face recognition system using embeddings and vector search for employee check-in',
        'AI-Powered Surveillance System(Ongoing): Developed a multi-camera surveillance system using tensorrt YOLO for person detection and face recognition powered by NVIDIA GPUs and vector embeddings.',
       ],
    },
    {
      title: "Student Intern web developer",
      company_name: "BABOR Pneus ",
      icon: tire,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - June 2022",
      points: [
        "Designed and developed a full-stack web platform for tire reservation tailored to company needs.",
        "Implemented a responsive frontend using Bootstrap to ensure user-friendly navigation across devices.",
        "Built a robust backend with Laravel to handle business logic, user interactions, and booking processes.",
        "Integrated a relational database to manage tire inventory, availability, and customer reservations efficiently.",
      ]
    },
    {
      title: "Mmeber",
      company_name: "ETIC",
      icon: ETIC,
      iconBg: "#383E56",
      date: "2021 - Jan 2024",
      points: [
        "Actively contributed to the ETIC Club at ESI by organizing major events such as S2EE and TC.",
        "Facilitated professional interactions between companies and club members to support networking and partnerships.",
        "Managed club communications through emails and social media to ensure consistent outreach and engagement.",
        "Mentored new members to support their onboarding and integration into the team.",
      ]      
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Offensive Text classification",
      description:
        "Developed a multilingual offensive language detection system using BERT and DistilBERT models, trained on a custom dataset of 100k+ tweets, achieving 95% accuracy.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "Huggingface",
          color: "yellow-text-gradient",
        },
        {
          name: "Bert",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "LiverExpert",
      description:
        "Using CNNs with TensorFlow, liver, vein, and tumor segmentation is performed on CT scans, then reconstructed in 3D with VTK and integrated into Unity and Flutter for real-time AR visualization and surgical planning.",
      tags: [
        {
          name: "tensorflow",
          color: "blue-text-gradient",
        },
        {
          name: "VTK",
          color: "green-text-gradient",
        },
        {
          name: "UNITY",
          color: "pink-text-gradient",
        },
      ],
      image: liverExpert,
      source_code_link: "https://drive.google.com/file/d/1Or6UgUuEVOEwPKoyKRYo8vAgRwSAqalZ/view?usp=drive_link",
    },
    {
      name: "BaborPneus",
      description:
        "Developed a website for product access and tire reservations, with a Bootstrap front-end, Laravel back-end, and a database for product management.",
      tags: [
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
        {
          name: "laravel",
          color: "pink-text-gradient",
        },
      ],
      image: BaborPneus,
      source_code_link: "https://github.com/",
    }
    

  ];
  
  export { services, technologies, experiences, testimonials, projects };