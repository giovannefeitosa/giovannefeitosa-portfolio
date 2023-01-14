import { Typography } from "@mui/material";
import { BasePage } from "../../../common/BasePage";
import { BlogPost } from "../../../common/BlogPost/BlogPost";

export default function RasaOpenSourceNLUOnly() {
  return (
    <BasePage>
      <BlogPost
        title="The benefits of using only the NLU part of Rasa Chatbot"
        date="2023-01-08"
        excerpt="If you use Rasa Open Source without enterprise license, maybe you want to check this out!"
        image="https://picsum.photos/300"
      >
        <a href="https://rasa.com/docs/rasa/nlu-only/" rel="external nofollow">
          Rasa Docs: Using NLU Only
        </a>

        <br />
        <br />

        <Typography variant="body1" paragraph>
          If you don't have an enterprise license for Rasa Open Source, then you
          might realize that you can't do the second most important thing for a
          chatbot: analyzing the real conversations and having a way to easily
          improve the bot's accuracy (the first one is to understand what the
          user wants, I mean, identifying the intent of each message, this Rasa
          does very well).
        </Typography>

        <Typography variant="body1" paragraph>
          The actions server runs in a separate process and is responsible for
          executing custom code based in the intents of the user. This is good
          for some use cases, but if you want to have a chatbot that can store a
          list of conversations and use them to improve the chatbot, you whether
          need to pay for the enterprise license or use only the NLU part of
          Rasa.
        </Typography>

        <Typography variant="body1" paragraph bgcolor={"#ccc"}>
          The NLU part of Rasa is responsible for identifying the intent of a
          message, that's all. You have a single endpoint that you send a
          message and it returns the intent and entities.
        </Typography>

        <code>POST /model/parse</code>

        <code>
          Example Request body: <br />
          <br />
          {"{"}
          <br />
          &nbsp;&nbsp;"text": "Hello, I am Rasa!",
          <br />
          &nbsp;&nbsp;"message_id": "b2831e73-1407-4ba0-a861-0f30a42a2a5a"
          <br />
          {"}"}
        </code>

        <Typography variant="body1" paragraph>
          The reason you would use only the NLU part of Rasa chatbot is that you
          don't have flexibility with the current HTTP REST API. For example,
          you need to run 2 requests everytime a user sends a message: because
          the first one adds the user message to the conversation and the second
          one triggers the intent, so Rasa can provide an answer. See more in my
          other article{" "}
          <a href="/articles/artificial-intelligence/rasa-chatbot-rest-api">
            Deep dive into Rasa Chatbot's REST API
          </a>
          .
        </Typography>

        <Typography variant="body1" paragraph>
          Besides this "2 requests" problem, you can't do much with the HTTP
          API, so why not to use only the NLU part of Rasa? The NLU is the part
          that stores the intents and entities, so you can use the API just to
          identify the user intent and entities, and then you can use your own
          code to handle the user intent. It's like the actions server, but with
          your own way to structuring the project.
        </Typography>

        <Typography variant="body1" paragraph>
          This is why I prefer to use only the NLU part of Rasa. I can use a
          single API request and then execute custom code in the microservice
          responsible for interacting with Rasa. Your microservice is the
          chatbot's HTTP API.
        </Typography>
      </BlogPost>
    </BasePage>
  );
}
