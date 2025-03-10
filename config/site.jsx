import {
  BriefcaseIcon,
  GithubIcon,
  HomeIcon,
  InstagramIcon,
  MailboxIcon,
  TwitterIcon,
  User,
} from "lucide-react";

export const siteConfig = {
  name: "Deion D'Souza",
  profileImage: "/deion.jpg",
  description: "Software Developer",
  availablity: "Available for new opportunities",
  brief: [
    `I'm Deion D'Souza, an SDE based in Mangalore, India.`,
    "With over three years of experience in design and software development, I am dedicated to crafting visually stunning and user-friendly solutions that consistently exceed client expectations.",
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
      title: "Oasis Ticketing System",
      outcome:
        "Developed a custom ticketing system to streamline TEDx event management at St. Aloysius (Deemed to be University), Mangaluru.",
      p: [
        "Organizing an event as big as TEDx in a university as large as St. Aloysius (Deemed to be University), Mangaluru comes with many moving parts, and one of our biggest challenges was efficiently managing ticket sales and attendee data collection.",
        "In the past, we relied on Excel sheets and Google Forms to handle payments, which was inefficient and led to several issues. Additionally, for our previous TEDx event, we spent ₹30,000 on a ticketing system and website, only to face inefficiencies and delays in accessing real-time data.",
        "To solve this, I built a custom ticketing system called Oasis that automated the entire process—from ticket purchases to attendee data collection—ensuring smooth ticket distribution, real-time insights, and a seamless event experience.",
      ],
      description:
        "Oasis is a custom-built ticketing system designed to streamline TEDx event management by automating ticket sales, attendee data collection, and real-time insights. Built using Next.js and Supabase, it replaces inefficient past methods and provides a seamless experience for both organizers and attendees.",
      icon: "/deion.jpg",
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQF3Nep2-D0l9w/feedshare-shrink_2048_1536/B4DZVmS8ZlG8As-/0/1741177998477?e=1744243200&v=beta&t=-fP2gkrHUhHsrOnGBkrNR5HdEpwPeyVUGJYARINzfLQ",
      link: "",
      keyfeatures: [
        {
          header: "Instant Ticket Confirmations",
          point:
            "Ensures smooth ticket distribution with instant purchase confirmations.",
        },
        {
          header: "Custom Data Collection",
          point:
            "Collects personalized attendee data for a better event experience.",
        },
        {
          header: "Real-Time Attendee Insights",
          point:
            "Provides instant access to attendee and ticket sales data for decision-making.",
        },
        {
          header: "Seamless Check-Ins",
          point:
            "Enables quick and hassle-free check-ins on the day of the event.",
        },
      ],
      technologiesUsed: [
        {
          header: "Next.js",
          point:
            "Used as the full-stack framework for a seamless user experience.",
        },
        {
          header: "Supabase",
          point:
            "Serves as the database for efficiently storing and retrieving attendee data.",
        },
        {
          header: "Clerk",
          point: "Integrated for secure user authentication and authorization.",
        },
        {
          header: "Razorpay API",
          point:
            "Used for seamless payment processing and ticket sales management.",
        },

        {
          header: "Drizzle ORM",
          point: "Ensures structured and efficient database interactions.",
        },
        {
          header: "Serverless Functions",
          point: "Used for scalable API handling and backend logic execution.",
        },
        {
          header: "Webhooks",
          point:
            "Implemented for real-time payment verification and instant attendee notifications.",
        },
      ],
    },
    {
      title: "BinSense Waste Analytics",
      outcome:
        "Still in development, BinSense is a waste management system that uses AI to analyze waste metrics, such as waste generation in tonnes, and categorize waste into different types, including e-waste, toxic waste, wet waste, and dry waste.",
      p: [
        "BinSense is a waste management system that uses AI to analyze waste metrics, such as waste generation in tonnes, and categorize waste into different types, including e-waste, toxic waste, wet waste, and dry waste.",
        "This platform plans on integrating with IoT waste bins that capture images of disposed waste, which are then analyzed using machine learning models to classify and segregate waste automatically.",
        "The goal of BinSense is to provide real-time waste tracking, automate segregation, and optimize waste disposal for organizations, ultimately reducing landfill waste and enhancing sustainability practices.",
      ],
      description:
        "BinSense is a waste analytics platform that uses AI-driven image analysis to categorize and track waste, offering real-time insights for efficient waste management. It integrates with IoT waste collection devices to automate the classification and segregation process.",
      icon: "/deion.jpg",
      image:
        "https://www.upwork.com/att/download/portfolio/persons/uid/964929488448684032/profile/projects/files/84851d89-9003-43f7-b631-f460891e90ad",
      link: "https://binco-tau.vercel.app",
      keyfeatures: [
        {
          header: "AI-Powered Waste Classification",
          point:
            "Uses LLMs to analyze and categorize waste into different types.",
        },
        {
          header: "IoT Integration",
          point:
            "Connects with smart waste bins to automate data collection and segregation.",
        },
        {
          header: "Real-Time Waste Tracking",
          point:
            "Monitors waste generation and categorization through a user-friendly dashboard.",
        },
        {
          header: "Automated Reports",
          point:
            "Generates detailed reports on waste management trends and efficiency.",
        },
      ],
      technologiesUsed: [
        {
          header: "Next.js",
          point:
            "Used as the frontend framework for building the web dashboard.",
        },
        {
          header: "ShadCN",
          point:
            "Utilized for crafting a seamless and intuitive UI experience.",
        },
        {
          header: "Supabase",
          point:
            "Stores and manages waste data efficiently in a structured format.",
        },
        {
          header: "Gemini AI",
          point: "Powers the AI-driven waste classification and analysis.",
        },
      ],
    },
    {
      title: "Note Vault",
      outcome:
        "Developed an efficient and secure note repository for my college.",
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
          header: "Tailwind CSS",
          point:
            "Provides a utility-first CSS framework for styling components.",
        },
        {
          header: "NextUI",
          point:
            "Leveraged for pre-designed components, enhancing the app's interface and functionality.",
        },
      ],
    },
  ],
  time: [
    {
      Title: "Software Development Engineer",
      Date: "May 2023 - Present",
      Company: "Tikanga",
      Description:
        "Work with the development team to bring frontend designs to life on time, making sure they look great and work smoothly on any device. My job is to design and test user interfaces using React Next.js for various projects.",
    },
    {
      Title: "Tech and Creative Lead",
      Date: "Dec 2024 - Feb 2025",
      Company: "TEDxStAloysius",
      Description:
        "Developed software to streamline registration payments by integrating a payment gateway for seamless ticket purchases. Additionally, led the branding initiative for the TEDx event, creating a cohesive visual identity and digital assets. Working closely with cross-functional teams, ensured smooth operations and aligned technical efforts with the event’s creative vision.",
    },
    {
      Title: "Freelance Software Developer & Tech Consultant",
      Date: "June 2024 - Present",
      Company: "Remote",
      Description:
        "Developed custom software solutions for businesses, including web and mobile applications, built and integrated payment systems and automation tools, worked with companies to create scalable and efficient tech products, and provided consulting on software architecture, UI/UX design, and business automation.",
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
