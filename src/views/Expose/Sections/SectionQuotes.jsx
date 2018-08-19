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

import quotesStyle from "assets/jss/material-kit-react/views/componentsSections/quotesStyle.jsx";

class SectionQuotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    console.log(11.3, content.quotes, classes[content.quotes.font])
    return (
      <div className={classes.sections}>
        <a name="quotes"></a>
        <div className={classes.container}>
          <div id='quotes' className={classes.title}>
            <h2>{content.quotes.title}</h2>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={9}>
                <NavPills
                    color="primary"
                    horizontal={{
                        tabsGrid: { xs: 12, sm: 4, md: 4 },
                        contentGrid: { xs: 12, sm: 8, md: 8 }
                    }}                  
                    tabs={ content.quotes.quotes.map(quote => {
                        return {
                            tabButton: quote.name,
                            //tabIcon: quote.icon,
                            tabContent: (
                                <span>
                                    { quote.text.map(p => (
                                        <p className={`${classes.quotes} ${classes[quote.font]}`}>{p}</p>
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

export default withStyles(quotesStyle)(SectionQuotes);
