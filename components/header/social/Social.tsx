import Link from "next/link";
import React from "react";
import { FaVk, FaTelegram, FaGithub } from "react-icons/fa";
import styles from "./Social.module.css";

const Social = () => {
  return (
    <>
      <Link href={"https://github.com/Eaeajj"}>
        <a className={styles.a}>
          <FaGithub size={28} />
        </a>
      </Link>

      <Link href={"https://t.me/Eaeajj"}>
        <a className={styles.a}>
          <FaTelegram size={28} />
        </a>
      </Link>

      <Link href={"https://vk.com/eaeajj"}>
        <a className={styles.a}>
          <FaVk size={28} />
        </a>
      </Link>
    </>
  );
};

export default Social;
