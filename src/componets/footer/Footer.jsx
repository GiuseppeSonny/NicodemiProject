import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.paragraph}>
        {" "}
        © 2025 - Azienda Agricola Nicodemi - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
