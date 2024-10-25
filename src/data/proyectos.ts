import obrasPreview from '@assets/projects/obras.png'
import cerrajeriaPreview from '@assets/projects/cerrajeria.png'
import landingGreen from '@assets/projects/landing-green.png'

export const proyectos = [
    {
        title: "Secretaría de Obras y servicios de José C. Paz",
        description: "An interactive page with maps using React and React-Leaflet, along with a claims management API built with MySQL, Express, and Sequelize.",
technologies: ["React", "React-Leaflet", "Tailwind", "MySQL", "Express", "Sequelize"],
video: "https://www.youtube.com/embed/WA58VXU6PiA?si=EK65Ph31AoDxAWNS",
image: obrasPreview,
},
{
    title: "Product Catalog",
    description: "A dynamic product catalog application using React, featuring category management and search functionality.",
    technologies: ["React", "JavaScript", "Tailwind"],
    link: "https://your-product-catalog-link.com",
    image: cerrajeriaPreview,
    video:"https://www.youtube.com/embed/KKcGPptkJf4?si=pmsJWbbrYvcGpdHa"
},
{
    title: "Landing Page",
    description: "A fast and efficient landing page built with Astro and Vite to promote a website.",
    technologies: ["Astro", "Tailwind"],
    link: "https://your-landing-page-link.com",
    image: landingGreen,
    video:"https://www.youtube.com/embed/YLvvQ0A4n-0?si=2EWnNvUslx8zmk7c"
    }
]