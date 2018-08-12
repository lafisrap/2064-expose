import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionIntroduction from "./Sections/SectionIntroduction.jsx";
import SectionSamples from "./Sections/SectionSamples.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/expose.jsx";

// Content
import content from 'content/expose.js';

class Expose extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          brand={content.brand}
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg4.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>{content.title}</h1>
                  <h3 className={classes.subtitle}>{content.subtitle}</h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionIntroduction />
        </div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionSamples />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Expose);
