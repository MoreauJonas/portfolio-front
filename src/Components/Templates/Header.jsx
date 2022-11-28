import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AppWrapp from "../../wrapper/AppWrapp";

import circle from "../assets/circle.svg";
import sass from "../assets/sass.png";
import html from "../assets/html.png";
import js from "../assets/javascript.png";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: { duration: 1, ease: "easeInOut" },
  },
};
const Header = () => {
  const [profil, setProfil] = useState([0]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/profil/")
      .then((res) => setProfil(res.data[0]));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/languages/")
      .then((res) => setLanguages(res.data[0]));
  }, []);

  return (
    <div>
      <div className="app__header app__flex" key={profil.id}>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, I am</p>
                <span>👋</span>
                <h1 className="head-text">
                  {profil.name} {profil.fristname}
                </h1>
              </div>
            </div>
            <div className="tag-cmp app__flex">
              <p className="p-text">Web Developer</p>
              <p className="p-text">Stagiaire</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img
            src={`http://localhost:8000/${profil.picture}`}
            alt="profil_image"
          />
          <motion.img
            src={circle}
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            alt="profil_circle"
            className="overlay_circle"
          />
        </motion.div>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {/* {languages.map((language, index) => (
             <div className="circle-cmp app__flex" key={`language-${index}`}>
               <img
                 src={`http://localhost:8000/${language.picture}`}
                 alt="circle"
               />
             </div>
           ))} */}
          {[sass, html, js].map((el, idx) => (
            <div className="circle-cmp app__flex" key={`el-${idx}`}>
              <img src={el} alt="circle" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrapp(Header, "home");
