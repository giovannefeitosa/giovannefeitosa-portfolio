import styles from "./LinkRow.module.scss";

export function LinkRow({ icon, label, value, href }: any) {
  return (
    <div className={styles.linkRowContainer}>
      <a
        href={href}
        className={styles.linkRow}
        rel="external nofollow"
        target="_blank"
      >
        <span className={styles.linkRowIcon}>
          {{ ...icon, props: { fontSize: "small" } }}
        </span>
        <span className={styles.linkRowLabel}>{label}:</span>
        <span className={styles.linkRowValue}>{value}</span>
      </a>
    </div>
  );
}
