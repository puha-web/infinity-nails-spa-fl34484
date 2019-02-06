
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import WalkIn from "@material-ui/icons/TagFaces";
import CreditCard from "@material-ui/icons/CreditCard";
import Email from "@material-ui/icons/Email";


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.jsx";


//Components
import SalonPhoto from './salonGallery.jsx';
// import ServiceBgImg from 'assets/img/salon/serviceBg.jpg';
import SocialMedia from "../Components/SocialMedia.jsx";

//Data
import aboutData from '../../db/AboutUs';
import elementStyle from '../../db/ElementStyles';
import Contact from '../../db/Contact';

const CustomSkinMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 28.920170, lng: -82.037200 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
      }}
    >
      <Marker position={{ lat: 28.920170, lng: -82.037200 }} label={aboutData.salonName} />

    </GoogleMap>
  ))
);

class Location extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 5);
    document.body.scrollTop = 0;
  }
  render() {

    const { classes } = this.props;
    return (
      <div>
        {/* <Header /> */}
        <div className={classes.bigMap}>
          <CustomSkinMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCAujiH1lsqv_cLpTQRZS9L6h4cNPcJ-s"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{
                  height: `100%`,
                  borderRadius: "6px",
                  overflow: "hidden"
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className={classNames(classes.main, classes.mainRaised)} >
          <div className={classes.contactContent}
          >
            <div className={classes.container}>
              {/* <h2 className={classes.title}>Our Location</h2> */}
              <GridContainer>
                <GridItem md={5} sm={5} className={classes}>
                  <Card style={{ backgroundImage: `url(${elementStyle.serviceBg})` }}>
                    <CardHeader
                      contact
                      color={elementStyle.btnColor}
                      className={classes.textCenter}
                    >
                      <h3 className={classes.cardTitle}>Contact Us</h3>
                    </CardHeader>
                    <CardBody>
                      <GridContainer>
                        <GridItem>
                          {Contact.map(contactInfo => (
                            <InfoArea
                            className={classes.info}
                            title={contactInfo.description}
                            description={
                              <Button
                                round
                                color='default'
                                size="sm"
                                href={contactInfo.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {contactInfo.CallOut}
                                  </Button>
                            }
                            icon={contactInfo.icon}
                            iconColor={elementStyle.iconColor}
                          />
                          ))}
                          
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem md={7} sm={7} className={classes.mlAuto}>
                  <SalonPhoto />
                </GridItem>
              </GridContainer>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(contactUsStyle)(Location);
