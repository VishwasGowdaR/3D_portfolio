// src/constants/index.js
import { mcdonalds, picnic, motherson, siemens } from "../assets/images";
import {
  contact,
  github,
  linkedin,
  excel,
  sap,
  powerbi,
  sql,
  sixsigma,
  logistics,
  projectmgmt,
  cad,
} from "../assets/icons";

export const skills = [
  { imageUrl: excel,      name: "Excel",             type: "Tool" },
  { imageUrl: sap,        name: "SAP",               type: "ERP" },
  { imageUrl: powerbi,    name: "Power BI",          type: "BI" },
  { imageUrl: sql,        name: "SQL",               type: "Database" },
  { imageUrl: sixsigma,   name: "Lean Six Sigma",    type: "Method" },
  { imageUrl: logistics,  name: "Logistics",         type: "Domain" },
  { imageUrl: projectmgmt,name: "Project Management",type: "Method" },
  { imageUrl: cad,        name: "CAD",               type: "Tool" },
];

export const experiences = [
  {
    title: "Inventory Assistant",
    company_name: "McDonald´s",
    icon: mcdonalds,
    iconBg: "#ecf0a4ff",
    date: "June 2024 - Present",
    points: [
      "Collaborated with team members to manage high-volume demand and consistently meet service targets.",
      "Adapted quickly in a fast-paced environment, contributing to smooth day-to-day operations.",
      "Managed stock rotation and restocking to maintain accurate inventory levels and minimize waste.",
    ],
  },
  {
    title: "Warehouse Assistant",
    company_name: "PICNIC",
    icon: picnic,
    iconBg: "#ddababff",
    date: "April 2024 - March 2025",
    points: [
      "Picked, packed and dispatched 50+ daily orders accurately; maintained inventory via labelling and restocking for efficient operations.",
      "Worked with teams to meet targets in fast-paced settings, used WMS/scanners to reduce errors and boost workflow speed.",
      "Assisted in monitoring stock levels and coordinated with team to ensure timely replenishment and avoid shortages.",
      "Collaborated with cross-functional teams to prioritize urgent orders and ensure on-time delivery.",
    ],
  },
  {
    title: "Procurement Assistant",
    company_name: "Motherson Sumi Wiring India Ltd",
    icon: motherson,
    iconBg: "#e9bbbcff",
    date: "September 2022 - December 2023",
    points: [
      "Coordinated with multiple suppliers to maintain steady material flow, achieving 90% on-time sourcing of raw materials critical to uninterrupted production.",
      "Streamlined procurement workflows by leveraging ERP systems, reducing manual entry errors by 20% and improving overall data accuracy.",
      "Monitored inventory levels and purchase requisitions through ERP to ensure timely replenishment, minimizing stockouts and production delays",
      "Partnered with production and logistics teams to resolve bottlenecks, cutting delays.",
    ],
  },
  {
    title: "Internship Trainee",
    company_name: "Siemens",
    icon: siemens,
    iconBg: "#c3ffc8ff",
    date: "Sept 2021 - Dec 2021",
    points: [
      "Designed high-precision product components using CAD & PLM tools.",
      "Applied Lean Manufacturing principles to reduce production waste and improve efficiency",
    ],
  },
];

export const socialLinks = [
  { name: "Contact",  iconUrl: contact, link: "/contact" },
    { name: "LinkedIn", iconUrl: linkedin,link: "https://www.linkedin.com/in/vishwasgowdaramesh/"}
];

export const projects = [
  {
    name: "BoxBuddy – Smart Delivery Box",
    description:
      "Smart delivery box (standard/shared/cooling) to prevent missed deliveries and keep parcels safe.",
    link: "https://vishwasgowdar.github.io/boxbuddy-prototype-clean/",
  },
  {
    name: "Smart Bookshelf (inventory management App)",
    description:
      "Inventory and access app for a bookstore — manage books, users, and sessions with a clean flow.",
    link: "https://smart-bookshelf.lovable.app/auth",
  },
    {
    name: "Smart Supply Chain Flow",
    description:
      "Inventory and analytics app for grocery stores manage stock, sales, suppliers, finance, and performance with an intuitive dashboard. Create an account with fake credentials and explore the app",
    link: "https://bit.ly/Supply-chain-flow",
  },
];

export const achievements = [
  {
    name: "Global Supply Chain Simulation (GQR 2025)",
    issuer: "Inchainge",
    date: "Apr 2025",
    description: "Led team to top 15% finish by optimizing a multi-country supply chain and improving on-time delivery to 95%.DMAIC projects; waste reduction and process capability.",
    link: "https://education.inchainge.com/certificate/CTLVKKNV2EPQTTCB",
  },
  {
    name: "Fresh Connection",
    issuer: "Inchainge",
    date: "Feb 2025",
    description: "Boosted EBITDA by 25% through inventory optimization and supplier renegotiation; ranked #1 team.",
    link: "https://education.inchainge.com/certificate/F41GR566GQ1UDJBX",
  },
  {
    name: "Blue Connection",
    issuer: "Inchange",
    date: "Dec 2024",
    description: "Cut carbon footprint by 30% using circular supply chain strategies while maintaining profitability..",
    link: "https://education.inchainge.com/certificate/XBNP3J77WP83DLWW",
  },
  {
    name: "Lean Six Sigma — white and Yellow Belt",
    issuer: "Six Sigma Academy Amsterdam",
    date: "Apr 2025",
    description: "Intro to lean, variation, and continuous improvement cultur and Master data and core purchasing flows in S/4HANA.",
    link: "https://www.virtualbadge.io/certificate-validator?credential=199ea993-21d2-4fbc-8a8e-ec8c01f05c40",
  },
  {
    name: "Lean Six Sigma — Green Belt",
    issuer: "Six Sigma Academy Amsterdam",
    date: "Apr 2024",
    description: "Intro to lean, variation, and continuous improvement culture.",
    link: "https://www.virtualbadge.io/certificate-validator?credential=6d93a7de-8665-458c-b026-e73096bd73ea",
  },
    {
    name: "AI & Productivity (Coursera)",
    issuer: "Santander",
    date: "2024",
    description: "Applied AI tools to automate routine analysis and writing tasks.",
    link: "https://learners.outskill.com/certificate/a074a4a2-9ff6-4727-b3d6-fceacff6cd80",
  },
  {
    name: "Generative AI in Business Operations",
    issuer: "Outskill",
    date: "2024",
    description: "Used GenAI to streamline ops and knowledge workflows.",
    link: "https://learners.outskill.com/certificate/a074a4a2-9ff6-4727-b3d6-fceacff6cd80",
  },
  {
    name: "SQL for Data Analysis",
    issuer: "Coursera",
    date: "May2024",
    description: "Completed SQL for Data Science Capstone, applying SQL to real-world data challenges",
    link: "https://www.coursera.org/account/accomplishments/verify/E6TLQSD73CZX",
  },
  {
    name: "SQL for Data Science Capstone Project",
    issuer: "Coursera",
    date: "June 2025",
    description: "Built a data model and dashboards for supply-chain decisions.",
    link: "https://www.coursera.org/account/accomplishments/verify/N6EJ9AB2G2TD",
  },
  
  {
    name: "Autodesk CAD Design",
    issuer: "Autodesk",
    date: "2023",
    description: "CAD fundamentals and parametric modeling for manufacturable parts.",
    link: "https://www.coursera.org/account/accomplishments/verify/3WMGQNTXUFQY",
  },

];
