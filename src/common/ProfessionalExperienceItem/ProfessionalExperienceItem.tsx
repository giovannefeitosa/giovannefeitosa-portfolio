import styles from "./ProfessionalExperienceItem.module.scss";

export default function ProfessionalExperienceItem({
  image,
  position,
  company,
  timeString,
  companyUrl,
  excerpt,
}: any) {
  return (
    <div className={styles.professionalExperienceItem}>
      <div className={styles.imageContainer}>
        <div
          className={styles.imageDiv}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.position}>{position}</h3>
        <h4 className={styles.company}>
          <a href={companyUrl} target="_blank" rel="external nofollow noreferrer">
            {company}
          </a>
        </h4>
        <p className={styles.timeString}>{timeString}</p>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </div>
  );
}
