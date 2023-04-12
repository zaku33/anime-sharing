import type {NextPage} from 'next';
import Head from 'next/head';
import styles from 'styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anime Sharing</title>
        <meta name="description" content="Share your anime for everyone" />
        <link rel="icon" href="/no_bank.png" />
      </Head>
      <main className={styles.main} />
    </div>
  );
};

export default Home;
