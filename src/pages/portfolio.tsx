import {
  Avatar,
  Button,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { BasePage } from "../common/BasePage";
import { LinkRow } from "../common/LinkRow/LinkRow";
import homeStyles from "../styles/Home.module.scss";
import styles from "../styles//Portfolio.module.scss";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Image from "next/image";

const items = [
  {
    thumbnail: "/thumbnail1.jpg",
    title: "Item 1",
    description: "This is a description of item 1",
    date: "Jan 1, 2021",
    tags: ["tag1", "tag2"],
  },
  {
    thumbnail: "/thumbnail2.jpg",
    title: "Item 2",
    description: "This is a description of item 2",
    date: "Jan 2, 2021",
    tags: ["tag2", "tag3"],
  },
];

export default function Portfolio() {
  return (
    <BasePage activeMenu="portfolio">
      <main
        className={homeStyles.main}
        style={{ alignItems: "flex-start", paddingTop: "3rem" }}
      >
        <div className={homeStyles.imageContainer}>
          <Image
            src="https://picsum.photos/600/800"
            alt="Giovanne Feitosa"
            className={homeStyles.homeImage}
          />
        </div>
        <div className={homeStyles.contentContainer}>
          <h1 className={homeStyles.title}>Projects I've worked on</h1>
          <h2 className={homeStyles.subtitle}>portfolio</h2>
          <p className={homeStyles.description}>
            The projects I'm most proud to share. Please take a look at my work
            and feel free to contact me if you're interested in working
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
