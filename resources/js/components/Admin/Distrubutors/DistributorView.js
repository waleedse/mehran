import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import DistributorProfile from './Profile'
import DistributorOrders from './Orders'
import DistributorPayments from './Payments'
class DistributorView extends Component {
    render() {
        return (
            <div>
                 <div className="top_section_title_div">
                    <h2 className="section_title">Distributor </h2>
                </div>
                <div className="container-fluid">
                    <div className="card mt-4">
                    <Tabs defaultActiveKey="Profile" id="uncontrolled-tab-example">
                        <Tab eventKey="Profile" title="Profile">
                            <DistributorProfile id={this.props.match.params.id}></DistributorProfile>
                        </Tab>
                        <Tab eventKey="Orders" title="Orders">
                           <DistributorOrders id={this.props.match.params.id}></DistributorOrders>
                        </Tab>
                        <Tab eventKey="Payments" title="Payments" >
                            <DistributorPayments id={this.props.match.params.id}></DistributorPayments>
                        </Tab>
                        </Tabs>
                    </div>

                </div>
            </div>
        );
    }
}

export default DistributorView;