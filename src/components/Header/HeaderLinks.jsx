/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

// Content
import content from '../../content/header.js';

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText={content.buttonText}
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <HashLink to="/#y2064" className={classes.dropdownLink}>
              Leseprobe 2064
            </HashLink>,
            <HashLink to="/#y2021" className={classes.dropdownLink}>
              Leseprobe 2021 - 2023
            </HashLink>,
            <HashLink to="/#interviews" className={classes.dropdownLink}>
              Interviews (fiktiv)
            </HashLink>,
            <HashLink to="/#quotes" className={classes.dropdownLink}>
              Leser-Kommentare (real)
            </HashLink>,
    ]}
        />
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
