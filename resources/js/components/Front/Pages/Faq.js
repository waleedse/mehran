import React, { Component } from 'react';

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
                    question:'What if an incorrect/damaged item is delivered to me?',
                    answer:`In the very rare case if you have received a wrong, damaged or incomplete product then we are truly sorry for the inconvenience caused to you. You can return the product to the delivery person on the spot as no transaction is made unless you are fully satisfied with the product you receive`,
                    state:false,
                },
                ,
                 {
                    question:'I have a comment/suggestion regarding your product/service.',
                    answer:`We highly value any and all feedback from our customers and fans! Please don’t hesitate in contacting our Customer Care by either emailing us at info@chairmanfoam.com or contacting via one of our social media pages with your comments and suggestions. You can even call us to record your response.`,
                    state:false,
                },
                ,
                 {
                    question:'Why are two similar mattresses so widely different in price?',
                    answer:`Chances are they are not as similar as they seem. They might both claim to be predominantly of the same construction – but further investigation will probably reveal different material qualities, densities, amounts, etc. If you want to comparative shop you will need quite a lot of detail to make sure you are comparing like with like.`,
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
                    question:'Why are there so many different quilting designs?',
                    answer:`The quilting design on a mattress cover helps determine the firmness or plushness of the sleep surface. If a quilting design is small and close, the bed will tend to feel firmer; if the design is large and spread out, the bed will usually feel plusher.`,
                    state:false,
                },
                {
                    question:'Why are there so many different quilting designs?',
                    answer:`The quilting design on a mattress cover helps determine the firmness or plushness of the sleep surface. If a quilting design is small and close, the bed will tend to feel firmer; if the design is large and spread out, the bed will usually feel plusher.`,
                    state:false,
                },
                {
                    question:'Are your items covered by a warranty?',
                    answer:`Mehran’s Chairman Foam mattress carries a warranty of 15 years under normal use from the date of purchase to the original user. The Warranty covers replacement /discount towards unused period at the company discretion provided the mattress is returned to the dealer from whom the purchase was made from its regional office as the case may be. The warranty does not extend to any other part of the mattress or the entire mattress which has been subjected to misuse, accident, natural calamity, mishandling or violation of instruction for use. The Company will make efforts to attend to customer complaints within 10 working days after the complaint registration.`,
                    state:false,
                },
                {
                    question:'What is your exchange/replacement policy?',
                    answer:`Our 14-day exchange policy applies only to online sales of mattresses, and not accessories. The 14 days’ mattress trial is not applicable during campaigns or any other discount offers. In the rare case that you have received a wrong, (i.e. mattress model or size other than what you ordered), damaged or incomplete product, please inform the delivery team before they leave and we will correct the order. The mattress must be unused and returned to the delivery team at that same moment.To arrange a replacement, please contact us or email us atinfo@chairmanfoam.comor call us at 92-42-3544-1671 or
                    +92-42-3544-1672
                    `,
                    state:false,
                },
                {
                    question:'How long will it take for my order to be delivered?',
                    answer:`All orders will be delivered by our courier service providers within 5-7 working days in Pakistan. If your order has not been delivered in the specified time, please contact our Customer Care Service by emailing us at atinfo@chairmanfoam.comor call us at 92-42-3544-1671 or +92-42-3544-1672`,
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
                <div className="page_bg text-center page_header_padding">
                    <h1 className="title-text page_title_ text-center ">FAQ's</h1>
                </div>
                <div className="container mt-5">

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
                    </div>
            </div>

        );
    }
}

export default Faq;
