import Head from "next/head";
import Layout from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Welcome from "../components/welcome/Welcome";
import Projects from "../components/projects/Projects";
import Technologies from "../components/technologies/Technologies";
import TimeLine from "../components/timeline/TimeLine";

const HomePage = (props) => {
  return (
    <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
      <Head>
        <title>Vaibhav 👨‍💻</title>
        <meta name="description" content="Vaibhav Kushwaha portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section grid>
        <Welcome />
      </Section>
      <hr />
      <Projects />
      <hr />
      <Technologies />
      <hr />
      <TimeLine />
    </Layout>
  );
};

export default HomePage;
