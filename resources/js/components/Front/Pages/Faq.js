import React, { Component } from 'react';
import Navbar from '../NavBar'
import Footer from '../LandingComponents/Footer'
class Faq extends Component {
    constructor(props) {
        super(props);
        this.state={
            faqs:[
                {
                    question:'How do I place an order?',
                    answer:`You can place your order as a registered user or a guest. On a product page 
                    pick foam size, choose quantity and press “Proceed to Checkout” button. You will be 
                    taken to your shopping cart where you will get the option to continue shopping, or 
                    carry on to checkout. Add and confirm your personal and shipping information on this 
                    page, select payment method, and review your order before choosing “Order Now”.`,
                    state:false,
                },
                 {
                    question:'How long should my sleep set last?',
                    answer:`You should replace your bedding every eight to ten years. 
                    After this time, the bedding will no longer provide the support and comfort that is required. 
                    You can get more information and sleeping tips on www.sleepresearchfoundation.org`,
                    state:false,
                },
                ,
                 {
                    question:'Why are two similar mattresses so widely different in price?',
                    answer:`Prices differ according to the specifications of the mattresses. Mattresses differ in material qualities, densities, amounts etc. While shopping on comparative basis, you should get the details of the products which are alike and then compare their specifications.`,
                    state:false,
                },
                ,
                 {
                    question:'Does a mattress need to be hard in order to be good for me?',
                    answer:`Each person's preference will vary based on a multitude of factors, including height, weight, age, and whether or not you have back pain or other health considerations.`,
                    state:false,
                },
                ,
                 {
                    question:'Are your items covered by a guarantee?',
                    answer:`Mehran provide coverage for 8 to 10 years on all of its items.`,
                    state:false,
                },
                ,
                 {
                    question:'How do I care for my mattress?',
                    answer:`Keep your mattress clean by using mattress protector. Keep your mattress clean. We suggest using a mattress protector. Shield the mattress from water or other liquids. Don’t use dry cleaning fluid of any type on your mattress.`,
                    state:false,
                },
            ]
        }
    }
    change_faq_state(ind){
        let temp_arr = this.state.faqs;
        temp_arr.map((data,index)=>{
            if(index == ind){
                data.state = ! data.state;
            }
        })

        this.setState({
            faqs:temp_arr
        })
    }
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <h1 className="title-text text-center">FAQ's</h1>
                    {
                        this.state.faqs.map((data,index)=>{
                            return(
                                <div className="card mt-2">
                            <h4 onClick={this.change_faq_state.bind(this,index)} className="  card-title card_title_bg">{data.question}
                            <span style={{float:'right'}}>  <i className={data.state ? "fas fa-chevron-up" : "fas fa-chevron-down"} ></i></span></h4>
                                {
                                    data.state?
                                    <div className="card-body">
                                        <h6 className="card-body-text">
                                            {data.answer}
                                        </h6>
                                    </div>:null
                                }
                            </div>
                            )
                        })
                    }
                    
                </div>
                <div className="mt-5">
                        <Footer/>
                    </div>
            </div>
            
        );
    }
}

export default Faq;