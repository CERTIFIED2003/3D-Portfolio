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
    threejs,
    reddit,
    twitter,
    clang,
    hammer,
    wkh,
    c4f
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
        title: "Technical Director & Co-Founder",
        company_name: "WeKnewHow",
        icon: wkh,
        iconBg: "#FFFF00",
        date: "Dec 2018 - Present",
        points: [
            "Responsibility of providing leadership and direction to the company.",
            "Strategic thinking and using my experience and knowledge to make informed decisions that benefit the company in the long run.",
            "Clear vision for the company's future and work towards achieving that vision through strategic planning and execution."
        ],
    },
    {
        title: "CEO & Founder",
        company_name: "Casuals4Fun",
        icon: c4f,
        iconBg: "#87CEEB",
        date: "Nov 2021 - Present",
        points: [
            "Creative vision for the types of games we want to create bringing fresh ideas to the table.",
            "I do believe in pushing the boundaries of what's possible in game development.",
            "Working to build strong relationships with industry influencers and find creative ways to promote our games.",
            "Above all, I am passionate about game development."

        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Shubham proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Shubham does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Shubham optimized our website, our traffic increased by 50%. We can't thank them enough!",
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
