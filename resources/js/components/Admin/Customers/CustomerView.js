import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import CustomerProfile from './CustomerProfile'
import CustomerOrders from './CustomerOrders'
class CustomerView extends Component {
    render() {
        return (
            <div id="customer_view">
                 <div className="top_section_title_div">
                    <h2 className="section_title">Customer</h2>
                </div>
                <div className="container-fluid">
                    <div className="card mt-4">
                    <Tabs defaultActiveKey="Profile" id="uncontrolled-tab-example">
                        <Tab eventKey="Profile" title="Profile">
                            <CustomerProfile id={this.props.match.params.id}></CustomerProfile>
                        </Tab>
                            <Tab eventKey="Orders" title="Orders">
                            <CustomerOrders id={this.props.match.params.id}></CustomerOrders>
                        </Tab>
                           
                        </Tabs>
                    </div>

                </div>
            </div>
        );
    }
}

export default CustomerView;