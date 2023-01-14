import styles from "../styles/BasePage.module.scss";
import Home from "@mui/icons-material/Home";
import Info from "@mui/icons-material/Info";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EmailIcon from "@mui/icons-material/Email";
import FeedIcon from "@mui/icons-material/Feed";
import { createTheme, ThemeProvider } from "@mui/material";
import Link from "next/link";

const theme = createTheme({
  palette: {
    text: {
      primary: "#eee",
      secondary: "#ccc",
    },
    primary: {
      // main: '#1fb622',
      main: "#3f7d20",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#eeeeee",
    },
    error: {
      main: "#e74c3c",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          color: "#999",
          borderColor: "#333",
          ":hover": {
            color: "#eee",
            backgroundColor: "#222 !important",
          },
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "body1" },
          style: {
            fontSize: "1.1rem",
            lineHeight: "1.6rem",
            color: "#ddd",
            marginBottom: ".7rem",
          },
        },
        {
          props: { variant: "h2" },
          style: {
            fontSize: "2.5rem",
            lineHeight: "2.5rem",
            margin: "1.5rem 0 1rem 0",
          },
        },
        {
          props: { variant: "h3" },
          style: {
            fontSize: "1.9rem",
            lineHeight: "2.5rem",
            margin: "1.5rem 0 1rem 0",
          },
        },
      ],
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            borderColor: "#333",
            color: "#eee",
            background: "#000",
          },
        },
      ],
      styleOverrides: {
        root: {
          // borderColor: "#333",
          // background: "#000",
        },
      },
    },
  },
});

export function BasePage({ children, activeMenu }: any) {
  const homeClass = activeMenu === "home" && styles.rightMenuActive;
  const aboutClass = activeMenu === "about" && styles.rightMenuActive;
  const portfolioClass = activeMenu === "portfolio" && styles.rightMenuActive;
  const contactClass = activeMenu === "contact" && styles.rightMenuActive;
  const blogClass = activeMenu === "blog" && styles.rightMenuActive;
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.rootContainer}>
        <div className={styles.childrenContainer}>{children}</div>
        <div className={styles.rightMenuContainer}>
          <nav className={styles.rightMenuNav}>
            <div className={styles.rightMenuItemContainer}>
              <Link href="/" className={`${styles.rightMenuItem} ${homeClass}`}>
                <span className={styles.rightMenuItemLabel}>Home</span>
                <span className={styles.rightMenuItemIcon}>
                  <Home fontSize="medium" />
                </span>
              </Link>
            </div>

            <div className={styles.rightMenuItemContainer}>
              <Link
                href="/about"
                className={`${styles.rightMenuItem} ${aboutClass}`}
              >
                <span className={styles.rightMenuItemLabel}>About me</span>
                <span className={styles.rightMenuItemIcon}>
                  <Info fontSize="medium" />
                </span>
              </Link>
            </div>

            {/*
          <div className={styles.rightMenuItemContainer}>
            <a
              href="/portfolio"
              className={`${styles.rightMenuItem} ${portfolioClass}`}
            >
              <span className={styles.rightMenuItemLabel}>Portfolio</span>
              <span className={styles.rightMenuItemIcon}>
                <BusinessCenterIcon fontSize="medium" />
              </span>
            </a>
          </div>
          */}

            <div className={styles.rightMenuItemContainer}>
              <Link
                href="/contact"
                className={`${styles.rightMenuItem} ${contactClass}`}
              >
                <span className={styles.rightMenuItemLabel}>Contact</span>
                <span className={styles.rightMenuItemIcon}>
                  <EmailIcon fontSize="medium" />
                </span>
              </Link>
            </div>

            <div className={styles.rightMenuItemContainer}>
              <Link
                href="/blog"
                className={`${styles.rightMenuItem} ${blogClass}`}
              >
                <span className={styles.rightMenuItemLabel}>Research</span>
                <span className={styles.rightMenuItemIcon}>
                  <FeedIcon fontSize="medium" />
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </ThemeProvider>
  );
}
