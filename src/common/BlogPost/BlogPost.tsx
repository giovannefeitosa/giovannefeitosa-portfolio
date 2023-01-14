import styles from "./BlogPost.module.scss";

export function BlogPost({ title, date, children }: any) {
  return (
    <div className={styles.blogPostContainer}>
      <h1 className={styles.blogPostTitle}>{title}</h1>
      <p className={styles.blogPostDate}>{date}</p>
      <div className={styles.blogPostContent}>{children}</div>
    </div>
  );
}
