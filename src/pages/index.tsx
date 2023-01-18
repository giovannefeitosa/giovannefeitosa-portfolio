import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";
import { BasePage } from "../common/BasePage";
import { Button, Grid } from "@mui/material";

// based in
// https://tunis-nextjs.vercel.app/home-dark

// https://coolors.co/palette/0d0a0b-454955-f3eff5-72b01d-3f7d20
// 0D0A0B, 454955, F3EFF5, 72B01D, 3F7D20
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  function navigateTo(path: string) {
    window.location.href = path;
  }

  return (
    <BasePage activeMenu="home">
      <Head>
        <title>Giovanne Feitosa | GF Portfolio</title>
        <meta property="og:title" content="Giovanne Feitosa | GF Portfolio" />
        <meta
          name="description"
          content="Check out my professional skills and projects"
        />
        <meta
          property="og:description"
          content="Check out my professional skills and projects"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Giovanne Feitosa" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.overlayBackground}></div>
      <main className={styles.main}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={4}>
            <div className={styles.imageContainer}>
              <div
                className={styles.imageDiv}
                style={{
                  backgroundImage: `url("https://cdn.midjourney.com/2ed02246-b9bc-4cea-8880-3f3d3533cbb7/grid_0.png")`,
                }}
              >
                &nbsp;
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} sm={8}>
            <div className={`${styles.contentContainer} ${styles.home}`}>
              <h1 className={styles.title}>I'm Giovanne Feitosa</h1>
              <h2 className={styles.subtitle}>
                Software Engineer <span>&amp; Researcher</span>
              </h2>
              <p className={styles.description}>
                I'm a developer for more than 15y, this experience has given me
                the opportunity to work with a wide range of technologies. My
                passion now is to research and develop artificial intelligence.
              </p>

              <Button
                variant="contained"
                size="large"
                onClick={() => navigateTo("/blog")}
              >
                See Research Articles
              </Button>
            </div>
          </Grid>
        </Grid>
      </main>
    </BasePage>
  );
}
