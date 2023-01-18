import {
  Avatar,
  Chip,
  Grid,
  List,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import { BasePage } from "../common/BasePage";
import homeStyles from "../styles/Home.module.scss";
import styles from "../styles//Portfolio.module.scss";
import Head from "next/head";

export default function Portfolio() {
  return (
    <BasePage activeMenu="portfolio">
      <Head>
        <title>Projects | GF Portfolio</title>
        <meta property="og:title" content="Projects | GF Portfolio" />
        <meta
          name="description"
          content="Giovanne Feitosa Portfolio Projects"
        />
        <meta
          property="og:description"
          content="Giovanne Feitosa Portfolio Projects"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Giovanne Feitosa" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={homeStyles.main}
        style={{ alignItems: "flex-start", paddingTop: "3rem" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={6}>
            <div className={homeStyles.imageContainer}>
              <div
                className={homeStyles.imageDiv}
                style={{
                  backgroundImage: `url("https://picsum.photos/600/800")`,
                }}
              >
                &nbsp;
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <div className={homeStyles.contentContainer}>
              <h1 className={homeStyles.title}>Projects I've worked on</h1>
              <h2 className={homeStyles.subtitle}>portfolio</h2>
              <p className={homeStyles.description}>
                The projects I'm most proud to share. Please take a look at my
                work and feel free to contact me if you're interested in working
                together.
              </p>

              <List className={styles.list}>
                <SingleListItem
                  key={"sigo"}
                  slug={"sigo"}
                  thumbnail={"https://picsum.photos/200"}
                  title={"Sigo Mobile App"}
                  description={
                    "Worked as a backend developer. It's an app for tracking appointments in hospitals"
                  }
                  date={"Jan 1, 2021"}
                  tags={["tag1", "tag2"]}
                />

                <SingleListItem
                  key={"sigo2"}
                  slug={"sigo2"}
                  thumbnail={"https://picsum.photos/200"}
                  title={"Sigo Mobile App"}
                  description={
                    "Worked as a backend developer. It's an app for tracking appointments in hospitals"
                  }
                  date={"Jan 1, 2021"}
                  tags={["tag1", "tag2"]}
                />

                <SingleListItem
                  key={"sigo3"}
                  slug={"sigo3"}
                  thumbnail={"https://picsum.photos/200"}
                  title={"Sigo Mobile App"}
                  description={
                    "Worked as a backend developer. It's an app for tracking appointments in hospitals"
                  }
                  date={"Jan 1, 2021"}
                  tags={["tag1", "tag2"]}
                />
              </List>
            </div>
          </Grid>
        </Grid>
      </main>
    </BasePage>
  );
}

function SingleListItem({ slug, thumbnail, title, description, tags }: any) {
  const tagElem = tags.map((tag: string) => (
    <Chip
      key={`${slug}-${tag}`}
      label={tag}
      variant="outlined"
      className={styles.chip}
    />
  ));
  return (
    <div className={styles.listItem}>
      <ListItemAvatar
        className={styles.listItemAvatar}
        key={`${slug}-listItemAvatar`}
      >
        <Avatar alt="thumbnail" src={thumbnail} />
      </ListItemAvatar>
      <div className={styles.listItemContent}>
        <Typography variant="h3" color="text.primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <br />
        {tagElem}
      </div>
    </div>
  );
}
