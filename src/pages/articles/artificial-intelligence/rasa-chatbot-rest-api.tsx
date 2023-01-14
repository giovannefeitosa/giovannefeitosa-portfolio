import { Typography } from "@mui/material";
import { BasePage } from "../../../common/BasePage";
import { BlogPost } from "../../../common/BlogPost/BlogPost";

export default function RasaChatbotRestAPI() {
  return (
    <BasePage>
      <BlogPost
        title="Deep dive into Rasa Chatbot REST API"
        date="2023-01-06"
        excerpt="In this article, we will take a deep dive into Rasa's REST API, which is the main way to interact with Rasa's NLU and Core models."
        image="https://picsum.photos/200"
      >
        <Typography
          variant="body1"
          component="p"
          style={{ textAlign: "justify" }}
        >
          Rasa HTTP API is a tool that enables external communication with a
          Rasa chatbot through a REST API.
        </Typography>

        <Typography
          variant="body1"
          component="p"
          style={{ textAlign: "justify" }}
        >
          You can use the Rasa HTTP API to build custom integrations with your
          chatbot or to use the chatbot in conjunction with other tools and
          services. The API includes endpoints for managing conversations,
          sending and receiving messages, and managing chatbot data such as
          custom actions and responses.
        </Typography>

        <Typography variant="h2" component="h2">
          How it works
        </Typography>

        <Typography
          variant="body1"
          component="p"
          style={{ textAlign: "justify" }}
        >
          When you create a Rasa chatbot, you start the Rasa server using the{" "}
          <code>rasa run --enable-api ...</code> command. This command enables
          you to use the REST API to interact with your chatbot.
        </Typography>

        <Typography variant="h2" component="h2">
          Fundamental Concepts
        </Typography>

        <ul>
          <li>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "justify" }}
            >
              <b>Tracker (Conversation)</b>
              <br />
              Each conversation is a tracker instance. A conversation is created
              when a user sends a message to the chatbot. The conversation is
              identified by a conversation ID. The chatbot maintains a
              conversation history for each conversation.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "justify" }}
            >
              <b>Conversation ID</b>
              <br />
              Each conversation has an unique ID, this ID can be any string we
              choose.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "justify" }}
            >
              <b>REST Webhook</b>
              <br />
              If you don't want to use trackers, instead only want the bot
              response for a given message, then you can use the REST webhook.
              This endpoint does not store any conversation history, it only
              returns the bot response.
              <br />
              <span style={{ display: "block", color: "red" }}>
                Doubt: Are the custom actions triggered?
              </span>
              <span style={{ display: "block", color: "red" }}>
                Doubt: What happens if I have some entities in my message?
              </span>
            </Typography>
          </li>
        </ul>

        <Typography variant="h2" component="h2">
          API Endpoints
        </Typography>

        <Typography variant="h3" component="h3">
          REST Webhook
        </Typography>

        <Typography
          variant="body1"
          component="p"
          style={{ textAlign: "justify" }}
        >
          This endpoint simply returns the bot response for a given message. It
          doesn't store any conversation history. It's useful if you don't need
          to store the conversation history. But if you do, you should use the
          tracker endpoints or create your own backend to track and manage
          conversations.
        </Typography>

        <code>POST /webhooks/rest/webhook</code>

        <Typography
          variant="body1"
          component="p"
          style={{ textAlign: "justify" }}
        >
          Example request payload:
        </Typography>

        <pre>
          <code>{`{\n  "message": "Hi"\n}`}</code>
        </pre>

        <Typography variant="h3" component="h3">
          Create Conversation / Send Message
        </Typography>

        <Typography
          variant="body1"
          component="p"
          style={{ textAlign: "justify" }}
        >
          This endpoint adds a message to the conversation tracker and returns
          the intent of the message.
        </Typography>

        <Typography
          variant="body1"
          component="p"
          style={{ textAlign: "justify" }}
        >
          When you send a message using this endpoint you doesn't get a response
          from the bot, if you want the bot to respond you need to call another
          endpoint to trigger the bot's response.
        </Typography>

        <Typography
          variant="body1"
          component="p"
          style={{ textAlign: "justify" }}
        >
          The "sender" field should always be "user" for this endpoint.
        </Typography>

        <code>POST /conversations/&lt;conversation_id&gt;/messages</code>

        <Typography
          variant="body1"
          component="p"
          style={{ textAlign: "justify" }}
        >
          Example request payload:
        </Typography>

        <pre>
          <code>{`{\n  "sender": "user",\n  "text": "hello"\n}`}</code>
        </pre>

        <Typography variant="h3" component="h3">
          Trigger Bot Response
        </Typography>

        <Typography
          variant="body1"
          component="p"
          style={{ textAlign: "justify" }}
        >
          After you send a message to the bot using the above endpoint, you need
          to call this endpoint to trigger the bot's response.
        </Typography>

        <Typography
          variant="body1"
          component="p"
          style={{ textAlign: "justify" }}
        >
          This endpoint adds the bot message to the conversation tracker and
          returns this bot message along with the response.
        </Typography>

        <code>POST /conversations/&lt;conversation_id&gt;/trigger_intent</code>

        <Typography
          variant="body1"
          component="p"
          style={{ textAlign: "justify" }}
        >
          Example request payload:
        </Typography>

        <pre>
          <code>{`{\n  "name": "greet",\n  "entities": null\n}`}</code>
        </pre>

        <Typography variant="h3" component="h3">
          Get conversation history
        </Typography>

        <Typography
          variant="body1"
          component="p"
          style={{ textAlign: "justify" }}
        >
          This endpoint returns all the messages (events) in the conversation.
        </Typography>

        <Typography
          variant="body1"
          component="p"
          style={{ textAlign: "justify" }}
        >
          You can also choose which events to show using the query parameter
          "include_events". If you want all messages you can use the value
          "ALL". But since the same user may have multiple sessions, then it's
          better to get all the messages from the last (current) session using
          "include_events=AFTER_RESTART".
        </Typography>

        <code>
          GET
          /conversations/&lt;conversation_id&gt;/tracker?include_events=AFTER_RESTART
        </code>

        <Typography variant="h3" component="h3">
          Get conversation as a yaml story
        </Typography>

        <Typography
          variant="body1"
          component="p"
          style={{ textAlign: "justify" }}
        >
          The history endpoint returns all the events in the tracker, but this
          endpoint returns the tracker as a story (yml format, not json). It's
          cleaner and easier to read.
        </Typography>

        <Typography
          variant="body1"
          component="p"
          style={{ textAlign: "justify" }}
        >
          If you posted something to "/conversations/&lt;id&gt;/trigger_intent",
          then you will notice that your story has some "EXTERNAL" messages like
          this:
        </Typography>

        <pre>
          <code>{`version: "3.1"
stories:
- story: t3
  steps:
  - intent: greet
    user: |-
      oi
  - intent: greet
    user: |-
      EXTERNAL: greet
  - action: utter_greet
`}</code>
        </pre>

        <Typography
          variant="body1"
          component="p"
          style={{ textAlign: "justify" }}
        >
          I didn't find a way to remove these "EXTERNAL" messages, but you can
          ignore them. And if you use this story to train your bot, you should
          remove these "EXTERNAL" messages.
        </Typography>

        <Typography variant="h2" component="h2">
          Additional Tips
        </Typography>

        <ul>
          <li>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: "justify" }}
            >
              If you need further customization, like showing a list of
              conversations, you need to manage the data yourself. Whether to
              create a new database and store what you want or{" "}
              <a
                href="https://rasa.com/docs/rasa/tracker-stores/"
                rel="external nofollow"
                target="_blank"
              >
                configure a Tracker Store
              </a>{" "}
              and make Rasa connect to your database (Like they do in Rasa
              Pro/X/Enterprise). The rasa HTTP API is very limited, so you will
              need to do some work to make it work for you. You may also
              consider{" "}
              <a
                href="https://rasa.com/docs/rasa-enterprise/"
                rel="external nofollow"
                target="_blank"
              >
                buying a license for Rasa X/Enterprise
              </a>
              .
            </Typography>
          </li>
        </ul>
      </BlogPost>
    </BasePage>
  );
}
