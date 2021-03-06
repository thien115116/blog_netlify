import Head from 'next/head';
import styles from '../styles/Home.module.css';
import fs from 'fs';
import Link from 'next/link';

export default function Home({ slugs }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Danh sách các bài blog :</h1>
        <ul>
          {slugs &&
            !!slugs.length &&
            slugs.map((slug, index) => (
              <li key={index}>
                <Link href={`blog/${slug}`}>
                  <a>{`blog/${slug}`}</a>
                </Link>
              </li>
            ))}
        </ul>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('content/blogs');

  return {
    props: {
      slugs: files.map((filename) => filename.replace('.md', '')),
    },
  };
};
