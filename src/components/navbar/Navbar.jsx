// Import the required modules and styles
"use client"

import React from "react";
import Link from "next/link";
import styles from './navbar.module.css'

// Define the Navbar component
const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Use Link without className directly */}
      <Link href="/">
        <div className={styles.logo}>BlogPost</div>
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          // Use Link with passHref to pass href to the anchor tag
          <Link key={link.id} href={link.url} passHref>
            <div className={styles.link}>{link.title}</div>
          </Link>
        ))}
        <button
          className={styles.logout}
          onClick={() => {
            console.log("logged out");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

// Export the Navbar component
export default Navbar;
