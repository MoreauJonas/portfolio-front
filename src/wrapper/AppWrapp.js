import React from "react";
import NavigationDots from "../components/templates/NavigationDots";
import SocialMedia from "../components/templates/SocialMedia";

const AppWrapp = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2022 Jonas</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapp;
