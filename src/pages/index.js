import Head from "next/head";
import Image from "next/image";
import Layout from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Welcome from "../components/welcome/Welcome";
import Projects from "../components/projects/Projects";
import Technologies from "../components/technologies/Technologies";
import TimeLine from "../components/timeline/TimeLine";
import Acomplishments from "../components/acomplishments/Acomplishments";
import Footer from "../components/footer-copy/Footer";
import styles from "../styles/Home.module.css";

const HomePage = (props) => {
  return (
    <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
      <Section grid>
        <Welcome />
      </Section>
      {/* This "PROJECTS" part is causing error in the terminal */}
      <hr />
      <Projects />
      <hr />
      <Technologies />
      <hr />
      <TimeLine />
      <hr />
      <Acomplishments />
      <hr />
      <Footer />
      <div className={styles.container}>
        <Head>
          <title>Vaibhav 👨‍💻</title>
          <meta
            name="description"
            content="Vaibhav Kushwaha portfolio website"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <h2>Hey, I&apos;m Vaibhav</h2>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </Layout>
  );
};

export default HomePage;
