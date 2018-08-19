import { container, title } from "assets/jss/material-kit-react.jsx";
import customCheckboxRadioSwitch from "assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx";

const quotesStyle = {
  quotes: {
  },
  handFont1: {
    fontFamily: 'Swanky and Moo Moo',
    fontSize: "25px",
    lineHeight: "30px"
  },
  handFont2: {
    fontFamily: 'Indie Flower',
    fontSize: "22px",
    lineHeight: "34px"
  },
  handFont3: {
    fontFamily: 'Architects Daughter',
    fontSize: "21px",
    lineHeight: "30px"
  },
  sections: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  ...customCheckboxRadioSwitch
};

export default quotesStyle;
