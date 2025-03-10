import { useEffect } from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.iubenda.com/iubenda.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className={styles.footer}>
      <p className={styles.paragraph}>
        © 2025 - Azienda Agricola Nicodemi - P.Iva 12299490156 - All rights
        reserved.
      </p>
      <p className={styles.paragraph}>
        <a
          href="https://www.iubenda.com/privacy-policy/50847188"
          className="iubenda-white iubenda-noiframe iubenda-embed"
          title="Privacy Policy"
        >
          Privacy Policy
        </a>{" "}
        |{" "}
        <a
          href="https://www.iubenda.com/privacy-policy/50847188/cookie-policy"
          className="iubenda-white iubenda-noiframe iubenda-embed"
          title="Cookie Policy"
        >
          Cookie Policy
        </a>
      </p>
    </div>
  );
};

export default Footer;
