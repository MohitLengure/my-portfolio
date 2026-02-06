import { Helmet } from 'react-helmet-async';

export default function SEO({
    title = "Mohit Lengure | Full Stack Engineer",
    description = "Mohit Lengure is a Full Stack Engineer specializing in Flutter, Kotlin, and modern web technologies. Building scalable digital products.",
    keywords = "Mohit Lengure, Full Stack Developer, Flutter Developer, React Developer, Kotlin, Portfolio, Web Development",
    image = "/og-image.jpg",
    url = "https://mohitlengure.dev"
}) {
    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Mohit Lengure" />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
}
