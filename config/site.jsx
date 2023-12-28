import {
  BriefcaseIcon,
  GithubIcon,
  HomeIcon,
  InstagramIcon,
  MailboxIcon,
  Search,
  TwitterIcon,
  User,
} from "lucide-react";

export const siteConfig = {
  name: "Deion D'Souza",
  profileImage: "/deion.jpg",
  description: "Front-end developer at Tikanga",
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
      link: "https://www.ps3cfw.com/cool.php?item=64176595",
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
      link: "https://www.ps3cfw.com/cool.php?item=64176595",
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
      link: "https://www.ps3cfw.com/cool.php?item=64176595",
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
      link: "https://www.ps3cfw.com/cool.php?item=64176595",
    },
    {
      icon: (
        <Search
          strokeWidth={1.5}
          absoluteStrokeWidth
          size={30}
          className="transition-all "
        />
      ),
      name: "Search",
      link: "https://www.ps3cfw.com/cool.php?item=64176595",
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
      title: "NextUI",
      description: "A React UI Library",
      icon: "/deion.jpg",
      image: "/deion.jpg",
      link: "https://www.ps3cfw.com/cool.php?item=64176595",
    },
    {
      title: "NextUI",
      icon: "/deion.jpg",
      description: "A React UI Library",
      image: "/deion.jpg",
      link: "https://www.ps3cfw.com/cool.php?item=64176595",
    },
    {
      title: "NextUI",
      icon: "/deion.jpg",
      description: "A React UI Library",
      image: "/deion.jpg",
      link: "https://www.ps3cfw.com/cool.php?item=64176595",
    },
  ],
  time: [
    {
      Title: "Frontend Web Developer",
      Date: "May 2023 - Present",
      Company: "Tikanga",
      Description:
        "As a Frontend Developer, my role involves collaborating with the development team to create and implement frontend designs within the specified timeframe. I am responsible for designing and testing responsive UIs using React frameworks for various projects.",
    },
    {
      Title: "Assistant Video Editor",
      Date: "Jul 2022 - Aug 2022 ",
      Company: "Martin Noronha - Stoa",

      Description:
        "I had the opportunity to work with Martin Noronha as an assistant video editor for Stoa, a company aimed at providing business education. During my time there, I worked on a range of projects such as Instagram and Facebook adverts, podcasts and short form content. It was exciting to hone my skills in editing and also get creative with different kinds of media formats.",
    },
    {
      Title: "Social Media Manager",
      Date: "May 2022 - Aug 2022",
      Company: "Papa Ocus",

      Description:
        "I had the pleasure of working with Shirish Bajpai, also known as PapaOcus, on his personal brand. I primarily assisted him on various projects and helped create content for both Twitter threads and Instagram. I enjoyed being part of him and seeing his vision come to life as we collaborated on each task. It was a rewarding experience that taught me many valuable skills in the world of social media.",
    },
  ],
  Education: [
    {
      Title: " St. Aloysius College, Mangalore-575003",
      Date: "May 2023 - Present",
      Company: "Bachelor of Computer Application",
      Description:
        "As a Frontend Developer, my role involves collaborating with the development team to create and implement frontend designs within the specified timeframe. I am responsible for designing and testing responsive UIs using React frameworks for various projects.",
    },
  ],
};
