import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
const Blog = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.container} href="/testId">
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/19419507/pexels-photo-19419507/free-photo-of-a-laptop-with-a-clock-on-it-sitting-on-a-couch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={400}
            height={250}
            className={styles.desc}
          />
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
