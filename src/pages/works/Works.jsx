import React from "react";
import styles from "./works.module.scss";

const Works = () => {
  return (
    <div className={styles.main}>
      <div className={styles.workstext}>
        <h2>My Work</h2>
      </div>
      <div className={styles.works}>
        <ul>
          <li>
            <a href="https://example.com/project1">Project 1</a>
          </li>
          <li>
            <a href="https://example.com/project2">Project 2</a>
          </li>
          <li>
            <a href="https://example.com/project3">Project 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Works;
