// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import javascript from "./assets/images/Skills/javascript.jpg";
import htmlcss from "./assets/images/Skills/htmlcss.png";
import nodejs from "./assets/images/Skills/node.png";
import mysql from "./assets/images/Skills/mysql.jpg";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import project4 from "./assets/images/projects/img4.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaWhatsapp } from 'react-icons/fa';


export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Développeuse Web & Graphiste",
    firstName: "SEMOU",
    LastName: "GRACE",
    btnText: "Engagez-Moi",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Années d'expérience en développement web et graphiste",
      },
      {
        count: "3+",
        text: "Projets réalisés",
      },
    ],
  },
  skills: {
    title: "Compétences",
    subtitle: "MES COMPÉTENCES CLÉS",
  skills_content: [
  {
    name: "HTML/CSS",
    para: "Langages de base pour le développement web.",
    details: "HTML est utilisé pour structurer le contenu, tandis que CSS est utilisé pour le style et la mise en page.",
    logo: htmlcss,
  },
  {
    name: "Node.js",
    para: "Exécution JavaScript côté serveur rapide.",
    details: "Permet de créer des applications réseau évolutives et performantes.",
    logo: nodejs,
  },
  {
    name: "React.js",
    para: "Bibliothèque pour interfaces utilisateur dynamiques.",
    details: "Facilite le développement d'applications monopages avec des composants réutilisables.",
    logo: reactjs,
  },
  {
    name: "PHP",
    para: "Langage pour développer des sites dynamiques.",
    details: "Utilisé principalement pour le développement web côté serveur.",
    logo: sketch,
  },
  {
    name: "Django",
    para: "Framework Python pour applications web sécurisées.",
    details: "Offre des fonctionnalités robustes pour le développement rapide d'applications web.",
    logo: python,
  },
  {
    name: "JavaScript",
    para: "Langage pour rendre les pages interactives.",
    details: "Utilisé pour le développement frontend et backend.",
    logo: javascript,
  },
  {
    name: "MySQL",
    para: "Système de gestion de bases de données.",
    details: "Permet de stocker et de gérer des données pour des applications web.",
    logo: mysql,
  },
  {
    name: "Figma",
    para: "Outil de conception d'interfaces collaboratives.",
    details: "Idéal pour créer des maquettes et prototypes interactifs avec des équipes.",
    logo: figma,
  },
  {
    name: "Adobe Photoshop",
    para: "Logiciel de retouche photo et design.",
    details: "Utilisé pour créer et modifier des images avec des outils avancés.",
    logo: ps,
  },
  
  // {
  //   name: "Canva",
  //   para: "Outil intuitif pour créer des designs professionnels et visuels attractifs.",
  //   details: "utilisé pour créer des designs professionnels : présentations, affiches, publications pour les réseaux sociaux, et bien plus.",
  //   logo: canva,
  // },
  // {
  //   name: "PostreSQL",
  //   para: "Système de gestion de bases de données open-source performant. ",
  //   details: " performant, Prise en charge des transactions ACID, types de données avancés, et extensibilité pour répondre aux besoins des applications critiques.",
  //   logo: postresql,
  // },
  
  // {
  //   name: "Canva",
  //   para: "Outil intuitif pour créer des designs professionnels et visuels attractifs.",
  //   details: "utilisé pour créer des designs professionnels : présentations, affiches, publications pour les réseaux sociaux, et bien plus.",
  //   logo: canva,
  // },
 

],

    
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "CE QUE JE PROPOSE",
    service_content: [
      {
        title: "Développement Web",
        para: "Le développement web implique la création et la maintenance de sites et applications interactifs. J'utilise des technologies modernes comme HTML, CSS et JavaScript pour concevoir des interfaces attrayantes. Mon approche combine esthétisme et performance, offrant une expérience utilisateur fluide. Que ce soit pour des sites vitrines,des applications web ou des solutions e-commerce, je propose des solutions sur mesure pour transformer vos idées en réalité numérique et créer des espaces en ligne inspirants.",
        logo: services_logo1,
      },
      // {
      //   title: "ui / ux DESIGNING",
      //   para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
      //   logo: services_logo2,
      // },
      {
        title: "Édition Photo sur Photoshop",
        para: "L'édition photo sur Photoshop permet d'améliorer et de retoucher des images numériques grâce à des outils avancés. Avec ses fonctionnalités puissantes, vous pouvez ajuster les couleurs, la luminosité et corriger les imperfections. Que ce soit pour des portraits, des paysages ou des créations graphiques, Photoshop offre une flexibilité exceptionnelle pour donner vie à votre vision artistique. Transformez vos images en œuvres d'art captivantes avec des techniques de montage et des effets visuels innovants.",
        logo: services_logo3,
      },
    ],
  },Projects: {
    title: "Projets",
    subtitle: "MA CRÉATION", 
    image: person_project,
    project_content: [
      {
        title: "suite sale",
        image: project1,
        link: "suite-sale.cm",
      },
      {
        title: "kideloo",
        image: project2,
        link: "kideloo.afrokrema.com/",
      },
      {
        title: "Corec",
        image: project3,
        link: "corec.info/",
      },
      {
        title: "Afrokrema",
        image: project4,
        link: "afrokrema.com",
      },
    ],
  },
  
  Testimonials: {
    title: "Témoignages", 
    subtitle: "LES AVIS DE MES CLIENTS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Engagez-Moi",
    subtitle: "POUR VOS PROJETS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Je suis développeuse web passionnée. Mon parcours m'a permis de découvrir le pouvoir de la technologie pour créer des solutions innovantes Je crois que chaque site web devrait être accessible et engageant. Mon objectif est de construire des espaces numériques qui connectent et inspirent.",
    btnText: "Engagez-Moi",
  },
  Contact: {
    title: "Contactez-moi", 
    subtitle: "ENTREZ EN CONTACT",
    social_media: [
      {
        text: "gracelyana647@gmail.com",
        icon: GrMail,
        link: "mailto:gracelyana647@gmail.com",
      },
      {
        text: "+237 657 716 282",
        icon: FaWhatsapp,
        link: "https://wa.me/65771682",
      },
      {
        text: "leoisagrace",
        icon: BsInstagram,
        link: "https://www.instagram.com/leoisagrace/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
