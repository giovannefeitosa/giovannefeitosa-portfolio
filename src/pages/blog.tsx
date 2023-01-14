import {
  Avatar,
  Button,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { BasePage } from "../common/BasePage";
import { BlogPostItem } from "../common/BlogPostItem/BlogPostItem";
import homeStyles from "../styles/Home.module.scss";

export default function Contact() {
  return (
    <BasePage activeMenu="blog">
      <div className={homeStyles.overlayBackground}></div>

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
              <h1 className={homeStyles.title}>Research Articles</h1>
              <h2 className={homeStyles.subtitle}>blog</h2>
              <p className={homeStyles.description}>
                Feel free to navigate through my blog posts with useful analysis
                on the latest technologies.
              </p>

              <br />

              <BlogPostItem
                href="/articles/artificial-intelligence/rasa-open-source-nlu-only"
                title="The benefits of using only the NLU part of Rasa Chatbot"
                date="2023-01-08"
                excerpt="If you use Rasa Open Source without enterprise license, maybe you want to check this out!"
                image="https://www.opensourcerers.org/wp-content/uploads/2021/03/epANB51.png"
              />

              <BlogPostItem
                href="/articles/artificial-intelligence/rasa-chatbot-rest-api"
                title="Deep dive into Rasa Chatbot's REST API"
                date="2023-01-06"
                excerpt="In this article, we will take a deep dive into Rasa's REST API, which is the main way to interact with Rasa's NLU and Core models."
                image="https://miro.medium.com/max/768/1*-cMnHE1MWFZeAjYf9nrCdA.png"
              />
            </div>
          </Grid>
        </Grid>
      </main>
    </BasePage>
  );
}
