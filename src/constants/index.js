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
    threejs,
    reddit,
    twitter,
    clang,
    hammer,
    wkh
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
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: creator,
    },
    {
        title: "Indie Game Developer",
        icon: backend,
    },
    {
        title: "App Developer",
        icon: mobile,
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
        title: "Co-Founder",
        company_name: "WeKnewHow",
        icon: wkh,
        iconBg: "#383E56",
        date: "Dec 2018 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility."
        ],
    },
    {
        title: "Technical Director",
        company_name: "Casuals4Fun",
        iconBg: "#E6DEDD",
        date: "Nov 2021 - Present",
        points: [
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
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
        name: "Reddit Clone",
        description:
            "Redesigned Reddit Clone with support of many social media functionalities. Built with NextJS framework with custom designed typescript interfaces. CHAKRA UI for beautiful user interface. With integrated support of Firebase v9, all operations are super fast. Providers like Google, Microsoft & GitHub used for authentication. And much more...!",
        tags: [
            {
                name: "nextjs",
                color: "black-text-gradient",
            },
            {
                name: "firebase v9",
                color: "orange-text-gradient",
            },
            {
                name: "chakra ui",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            }
        ],
        image: reddit,
        source_code_link: "https://github.com/CERTIFIED2003/Reddit-Clone",
    },
    {
        name: "Twitter Clone",
        description:
            "Awesome looking Twitter clone build using NextJS + TailwindCSS. Firebase v9 integrated for post creation and file storage. With the support of NewsAPI making this application super awesome.",
        tags: [
            {
                name: "nextjs",
                color: "black-text-gradient",
            },
            {
                name: "firebase v9",
                color: "orange-text-gradient",
            },
            {
                name: "tailwind css",
                color: "blue-text-gradient",
            }
        ],
        image: twitter,
        source_code_link: "https://github.com/CERTIFIED2003/Twitter-Clone",
    },
    {
        name: "Clang Social",
        description:
            "A Social Media Platform with a very reliable, fast, user friendly UI to interact with. Supports many social media functionality with the likes of Video+Voice Call.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "yup",
                color: "pink-text-gradient",
            },
        ],
        image: clang,
        source_code_link: "https://clangsocial.netlify.app",
    },
    {
        name: "HammerOBots",
        description:
            "An open world endless Sci-fi mech combat video game available for Android devices on Google Play Store.",
        tags: [
            {
                name: "unreal engine",
                color: "black-text-gradient",
            },
            {
                name: "playfab",
                color: "blue-text-gradient",
            },
        ],
        image: hammer,
        source_code_link: "https://play.google.com/store/apps/details?id=com.Casuals4Fun.HammerOBots",
    },
];

export { services, technologies, experiences, testimonials, projects };
