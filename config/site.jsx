import {
  BriefcaseIcon,
  GithubIcon,
  HomeIcon,
  InstagramIcon,
  MailboxIcon,
  TwitterIcon,
  User
} from "lucide-react";

export const siteConfig = {
  name: "Deion D'Souza",
  profileImage: "/deion.jpg",
  description: "Software Developer",
  availablity: "Available for new opportunities",
  brief: [
    `I'm Deion D'Souza, a Front-end dev based in Mangalore, India.`,
    "With a rich background spanning over 3 years in design, my commitment lies in crafting visually captivating and user-friendly designs that consistently surpass client expectations.",
    "Whether you're looking for a new website, a redesign, or a custom web app, I'm here to help.",
  ],
  location: {
    city: "Mangalore",
    country: "IND",
    longatutide: "12.88638° N",
    latitude: "74.88138° E",
  },
  navItems: [
    {
      icon: (
        <HomeIcon
          strokeWidth={1.25}
          size={30}
          absoluteStrokeWidth
          className="transition-all "
        />
      ),
      name: "Home",
      link: "/",
    },
    {
      icon: (
        <BriefcaseIcon
          strokeWidth={1.5}
          absoluteStrokeWidth
          size={30}
          className="transition-all "
        />
      ),
      name: "Work",
      link: "/work",
    },
    {
      icon: (
        <User
          strokeWidth={1.5}
          absoluteStrokeWidth
          size={30}
          className="transition-all "
        />
      ),
      name: "About",
      link: "/about",
    },
    {
      icon: (
        <MailboxIcon
          strokeWidth={1.5}
          absoluteStrokeWidth
          size={30}
          className="transition-all "
        />
      ),
      name: "Contact",
      link: "/contact",
    },
  ],

  links: [
    {
      icon: <TwitterIcon size={30} strokeWidth={2} absoluteStrokeWidth />,
      name: "Twitter",
      href: "https://twitter.com/Deion_Dz",
    },
    {
      icon: <InstagramIcon size={30} strokeWidth={2} absoluteStrokeWidth />,
      name: "Instagram",
      href: "https://www.instagram.com/deion_dz/",
    },
    {
      icon: <GithubIcon size={30} strokeWidth={2} absoluteStrokeWidth />,
      name: "Instagram",
      href: "https://github.com/deiondz",
    },
  ],
  work: [
    {
      title: "Note Vault",
      outcome:
        "Developed an efficent and secure note repository for my college.",
      p: [
        "The Note Vault is a user-friendly web application designed to serve as a centralized hub for storing and accessing college notes. It aims to streamline the organization and accessibility of academic materials for students. Built using Next.js, Tailwind CSS, and NextUI component library, this platform offers a seamless experience for storing lecture notes, past papers, and study resources.",
        "The primary goal of the CollegeNote Repository is to simplify the management of academic resources for students. By offering a user-centric platform with an intuitive interface and organized storage, students can easily access and utilize notes and past question papers to enhance their learning and preparation.",
        "This project is aimed at optimizing the student learning experience, providing a centralized repository for academic materials, and facilitating efficient studying through easy access to course notes and previous exam papers.",
      ],
      description:
        "The Note Vault is a user-friendly web application designed to serve as a centralized hub for storing and accessing college notes. It aims to streamline the organization and accessibility of academic materials for students. Built using Next.js, Tailwind CSS, and NextUI component library, this platform offers a seamless experience for storing lecture notes, past papers, and study resources.",
      icon: "/deion.jpg",
      image: "/project/notevault.png",
      link: "https://notevaultrepo.vercel.app",
      keyfeatures: [
        {
          header: "Note Storage",
          point:
            "Easily upload, organize, and categorize lecture notes by subject, topic, or date.",
        },
        {
          header: "Previous Year Question Papers",
          point:
            "Access a repository of past year question papers sorted by courses and subjects.",
        },
        {
          header: "User-Friendly Interface",
          point:
            "Utilizes NextUI components for a visually appealing and intuitive user interface.",
        },
        {
          header: "Search and Filter",
          point:
            "Efficiently search for specific notes or papers using keywords or filters.",
        },
        {
          header: "Responsive Design",
          point:
            "Ensures usability across various devices and screen sizes for convenience.",
        },
      ],
      technologiesUsed: [
        {
          header: "Next.js",
          point: "For efficient server-side rendering and routing.",
        },
        {
          header: "Tailwind",
          point:
            "Provides a utility-first CSS framework for styling components.",
        },
        {
          header: "Responsive Design",
          point:
            "Leveraged for pre-designed components, enhancing the app's interface and functionality.",
        },
      ],
    },
    {
      title: "Costa Homestay",
      icon: "/project/costa.png",
      description: "A landing page for a homestay business in Mangalore.",
      p: [
        "The CostaHomestay Landing Page is a bespoke web interface crafted specifically for promoting and showcasing the unique offerings of a homestay business. Developed with Next.js, Tailwind CSS, and NextUI component library, this landing page embodies elegance and functionality, aiming to captivate visitors and potential guests.",
        "The CostaHomestay Landing Page is designed to be a captivating gateway for potential guests, inviting them to explore the warmth and comfort that CostaHomestay offers. By combining sleek design elements, user-friendly navigation, and informative content, the landing page aims to convert visitors into guests by compellingly presenting the homestay's unique offerings and experience.",
        "This project serves as a virtual introduction to CostaHomestay, offering a glimpse into the beauty of the accommodations and the surrounding environment. Its primary goal is to entice visitors, encouraging them to engage further, inquire, and ultimately choose CostaHomestay for their next retreat or vacation experience.",
      ],
      image: "/project/costa.png",
      link: "https://costahomestay.com",
    },
  ],
  time: [
    {
      Title: "Software Development Engineer",
      Date: "May 2023 - Present",
      Company: "Tikanga",
      Description:
        "I work with the development team to bring frontend designs to life on time, making sure they look great and work smoothly on any device. My job is to design and test user interfaces using React Next.js for various projects.",
    },
  ],
  Education: [
    {
      Title: " St. Aloysius College, Mangalore-575003",
      Date: "May 2023 - Present",
      Company: "Bachelor of Computer Application",
      Description: "",
    },
  ],
};
