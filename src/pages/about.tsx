import { Button, Grid } from "@mui/material";
import { BasePage } from "../common/BasePage";
import { LinkRow } from "../common/LinkRow/LinkRow";
import homeStyles from "../styles/Home.module.scss";
import styles from "../styles/About.module.scss";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ProfessionalExperienceItem from "../common/ProfessionalExperienceItem/ProfessionalExperienceItem";
import { useCallback, useState } from "react";
import Head from "next/head";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  // write a function that returns the number of months from a given date
  const getMonthsFrom = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    return months;
  };

  const openShowMore = useCallback((e: any) => {
    e.preventDefault();
    setShowMore(true);
  }, []);

  return (
    <BasePage activeMenu="about">
      <Head>
        <title>About Giovanne Feitosa | GF Portfolio</title>
        <meta property="og:title" content="Giovanne Feitosa Portfolio" />
        <meta name="description" content="About me page" />
        <meta property="og:description" content="About me page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Giovanne Feitosa" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                  backgroundImage: `url("https://cdn.midjourney.com/6888196c-43c5-4da6-9196-b18ee2b49e69/grid_0.png")`,
                }}
              >
                &nbsp;
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <div className={homeStyles.contentContainer}>
              <h1 className={homeStyles.title}>Giovanne Feitosa</h1>
              <h2 className={homeStyles.subtitle}>about me</h2>
              <p className={styles.techList}>
                <strong>NodeJS:</strong> NestJS, Sequelize, TypeORM, Socket.io,
                Unit Tests.
                <br />
                <strong>Databases:</strong> PostgreSQL, MongoDB, Oracle,
                DynamoDB, MariaDB.
                <br />
                {!showMore && (
                  <span className={styles.showMoreLinkContainer}>
                    <a
                      href=""
                      className={styles.showMoreLink}
                      onClick={openShowMore}
                    >
                      Show more
                    </a>
                  </span>
                )}
                {showMore && (
                  <>
                    <strong>Python:</strong> Flask, Pandas, Numpy, Scikit-learn,
                    Pytorch, Matplotlib, Seaborn, Yolo, Rasa/Rasa Enterprise,
                    Data Analysis, Data Wrangling/Preparation, Dataset
                    augmentation.
                    <br />
                    <strong>Microservices:</strong> Docker, Kubernetes, Jenkins,
                    Github Actions, TCP, gRPC, Kafka, Redis.
                    <br />
                    <strong>AWS:</strong> EC2, S3, Lambda, SNS, DynamoDB, SQS.
                    <br />
                    <strong>Others:</strong> Scrum, SOLID, Clean Code.
                    <br />
                  </>
                )}
              </p>
              {showMore && (
                <p className={styles.aboutDescription}>
                  I was always fascinated by the endless possibilities that
                  technology offered. I was drawn to the idea of being able to
                  create and build things that could have a meaningful impact on
                  people's lives, and I saw programming as a way to turn my
                  ideas into reality.
                </p>
              )}
              {showMore && (
                <p className={styles.aboutDescription}>
                  My goal is to work with artificial intelligence. While I'm
                  not, I'm working on my skills and learning new things almost
                  every day. Since AI is so extensive, I decided to create this
                  website so I can document my journey and share my knowledge
                  with others.
                </p>
              )}

              <br />

              <LinkRow
                icon={<BusinessCenterIcon />}
                label="LinkedIn"
                value="linkedin.com/in/giovanneafonso"
                href="https://www.linkedin.com/in/giovanneafonso"
              />

              <LinkRow
                icon={<BusinessCenterIcon />}
                label="Github"
                value="github.com/giovannefeitosa"
                href="https://github.com/giovannefeitosa"
              />

              <LinkRow
                icon={<BusinessCenterIcon />}
                label="Kaggle"
                value="kaggle.com/lelearningai"
                href="https://www.kaggle.com/lelearningai"
              />

              {/*
              <LinkRow
                icon={<BusinessCenterIcon />}
                label="Resume"
                value="See PDF in a new tab"
                href="#"
              />
              */}

              <br />

              <h2 className={homeStyles.subtitle}>professional experience</h2>

              <ProfessionalExperienceItem
                image="https://fcamara.nacao.digital//wp-content/uploads/2022/08/simbolo-1.png"
                position="Backend Software Engineer"
                company="FCamara - Dasa"
                timeString={`2022/dez - current · ${getMonthsFrom(
                  new Date("2022-12-01")
                )} months`}
                companyUrl="https://fcamara.com/"
                excerpt={`
                  Working on developing Azure/AWS/Kubernetes microservices using 
                  NodeJS/NestJS for a network of hospitals (Dasa).
                `}
              />

              <ProfessionalExperienceItem
                image="http://www.bkoutsourcing.com.br/wp-content/uploads/2021/07/BK.png"
                position="Backend Software Engineer"
                company="BK Outsourcing - Dasa"
                timeString={`2022/mar - 2022/nov · 8 months`}
                companyUrl="https://www.bkoutsourcing.com.br/"
                excerpt={`
                  Working on developing Azure/AWS/Kubernetes microservices using 
                  NodeJS/NestJS for a network of hospitals (Dasa).
                `}
              />

              <ProfessionalExperienceItem
                image="https://media.licdn.com/dms/image/C4E0BAQFVNP3EZaJuqw/company-logo_200_200/0/1572099273175?e=2147483647&v=beta&t=FVob5tRHLR1soQy-BcacYH9o02eFLQclI_QgYbSyXbA"
                position="DevOps / Machine Learning Python Developer / Tech Lead"
                company="Aquiline Drones"
                timeString="2021/jul - 2022/jul · 1 year 1 month"
                companyUrl="https://www.aquilinedrones.com/"
                excerpt={`
                  Aquiline Drones is an US startup made by a group of aerospace engineers.
                  My intense love for artificial intelligence started here.
                  My work was to manage our dev environment by connecting, deploying and 
                  monitoring microservices / databases / VMs (Self hosted OpenStack).
                  After we had our MVP, we started a new team 
                  focused in creating machine learning models to 
                  use in drones. We created a chatbot using Rasa, 
                  a fruit counting computer vision model using yolov3, 
                  a crowd counting computer vision model using yolov3, 
                  both connected with the frontend through a python REST API.
                `}
              />

              <ProfessionalExperienceItem
                image="https://media.licdn.com/dms/image/D4D0BAQFLcHbCxua66A/company-logo_100_100/0/1663255327424?e=1681344000&v=beta&t=1MZuM7Geq_X2eZTkcZZ0wt_02iFUAqQaLQ38P4VWmII"
                position="Senior Software Engineer"
                company="Hexacta"
                timeString="2021/mar - 2021/jun · 4 months"
                companyUrl="https://www.hexacta.com/"
                excerpt={`
                  Hired to work as a software engineer at Nearpod!
                  Doing improvements on the platform for teachers to create interactive
                  lessons and quizzes for live and self paced classes using React and Typescript.
                  This was my first job in a foreign company from the United States.
                `}
              />

              <ProfessionalExperienceItem
                image="https://media.licdn.com/dms/image/C4D0BAQFoj0GBnXZytw/company-logo_100_100/0/1669993259334?e=1681344000&v=beta&t=UnMl7cvcErzx8XFL2MPyhBvTQYK0cwenqOxwC4IhF6Q"
                position="Senior Fullstack Developer / Tech Lead"
                company="Opah IT Consulting"
                timeString="2019/jul - 2020/dec · 1 year 6 months"
                companyUrl="https://www.opah.com.br/"
                excerpt={`
                  Development of a digital bank called "Crefisa Mais" 
                  using React Native with Typescript. 
                  I later became the tech lead and worked in two different projects.
                  One is a back office platform for bank employees and the 
                  other is a website for a platform for donating money for good causes.
                `}
              />

              <ProfessionalExperienceItem
                image="https://media.licdn.com/dms/image/C4E0BAQEXsACeK8QoeQ/company-logo_100_100/0/1657831450653?e=1681344000&v=beta&t=C5n1L9d8FZNMYCoJeqV_P05N70STYhLpAPHlf0zxBJA"
                position="Senior Frontend Developer / Tech Lead"
                company="Huia"
                timeString="2018/mar - 2019/may · 1 year 3 months"
                companyUrl="https://huia.haus/"
                excerpt={`
                  Worked in some big projects like 
                  a real-time auction system for one of the biggest auction houses in Brazil 
                  (https://www.leiloes.com.br/); 
                  Internal apps for employees at Petrobras (GOV company); 
                  among a few others.
                  I also became a Technical Leader of a small team.
                `}
              />

              <ProfessionalExperienceItem
                image="https://centralsigma.com.br/wp-content/uploads/2021/08/5179pia_de_logo_sigma_letra_preta_2_.svg"
                position="Senior Fullstack Developer / Tech Lead"
                company="SIGMA"
                timeString="2012/apr - 2018/feb · 5 years 11 months"
                companyUrl="https://centralsigma.com.br/"
                excerpt={`
                  Translated the company's ERP software, SIGMA, to its web version 
                  and it was used by over 500 companies in Brazil and a few in Portugal. 
                  I also worked on embedded projects using hardware like Raspberry PI
                  for management and real time monitoring of 
                  Eletrical Energy / Water / and Gas Systems. I was the tech lead of
                  a few of these projects.
                `}
              />
            </div>
          </Grid>
        </Grid>
      </main>
    </BasePage>
  );
}
