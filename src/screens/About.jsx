import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import about1 from "../components/assets/about01.png";
import about2 from "../components/assets/about02.png";
import about3 from "../components/assets/about03.png";

const abouts = [
  {
    title: "Web Developpement",
    description: "I am a good developper",
    imgUrl: about1,
  },
  {
    title: "Frontend Developpement",
    description: "I am a good developper",
    imgUrl: about2,
  },
  {
    title: "Backend Developpement",
    description: "I am a good developper",
    imgUrl: about3,
  },
];
const About = () => {
  return (
    <div className="app__about">
      <h2 className="head-text">
        I Know That <span>Good Design </span>
        <br />
        means
        <span> Good Design</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, idx) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + idx}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
