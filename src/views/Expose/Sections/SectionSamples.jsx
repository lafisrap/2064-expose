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
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";

import content from 'content/expose.js';

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";

class SectionBasics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>{content.samples.title}</h2>
          </div>
          <a name="y2064"></a>
          <h3 id="y2064">2064  <a href="#y2021">(&rarr; 2021-2023)</a></h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={9} >
              <CustomTabs
                anchor="y2064"
                onRef={ref => this.customTabs2064 = ref} 
                headerColor="primary"
                tabs={ content.samples.stories2064.map(storie => {
                    const { tabName, tabIcon, tabContent } = storie;
                    return {
                      tabName,
                      tabIcon,
                      tabContent: tabContent.map(p => (
                        <p className={classes.textCenter}>
                          {p}
                        </p>
                      ))
                    }
                  })
                }
              />
            </GridItem>
          </GridContainer>
          <a name="y2021"></a>
          <h3 id="y2021">
            2021 - 2023 <a href="#y2064">(&rarr; 2064)</a>
          </h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={9} >
              <CustomTabs
                anchor="y2021"
                headerColor="primary"
                tabs={ content.samples.stories2023.map(story => {
                    const { tabName, tabIcon, tabContent, tabTitle } = story;
                    return {
                      tabName,
                      tabIcon,
                      tabContent: [<h2>{tabTitle}</h2>, ...tabContent.map(p => (
                        <p className={classes.textCenter}>
                          {p}
                        </p>
                      ))]
                    }
                  })
                }
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(SectionBasics);
