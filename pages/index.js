import Head from 'next/head';
import Layout from '../components/Layout';
import AboutSection from '../components/pages/Home/AboutSection';
import HeroSection from '../components/pages/Home/HeroSection';

export default function Home() {
    return (
        <>
            <Head>
                <title>Vherniel Lebis | Web Developer and Designer</title>
                <meta
                    name="description"
                    content="A creative web designer and developer. I deliver dynamic, user-friendly, and effective websites with JavaScript. Passionate about web technologies, I love bringing creativity, user friendly experiences and performant websites together."
                />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Layout>
                <HeroSection />
                <AboutSection />
            </Layout>
        </>
    );
}
