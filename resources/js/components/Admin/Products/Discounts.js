import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import DiscountCodes from './Discount_codes'
import AutomaticDiscounts from './Automatic_discounts'
class Discounts extends Component {
    render() {
        return (
            <div id="customer_view">
                 <div className="top_section_title_div">
                    <h2 className="section_title">Discounts</h2>
                </div>
                <div className="container-fluid">
                    <div className="card mt-4">
                    <Tabs defaultActiveKey="codes" id="uncontrolled-tab-example">
                        <Tab eventKey="codes" title="Discount Codes">
                            <DiscountCodes {...this.props}></DiscountCodes>
                        </Tab>
                            <Tab eventKey="automatic" title="Automatic Discounts">
                            <AutomaticDiscounts {...this.props}></AutomaticDiscounts>
                        </Tab>
                           
                        </Tabs>
                    </div>

                </div>
            </div>
        );
    }
}

export default Discounts;