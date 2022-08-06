import Head from "next/head";
import Layout from "../layout/Layout";
import Welcome from "../components/welcome/Welcome";

const HomePage = (props) => {
  return (
    <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
      <Head>
        <title>Vaibhav 👨‍💻</title>
        <meta name="description" content="Vaibhav Kushwaha portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Welcome />
      </>
    </Layout>
  );
};

export default HomePage;
