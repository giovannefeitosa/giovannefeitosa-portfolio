import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";
import { BasePage } from "../common/BasePage";
import homeStyles from "../styles/Home.module.scss";
import styles from "../styles/Contact.module.scss";
import CheckIcon from "@mui/icons-material/Check";
import { CheckCircle } from "@mui/icons-material";

export default function Contact() {
  const [state, setState] = useState({
    loading: false,
    errorMessage: "",
    success: false,
    contactBackSuccess: false,
  });

  const [formData, setFormData] = useState({
    from: "",
    name: "",
    message: "",
  });

  const sendMessage = useCallback(() => {
    setState({
      ...state,
      loading: true,
      errorMessage: "",
      contactBackSuccess: false,
    });
    // post to /api/submit-contact sending the name and message
    fetch("/api/submit-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.status === "error") {
          throw new Error(json.message);
        }
        setState({
          ...state,
          loading: false,
          success: true,
          errorMessage: "",
          contactBackSuccess: !!formData.from,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loading: false,
          errorMessage: err.message,
        });
      });
  }, [formData, state]);

  const sendFromMessage = useCallback(() => {
    if (formData.from === "") {
      setState({
        ...state,
        errorMessage: "Please type a way to contact you back",
      });
      return;
    }
    sendMessage();
  }, [formData, sendMessage, state]);

  let children;

  const errorComponent = state.errorMessage && (
    <div className={styles.errorContainer}>{state.errorMessage}</div>
  );

  if (!state.success) {
    // Initial form state
    children = (
      <>
        <p className={homeStyles.description}>
          If you want to get in touch with me, please fill out the form below.
        </p>
        <p className={homeStyles.description}>
          You can also send me an email: giovanneafonso at gmail.com.
        </p>

        <TextField
          id="inp-name"
          label="Name"
          variant="outlined"
          style={{ width: "100%", marginTop: "1rem" }}
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            setState({ ...state, errorMessage: "" });
          }}
        />

        <TextField
          id="inp-message"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          style={{ width: "100%", marginTop: "1rem" }}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            setState({ ...state, errorMessage: "" });
          }}
        />

        {errorComponent}

        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "1rem" }}
          onClick={sendMessage}
          disabled={state.loading}
        >
          {state.loading ? <CircularProgress size={24} /> : "Send"}
        </Button>
      </>
    );
  } else {
    children = (
      <>
        <div className={styles.successContainer}>
          <div className={styles.messageContainer}>
            <p className={styles.description}>
              I already received your message!
            </p>
            {!state.contactBackSuccess && (
              <p>
                I hope you left someway to contact you, otherwise please fill up
                a way to contact you below.
              </p>
            )}
          </div>
          <div
            className={styles.imageContainer}
            style={{
              backgroundImage: `url("https://www.pngall.com/wp-content/uploads/2016/04/Thank-You-Free-Download-PNG.png")`,
            }}
          />
        </div>

        {!state.contactBackSuccess && (
          <TextField
            id="inp-contactback"
            label="Please type a way to contact you back"
            variant="outlined"
            style={{ width: "100%", marginTop: "1rem" }}
            value={formData.from}
            onChange={(e) => setFormData({ ...formData, from: e.target.value })}
          />
        )}

        {errorComponent}

        {!state.contactBackSuccess && (
          <div className={styles.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "1rem" }}
              onClick={sendFromMessage}
              disabled={state.loading}
            >
              {state.loading ? <CircularProgress size={24} /> : "Send"}
            </Button>
          </div>
        )}

        {!!state.contactBackSuccess && (
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <CheckCircle color="success" style={{ fontSize: "5rem" }} />
          </div>
        )}
      </>
    );
  }

  return (
    <BasePage activeMenu="contact">
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
                  backgroundImage: `url("https://cdn.midjourney.com/557d0f1f-5fc7-467e-9054-66e96392f199/grid_0.png")`,
                }}
              >
                &nbsp;
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <div className={homeStyles.contentContainer}>
              <h1 className={homeStyles.title}>Send me a Message</h1>
              <h2 className={homeStyles.subtitle}>contact</h2>
              {children}
            </div>
          </Grid>
        </Grid>
      </main>
    </BasePage>
  );
}
