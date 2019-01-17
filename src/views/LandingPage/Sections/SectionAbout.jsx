import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";



import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

class SectionProduct extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} >
        {/* <GridContainer>
          <GridItem xs={12} sm={7} md={7}>
          <h2 className={classes.title}>About Us</h2>
            <h5 className={classes.description}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn't scroll to get here. Add a button if you want
              the user to see more.
            </h5>

          </GridItem>

          <GridItem xs={12} sm={5} md={5}>
            
          </GridItem>
        </GridContainer> */}
              

      <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
            <h2 className={classes.title}>About Us</h2>
            <h5 className={classes.description}>
            Welcome to Signature Nails Salon! Here, you can experience a spacious and bright environment. 
            To ensure the best quality of services, tools are sterilized for sanitization and to better serve you with clean equipment. 
            Feel relax, enjoy some drinks while our expert technicians serve you with trending and new beauty techniques with decent prices. 
            We provide our signature Pedicures, Manicures, and other services, as well as services upon requests. 
            Walk-ins and appointments are available and welcome. 
            Customers’ satisfactions are our top priority, so let’s get ready for your special occasion with us at Signature Nails!
            </h5>
          </GridItem>
        </GridContainer>
      < div >
        </div >
      </div >
    );
  }
}

export default withStyles(productStyle)(SectionProduct);
