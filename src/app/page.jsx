import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital product.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality, We bring togather the team from the
          global tech Industry,
        </p>

        <Button url="/portfolio" text="Contect" />
      </div>
      <div className={styles.item}>
        <Image
          src={Hero}
          alt="Description of the image"
          className={styles.img}
        />
      </div>
    </div>
  );
}
