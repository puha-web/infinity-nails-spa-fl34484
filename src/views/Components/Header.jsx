import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Danger from "components/Typography/Danger.jsx";


import landingPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";

//data
import aboutUs from '../../db/AboutUs';
import Style from '../../db/ElementStyles.js';


class PageHeader extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <Header
        color='transparent'
        brand={
          <Danger>
            <h4
              style={Style.brandName}
            >{aboutUs.salonName}</h4>
          </Danger>
        }
        links={<HeaderLinks dropdownHoverColor={Style.headerBackground} />}
        fixed
        changeColorOnScroll={{
          height: 1,
          color: Style.headerBackground
        }}
        {...rest}
      />
    )
  }
}

export default withStyles(landingPageStyle)(PageHeader);