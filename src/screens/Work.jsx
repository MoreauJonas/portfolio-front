import React, { useState, useEffect } from "react";
import axios from "axios";

import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import AppWrapp from "../wrapper/AppWrapp";
import jonas from "../components/assets/MOREAU Jonas.jpg";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  // const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects")
      .then((res) => setWorks(res.data));
  }, []);

  const handleWorkFilter = (item) => {};
  return (
    <>
      <h2 className="head-text">
        My Créative <span>Portfolio </span>
        <br />
        means
        <span> Section</span>
      </h2>
      <div className="app__work-filter">
        {["Projet de groupe", "Hackathon", "GameJam", "All"].map(
          (item, index) => (
            <div
              key={index}
              on
              onClick={handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, idx) => (
          <div className="app__work-item app__flex" key={idx}>
            <div className="app__work-img app__flex">
              <img
                src={`http://localhost:8000/${work.picture}`}
                alt={work.name}
              />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.deploy_url} target="blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.deploy_url} target="blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [0, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.name} </h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.category}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrapp(Work, "work");
