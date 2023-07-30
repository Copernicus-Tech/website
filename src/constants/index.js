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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  terminal,
  this_project,
  ic,
  jobit,
  option_pricing,
  wholefoods,
  tripguide,
  wix,
  threejs,
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

const services = [

  {
    title: "Scalable Performance",
    icon: mobile,
  },
  {
    title: "Strategic Cost Savings",
    icon: backend,
  },
  {
    title: "Strategic Cost Savings",
    icon: backend,
  },
  {
    title: "Mobile-first Approach",
    icon: creator,
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
    title: "Michael Scott",
    company_name: "Chief Executive Officer",
    icon: git,
    iconBg: "#383E56",
    date: "Apr 2022 - Present",
    points: [
      "Steers strategic decision-making process, aligning company's objectives with market opportunities.",
      "Cultivates partnerships and alliances to expand business reach and augment profitability.",
      "Serves as the public face of the company, enhancing brand visibility and trust.",
      "Promotes a culture of innovation and continuous learning within the organization.",
      "Ensures regulatory compliance and maintains strong relationships with stakeholders."
    ]
  },
  {
    title: "Jim Halpert",
    company_name: "Chief Security Officer",
    icon: git,
    iconBg: "#383E56",
    date: "Apr 2022 - Present",
    points: [
      "Defines and implements cybersecurity strategies to protect organizational data and IT infrastructure.",
      "Stays abreast of evolving security threats and mitigates risks with appropriate measures.",
      "Advocates for security-first culture, educating employees about potential cyber threats.",
      "Leads incident response efforts, minimizing impacts on business continuity.",
      "Collaborates with IT teams to integrate security measures in technology development."
    ]
  },
  {
    title: "Dwight Schrute",
    company_name: "Chief Technology Officer",
    icon: git,
    iconBg: "#383E56",
    date: "Apr 2022 - Present",
    points: [
      "Oversees the development of scalable technology solutions using popular tech stacks like Java, Python, React, Node.js, and Firebase.",
      "Drives technology strategy that aligns with business objectives and enables growth.",
      "Adopts emerging technologies, fostering a culture of innovation and excellence.",
      "Leads the architectural decisions, ensuring systems scalability and robustness.",
      "Manages tech vendor relationships, ensuring quality of products and services."
    ]
  },
  {
    title: "Darryl Philbin",
    company_name: "Chief Sales Officer",
    icon: git,
    iconBg: "#383E56",
    date: "Apr 2022 - Present",
    points: [
      "Directs sales strategies to drive revenue growth and market share expansion.",
      "Builds and leads high-performing sales teams focused on customer acquisition and retention.",
      "Monitors market trends to identify new opportunities and potential challenges.",
      "Ensures alignment of sales strategies with customer needs and market trends.",
      "Nurtures key client relationships, bolstering customer loyalty and satisfaction."
    ]
  },
  {
    title: "Oscar Martinez",
    company_name: "Chief Compliance Officer",
    icon: git,
    iconBg: "#383E56",
    date: "Apr 2022 - Present",
    points: [
      "Develops and enforces compliance policies to ensure adherence to industry standards and regulations.",
      "Leads internal audits and investigations, addressing compliance issues proactively.",
      "Serves as a liaison with regulatory bodies, ensuring transparency in company operations.",
      "Trains employees on regulatory requirements, minimizing risk of non-compliance.",
      "Stays current with changes in laws and regulations applicable to the company."
    ]
  },
  {
    title: "Kevin Malone",
    company_name: "Chief Financial Officer",
    icon: git,
    iconBg: "#383E56",
    date: "Apr 2022 - Present",
    points: [
      "Oversees financial planning, risk management, and financial reporting.",
      "Monitors cash flow, ensuring organization's financial stability and growth.",
      "Conducts financial analysis, identifying strengths and weaknesses for corrective actions.",
      "Ensures adherence to financial regulations and standards.",
      "Plays a strategic role in company's growth, aligning financial management with business plans."
    ]
  },
  {
    title: "Ryan Howard",
    company_name: "Developer",
    icon: git,
    iconBg: "#383E56",
    date: "Apr 2022 - Present",
    points: [
      "Contributes to system design and feature enhancements, improving product performance.",
      "Quickly adapts to new programming languages and technologies, driving innovation.",
      "Collaborates with cross-functional teams to achieve project milestones.",
      "Participates in code reviews, ensuring adherence to best practices.",
      "Troubleshoots software issues, improving system reliability and user experience."
    ]
  },
  {
    title: "Toby Flenderson",
    company_name: "Developer",
    icon: git,
    iconBg: "#383E56",
    date: "Apr 2022 - Present",
    points: [
      "Assists in the development of company's technology systems, meeting functional requirements.",
      "Collaborates with the CTO and other team members to deliver high-quality code.",
      "Stays abreast of industry trends, bringing innovative solutions to the table.",
      "Adheres to established coding standards, ensuring maintainability of the codebase.",
      "Participates in testing phases, identifying and fixing bugs."
    ]
  },
];

const testimonials = [
  {
    testimonial:
      "Please reach out below to hear our success stories and for references!",
    name: "Jerry",
    designation: "Founder",
    company: "KodiakCoding.com",
    image: mongodb,
  },
  /*
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
  */
];

const projects = [
  {
    name: "This Portfolio",
    description:
      "An immersive web portfolio showcasing creative works, achievements, and expertise, captivating audiences with compelling visuals and engaging storytelling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: this_project,
    source_code_link: "https://kodiakcoding.com",
  },
  {
    name: "CLI & GPT-4 App",
    description:
    "Unleashing the potential of Material-UI DataGrid and Term-x JavaScript libraries, I created a responsive and interactive web app. Powered by the GPT-4 API, it offers prompt and intelligent responses, revolutionizing user engagement with information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: terminal,
    source_code_link: "https://github.com/",
  },
  {
    name: "Option Pricing Model",
    description:
      "A versatile financial tool enabling precise calculations for option pricing, considering volatility, time, and risk-free rate, bringing clarity to derivatives markets.",
    tags: [
      {
        name: "Google-Apps",
        color: "blue-text-gradient",
      },
      {
        name: "HP-Computing",
        color: "green-text-gradient",
      },
      {
        name: "Matricies",
        color: "pink-text-gradient",
      },
    ],
    image: option_pricing,
    source_code_link: "https://en.wikipedia.org/wiki/Black%E2%80%93Scholes_model",
  },
];

export { services, technologies, experiences, testimonials, projects };
