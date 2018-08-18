import React from "react";
// react plugin that creates slider
import Nouislider from "react-nouislider";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import Paginations from "components/Pagination/Pagination.jsx";
import Badge from "components/Badge/Badge.jsx";
import NavPills from "components/NavPills/NavPills.jsx";

import content from 'content/expose.js';

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";

class SectionBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sections}>
        <a name="interviews"></a>
        <div className={classes.container}>
          <div id='interviews' className={classes.title}>
            <h2>{content.interviews.title}</h2>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={9}>
                <NavPills
                    color="primary"
                    tabs={ content.interviews.interviews.map(interview => {
                        return {
                            tabButton: interview.name,
                            tabIcon: interview.icon,
                            tabContent: (
                                <span>
                                    { interview.qnas.map(qa => (
                                        <p>{qa}</p>
                                    ))}
                                </span>
                            )
                        } 
                    })}
                />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(SectionBasics);
