import { BiLogoPhp, BiLogoAmazon, BiLogoPython, BiLogoJquery, BiLogoShopify, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiExpress } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Ecommerce",
    image: "./baria.png",
    icons: [BiLogoShopify, BiLogoJquery, BiLogoPhp],
    description: "This website provides resources and support for individual undergoing or considering bariatic surgery.",
    github: "https://github.com/VijayKumarReddyTalakola/IMDB",
    demo: "https://www.bariatricpal.com/",
  },
  {
    id: "2",
    name: "Finance Tech",
    image: "./klarna.png",
    icons: [BiLogoReact, BiLogoRedux, TbApi, TbDatabase],
    description: "It allows users to make purchases and pay for them later, either in installments or within a set timeframe kinds of shopping items.",
    github: "https://github.com/VijayKumarReddyTalakola/Ecommerce-Demo",
    demo: "https://www.klarna.com",
  },
  {
    id: "3",
    name: "Accelerate Platform",
    image: "./ehs.png",
    icons: [BiLogoPhp, BiLogoAmazon, BiLogoPython],
    description: "This chat application provides an interface to the users to interact with their friends.",
    github: "https://github.com/VijayKumarReddyTalakola/Chat-App",
    demo: "https://www.ehs.com/",
  },
  {
    id: "4",
    name: "Booking",
    image: "./kayak.png",
    icons: [ BiLogoMongodb, SiExpress, BiLogoReact, BiLogoRedux, BiLogoTailwindCss],
    description: "This application provides an interface for users to track their expenses .",
    github: "https://github.com/VijayKumarReddyTalakola/Expense-Tracker",
    demo: "https://vtrack-expense.vercel.app",
  },
  {
    id: "5",
    name: "Car Rental Website",
    image: "./car-rental-app.png",
    icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss, TbApi],
    description: "This is an online platform that allows users to rent cars for personal or business use.",
    github: "https://github.com/VijayKumarReddyTalakola/nextjs-car-rental-app",
    demo: "https://car-rental-application.vercel.app",
  },
  {
    id: "8",
    name: "Mobile Application",
    image: "./smallapp.png",
    icons: [TbBrandNextjs, BiLogoTailwindCss, BiLogoMongodb,TbBrandPrisma],
    description: "This application allows users to express their thoughts and experiences through blogs.",
    github: "https://github.com/VijayKumarReddyTalakola/Blog-Application",
    demo: "https://write-ur-blog.vercel.app",
  },
];

export default ProjectsData;
