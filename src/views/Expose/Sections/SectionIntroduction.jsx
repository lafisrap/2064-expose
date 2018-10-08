import React from 'react';
// react plugin that creates slider
import Nouislider from 'react-nouislider';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import Switch from '@material-ui/core/Switch';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
import People from '@material-ui/icons/People';
import Check from '@material-ui/icons/Check';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import CustomLinearProgress from 'components/CustomLinearProgress/CustomLinearProgress.jsx';
import Paginations from 'components/Pagination/Pagination.jsx';
import Badge from 'components/Badge/Badge.jsx';

import content from 'content/expose.js';

import basicsStyle from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx';

class SectionBasics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.sections}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h2>{content.introduction.title}</h2>
                    </div>
                    {content.introduction.teaser.map(p => (<p>{p}</p>))} 
                </div>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h2>{content.introduction.title2}</h2>
                    </div>
                    {content.introduction.text.map(p => (<p>{p}</p>))} 
                </div>
            </div>
        );
    }
}

export default withStyles(basicsStyle)(SectionBasics);
