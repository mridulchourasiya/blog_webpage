/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=600"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgtitle}>Digital Storyteller</h1>
          <h2 className={styles.imgdesc}>
            Hancrafting award winnig digital experience
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            {" "}
            Our digital marketing success stories, such as the optimization of
            video creative processes in real time, showcase the efficiency and
            effectiveness of our storytelling agency's approach Our approach to
            digital storytelling aligns with the effectiveness demonstrated in
            classrooms using tools like Moviemaker software, as described in
            relevant research.
            <br />
            <br />
            This success, similar to the case of doubling efficiency, is a
            testament to our commitment to delivering results
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do</h1>
          <p className={styles.desc}>
            Understanding the short form of digital media production, we
            leverage everyday people's ability to create and share stories
            online. This aligns with the essence of digital storytelling,
            allowing us to harness the power of personal narratives in our
            creations
            <br />
            <br /> -- Digital Storytelling agency
            <br />
            <br /> -- Fast
            <br /> 
            <br /> -- Precise
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
