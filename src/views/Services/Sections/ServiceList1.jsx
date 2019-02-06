import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import NavPills from "components/NavPills/NavPills.jsx";
import cardsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";

import ServiceInfo from './ServiceInfo1.jsx';



//Data
import services from '../../../db/Services';
import styles from '../../../db/ElementStyles';


class Services extends React.Component {

  state = {
    services: [],
  }

  componentDidMount() {
    this.setState({ services: services })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.section}>
        <GridContainer justify="center"
          style={{
            marginTop: '0',
            paddingTop: 0,
          }}>
          <GridItem xs={12} sm={12} md={12} className={classes.textCenter} style={{ margin: '0', padding: '0' }}>
            <h2 style={{ fontWeight: 'bold' }}>Our Services</h2>
            <div>
              <NavPills  style={{ backgroundImage: `url(${styles.serviceBg})` }}
                horizontal={{
                  tabsGrid: { xs: 12, sm: 3, md: 2 },
                  contentGrid: { xs: 12, sm: 9, md: 10 }

                }}
                color={styles.serGroupColor}
                // alignCenter
                tabs={[
                  {
                    tabButton: "Organic Manicures",
                    tabContent: <ServiceInfo allServices={this.state.services} groupName='Organic Manicures' />
                  },
                  {
                    tabButton: "Organic Pedicures",
                    tabContent: <ServiceInfo allServices={this.state.services} groupName='Organic Pedicures' />
                  },
                  {
                    tabButton: "Nails Extension",
                    tabContent: <ServiceInfo allServices={this.state.services} groupName='Nails Extension' />
                  },
                  {
                    tabButton: "SNS & OPI Dipping",
                    tabContent: <ServiceInfo allServices={this.state.services} groupName='SNS & OPI Dipping' />
                  },
                  {
                    tabButton: "Gel",
                    tabContent: <ServiceInfo allServices={this.state.services} groupName="Gel" />
                  },
                  {
                    tabButton: "Gel Polish",
                    tabContent: <ServiceInfo allServices={this.state.services} groupName="Gel Polish" />
                  },
                  {
                    tabButton: "Kiddy Services",
                    tabContent: <ServiceInfo allServices={this.state.services} groupName="Kiddy Services" />
                  },
                  {
                    tabButton: "Additional Add On",
                    tabContent: <ServiceInfo allServices={this.state.services} groupName="Additional Add On" />
                  },
                  {
                    tabButton: "Waxing",
                    tabContent: <ServiceInfo allServices={this.state.services} groupName="Waxing" />
                  },
                  {
                    tabButton: "Facial",
                    tabContent: <ServiceInfo allServices={this.state.services} groupName="Facial" />
                  },
                  {
                    tabButton: "Eyelash Extension",
                    tabContent: <ServiceInfo allServices={this.state.services} groupName="Eyelash Extension" />
                  },
                ]}
              />
              <div className={classes.tabSpace} />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(cardsStyle)(Services);

