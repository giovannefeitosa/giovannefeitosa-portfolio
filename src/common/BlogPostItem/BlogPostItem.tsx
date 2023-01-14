import styles from "./BlogPostItem.module.scss";

export function BlogPostItem({ href, title, date, excerpt, image }: any) {
  return (
    <a href={href} className={styles.blogPostItemContainer}>
      <div
        className={styles.blogPostItemImageContainer}
        style={{
          backgroundImage: `url("${image}")`,
        }}
      >
        &nbsp;
      </div>
      <div className={styles.blogPostItemContentContainer}>
        <h1 className={styles.blogPostItemTitle}>{title}</h1>
        <p className={styles.blogPostItemDate}>{date}</p>
        <p className={styles.blogPostItemExcerpt}>{excerpt}</p>
      </div>
    </a>
  );
}
