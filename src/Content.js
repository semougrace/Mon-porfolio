// import images
import Hero_person from "./assets/images/Hero/person.png";

// import figma from "./assets/images/Skills/figma.png";
// import sketch from "./assets/images/Skills/sketch.png";
// import ps from "./assets/images/Skills/ps.png";
// import reactjs from "./assets/images/Skills/react.png";
// import javascript from "./assets/images/Skills/javascript.jpg";
// import htmlcss from "./assets/images/Skills/htmlcss.png";
// import nodejs from "./assets/images/Skills/node.png";
// import mysql from "./assets/images/Skills/mysql.jpg";
// import python from "./assets/images/Skills/python.png";

// import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.jpeg";
import project2 from "./assets/images/projects/img2.jpeg";
import project3 from "./assets/images/projects/img3.jpeg";
import project4 from "./assets/images/projects/img4.png";
import project5 from "./assets/images/projects/img5.png";
import project6 from "./assets/images/projects/img6.png";
import project7 from "./assets/images/projects/img7.png";
import project8 from "./assets/images/projects/img8.png";
import project9 from "./assets/images/projects/img9.png";
import project10 from "./assets/images/projects/img10.png";
import project11 from "./assets/images/projects/img11.png";
import project12 from "./assets/images/projects/img12.png";
import project13 from "./assets/images/projects/img13.png";
import project14 from "./assets/images/projects/img14.png";
import project15 from "./assets/images/projects/img15.png";
import project16 from "./assets/images/projects/img16.png";
import project17 from "./assets/images/projects/img17.png";
import project18 from "./assets/images/projects/img18.png";
import project19 from "./assets/images/projects/img19.png";
import project20 from "./assets/images/projects/img20.png";
import project21 from "./assets/images/projects/img21.png";



import person_project from "./assets/images/projects/person.png";

import avatar from "./assets/images/Testimonials/avatar.jpg";
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
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';


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
    title: "Community Management & Graphiste",
    firstName: "SEMOU",
    LastName: "GRACE",
    btnText: "Engagez-Moi",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Années d'expérience en Community Management et graphiste",
      },
      {
        count: "10+",
        text: "Projets réalisés",
      },
    ],
  },
//   skills: {
//   title: "Compétences",
//   subtitle: "MES COMPÉTENCES EN COMMUNITY MANAGEMENT",
//   skills_content: [
//     {
//       name: "Gestion des réseaux sociaux",
//       para: "Création, planification et animation de contenus sur les principales plateformes (Facebook, Instagram, LinkedIn, TikTok...).",
//       details: "Mise en place de stratégies de publication cohérentes avec l’image de marque pour accroître l’engagement et la visibilité.",
//       logo: socialmedia, // ton icône ici (ex: un logo de réseaux sociaux)
//     },
//     {
//       name: "Création de visuels & branding",
//       para: "Conception d’affiches, de logos, de bannières et de visuels publicitaires.",
//       details: "Utilisation de Canva et Photoshop pour créer des designs harmonieux, respectant la charte graphique de la marque.",
//       logo: design, // logo à adapter (ex: ton image pour le design)
//     },
//     {
//       name: "Stratégie digitale",
//       para: "Élaboration de stratégies de communication efficaces et ciblées.",
//       details: "Analyse du marché, définition des personas, et mise en œuvre de plans de contenu adaptés aux objectifs marketing.",
//       logo: strategy, // icône de stratégie ou flèche montante
//     },
//     {
//       name: "Publicité Facebook & Instagram Ads",
//       para: "Création et gestion de campagnes publicitaires performantes.",
//       details: "Ciblage précis des audiences, optimisation du budget et suivi des performances via Meta Ads Manager.",
//       logo: facebookads, // icône Meta/Facebook
//     },
//     {
//       name: "Analyse des performances",
//       para: "Suivi des statistiques et reporting.",
//       details: "Utilisation des outils d’analyse (Meta Insights, Google Analytics) pour ajuster les campagnes et maximiser le retour sur investissement.",
//       logo: analytics, // logo graphique ou Google Analytics
//     },
//     {
//       name: "Copywriting & storytelling",
//       para: "Rédaction de contenus engageants et pertinents.",
//       details: "Création de messages percutants adaptés à chaque audience pour renforcer l’identité de la marque.",
//       logo: writing, // icône de plume ou texte
//     },
//     {
//       name: "Animation de communauté",
//       para: "Interaction avec les abonnés et modération des échanges.",
//       details: "Gestion des commentaires, réponses aux messages et fidélisation de la communauté.",
//       logo: community, // icône de personnes ou groupe
//     },
//     {
//       name: "Formation & accompagnement",
//       para: "Transmission de compétences en communication digitale.",
//       details: "Formation sur la publicité Facebook et les bonnes pratiques de gestion de communauté.",
//       logo: formation, // icône livre ou chapeau de diplômé 🎓
//     },
//   ],
//   icon: MdArrowForward,
// },

skills: {
  title: "Compétences",
  subtitle: "MES COMPÉTENCES EN COMMUNITY MANAGEMENT",
  skills_content: [
    {
      name: "Gestion des réseaux sociaux",
      para: "Création, planification et animation de contenus sur Facebook, Instagram, LinkedIn et TikTok.",
      details: "Mise en place de stratégies de publication cohérentes avec l’image de marque pour développer l’engagement et la visibilité.",
      // logo: reactjs,
    },
    {
      name: "Création de visuels & branding",
      para: "Conception de visuels professionnels : affiches, logos, bannières et publications pour les réseaux.",
      details: "Maîtrise de Canva et Photoshop pour créer des designs modernes, harmonieux et cohérents avec la charte graphique.",
      // logo: ps,
    },
    {
      name: "Stratégie digitale",
      para: "Définition d’une ligne éditoriale et planification de contenu ciblé.",
      details: "Élaboration de plans de communication adaptés à chaque plateforme pour maximiser la portée et la conversion.",
      // logo: python,
    },
    {
      name: "Publicité Facebook",
      para: "Création et gestion de campagnes publicitaires performantes.",
      details: "Ciblage précis, optimisation du budget et suivi des résultats via Meta Ads Manager.",
      // logo: nodejs,
    },
    {
      name: "Analyse des performances",
      para: "Suivi des statistiques et mesure des performances.",
      details: "Analyse des données d’audience et optimisation continue des contenus pour améliorer le ROI.",
      // logo: mysql,
    },
    {
      name: "Copywriting & storytelling",
      para: "Rédaction de contenus engageants et persuasifs.",
      details: "Création de publications et de légendes qui renforcent la personnalité de la marque et incitent à l’interaction.",
      // logo: javascript,
    },
    {
      name: "Animation de communauté",
      para: "Gestion des interactions et fidélisation des abonnés.",
      details: "Modération, réponse aux commentaires et messages pour renforcer la relation marque-communauté.",
      // logo: htmlcss,
    },
    {
      name: "Formation & accompagnement",
      para: "Formation en publicité Facebook et bonnes pratiques de communication digitale.",
      details: "Encadrement de petites équipes ou indépendants souhaitant renforcer leur présence sur les réseaux sociaux.",
      // logo: figma,
    },
  ],
  icon: MdArrowForward,
},

 services: {
  title: "Services",
  subtitle: "CE QUE JE PROPOSE",
  service_content: [
    {
      title: "Stratégie & Gestion Digitale",
      para: "Je conçois et gère des stratégies digitales complètes : planification de contenus, gestion des réseaux sociaux et campagnes publicitaires. J’analyse les performances pour optimiser la visibilité, l’engagement et le retour sur investissement de chaque action.",
      logo: services_logo2,
    },
    {
      title: "Création & Communication",
      para: "Je crée des visuels modernes, harmonieux et adaptés à votre image de marque. J’assure la rédaction de contenus engageants, l’animation de communauté et la formation aux bonnes pratiques de communication digitale pour renforcer votre présence en ligne.",
      logo: services_logo3,
    },
  ],
},


 Projects: {
  title: "Projets",
  subtitle: "MA CRÉATION",
  image: person_project,
  project_content: [
    { image: project1, link: "https://suite-sale.cm" },
    { image: project2, link: "https://kideloo.afrokrema.com/" },
    { image: project3, link: "https://corec.info/" },
    { image: project4, link: "https://afrokrema.com" },
    { image: project5, link: "https://kamerpay.com" },
    { image: project6, link: "https://glowbeautystudio.com" },
    { image: project7, link: "https://strategicconnectionhub.ca" },
    { image: project8, link: "https://luxurynails.cm" },
    { image: project9, link: "https://greenlife-market.com" },
    { image: project10, link: "https://studiomerveille.com" },
    { image: project11, link: "#" },
    { image: project12, link: "#" },
    { image: project13, link: "#" },
    { image: project14, link: "#" },
    { image: project15, link: "#" },
    { image: project16, link: "#" },
    { image: project17, link: "#" },
    { image: project18, link: "#" },
    { image: project19, link: "#" },
    { image: project20, link: "#" },
    { image: project21, link: "#" },
  ],
},




  
  Testimonials: {
    title: "Témoignages", 
    subtitle: "LES AVIS DE MES CLIENTS",
    testimonials_content: [
      {
        review:
          "“DIGITALWARE a su comprendre ma vision pour mon resto-rapide et fournir un travail clair et professionnel, même à distance. Aujourd’hui, j’ai une identité visuelle complète et adaptée à tous les services de ma future structure OCG (OLATANO CHEZ GASTON). Merci pour ton professionnalisme et ta disponibilité ! ✌🏽✌🏽✌🏽”",
        img: avatar,
        name: "M. Bruno : +241 07 00 32 00",
      },
      {
        review:
          "“Parmi toutes les personnes contactées, tu as été la seule à vraiment prendre le temps de m’expliquer et de proposer des alternatives. Merci encore ! Je n’hésiterai pas à revenir si besoin.”",
        img: avatar,
        name: "+241 06 15 60 62",
      },
      {
        review:
          "“Excellent travail, j’ai vraiment apprécié ton engagement et la qualité du résultat.”",
        img: avatar,
        name: "M. Sébastien : +237 6 78 51 64 13",
      },
      {
        review:
          "“Ce que j’apprécie le plus chez vous, c’est votre grande serviabilité. Votre générosité et votre engagement m’inspirent et me donnent le sentiment que nous pouvons accomplir de grandes choses ensemble.”",
        img: avatar,
        name: "+241 04 92 43 45",
      },
    ],
  },
  Hireme: {
    title: "Engagez-Moi",
    subtitle: "POUR VOS PROJETS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Je suis community manager passionnée, spécialisée dans la création et l'animation de contenus engageants sur les réseaux sociaux. Mon objectif est de renforcer la présence en ligne des marques, créer des interactions authentiques et développer une communauté active et fidèle.",
    btnText: "Engagez-Moi",
  },

  Contact: {
    title: "Contactez-moi", 
    subtitle: "ENTREZ EN CONTACT",
    social_media: [
      {
        text: "Ma page DitigalWare",
        icon: FaFacebook,
        link: "https://www.facebook.com/profile.php?id=61565089247578&mibextid=wwXIfr&mibextid=wwXIfr",
      },
      {
        text: "semougrace@gmail.com",
        icon: GrMail,
        link: "mailto:semougrace@gmail.com",
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
