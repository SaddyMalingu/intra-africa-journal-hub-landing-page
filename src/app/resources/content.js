import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Intra-Africa",
  lastName: "Journal Hub",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Research Publication",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "Africa/Nairobi",
  languages: ["English", "Swahili"],
};

const newsletter = {
  display: true,
  title: "Subscribe to Our Newsletter",
  description: "Let us Guide you in Your Path to Becoming a Fully Accredited and Published Academic Researcher.",
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: "Intra-Africa Journal Hub",
  featured: {
    display: true,
    title: "Recent project: Once UI",
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: "From Africa to the World.",
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: "Intra-Africa Journal Hub advances scholarly communication by providing a high quality accessible publishing platform by upholding academic excellence, innovation, and quality.",
  },
  work: {
    display: true,
    title: "Meet Our Published Authors",
    experiences: [
      {
        company: "Kennedy Toboso Alaly ",
        timeframe: "2023",
        role: "M.r Alaly is an accredited CPA and healthcare consultant based in Nairobi, Kenya. He has contributed a huge deal in the present literature on Economic Empowerment in Kenya, Public Health Affairs, and Infrastructural Development. Below are some of his published works.",
        achievements: [
          "Beyond Chains The Tobosoric Economic Revolution THE TOBOSORIC THEORY.",
          "Alcoholism: Would the Kenya Government be Intoxicating its people, through the Minimum Unit Packaging of Spirits? A Research Report.",
          "Market Survey Report for the African Divine Church, CCSCCL Project In Tambua Ward, North Maragoli, And Wodanga Wards, Vihiga County, Kenya.",
          "AN EXAMINATION OF THE GROWTH AND PERFORMANCE OF LIONS CAFÉ IN LANGA LANGA, NAKURU COUNTY, KENYA.",
          "CONTRIBUTION OF COLLECTIVE ACTION STRATEGY ON ENHANCING THE SOCIO-ECONOMIC STATUS OF YOUNG WOMEN SMALLHOLDER FARMERS FINANCED BY JIINUE HOLDINGS LTD IN MBITA DISTRICT, KENYA - PROPOSAL.",
          "THE PROFILE OF LOCAL COMMUNITIES AND HOUSEHOLDS IN MBITA AND SUBA DISTRICTS IN KENYA.",
          "SELECTED SCHOOL BASED ISSUES THAT INFLUENCE TEACHER PERFORMANCE IN PUBLIC PRIMARY SCHOOLS IN NAKURU TOWN, NAKURU COUNTY, KENYA.",
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Intra-Africa Journal Hub Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "D.r Vivy",
        timeframe: "2025",
        role: "Vivy, PhD, is a seasoned educator in the business sector. Apart from impacting lives across the entire continent, this phenomenal academician has invested, heavily, in unearthing major realities in the business side of healthcare.",
        achievements: [
          "Development of a pharmaceutical design system that unifies brand access across the health sector, improving design consistency by 40%.",
          "Led a cross-functional team to launch a new clinical product line, contributing to a 15% increase in overall company revenue.",
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Intra-Africa Journal Hub Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Affiliated Institutions",
    institutions: [
      {
        name: "Intra Africa Research Center LTD.",
        description: "Africa's trusted scientific and market research company.",
      },
      {
        name: "Alphadome 3.0",
        description: "Africa's leading AI-Blockchain Network for B2B, B2C, and C2C Services.",
      },
    ],
  },
  technical: {
    display: true,
    title: "Previous Volumes",
    skills: [
      {
        title: "Launch Pad",
        description: "Able to prototype in Figma with Once UI with unnatural speed.",
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Exploration of the Role of AI and Blockchain Technology in the African Business Landscape",
        description: "Intra-Africa Research Center LTD.",
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Free Articles",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  path: "/work",
  label: "Published Works",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Publication Guidelines",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-4.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-2.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-3.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-4.jpg", alt: "image", orientation: "vertical" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
