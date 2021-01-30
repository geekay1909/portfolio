import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  console.log(styles.container);
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        This is kausien.
      </div>
    </div>
  );
}
