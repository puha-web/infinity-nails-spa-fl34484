import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

//Data
import aboutData from '../../db/AboutUs';
import elementStyle from '../../db/ElementStyles';

// page style
import landingPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";


class Spotlight extends React.Component {
  render() {
    const { classes } = this.props;
    const phoneNum = 'tel:' + aboutData.phone;
    console.log(phoneNum)

    return (
      <Parallax image={aboutData.coverPhoto} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
                }`}
            >
              <h2 className={classes.title}>{aboutData.slogan}</h2>
              <br />
              <Button
                round
                color={elementStyle.btnColor}
                size="sm"
                href={phoneNum}
                rel="noopener noreferrer"
              >
                <i className="fas fa-phone fa-rotate-90" />CAll US
            </Button>
              <Button
                round
                color={elementStyle.btnColor}
                size="sm"
                href="https://www.google.com/maps/place/Signature+Nails/@28.9083275,-81.9716632,15z/data=!4m5!3m4!1s0x0:0xb2bcce2499f299cb!8m2!3d28.9083275!4d-81.9716632"
                target="_blank"
                rel="noopener noreferrer"

              >
                <i className="fas fa-directions" />Directions
            </Button>
            </GridItem>

          </GridContainer>
        </div>
      </Parallax>

    )
  }
}

export default withStyles(landingPageStyle)(Spotlight);