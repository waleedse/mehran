import React from 'react';
import HeroSection from '../AboutUsPage/components/HeroSection';

const CompliancePage = () => {
    return (
        <div>
            <HeroSection title="REGULATORY / COMPLIANCE" text="True ECN spreads from 0.0 Pips." />
            <div className=' footerLinkPage'>
                <div className="basicRow">
                    <div className='basicText'>Prospective clients should study the following risk warnings very carefully. Please note that we do not explore or explain all the risks involved when dealing in Financial Instruments. We outline the general nature of the risks of dealing in Financial Instruments on a fair and non-misleading basis.<br/><br/>

                    In particular, Contracts for Difference ('CFDs') are complex financial products and not suitable for all investors. CFDs, are leveraged products that mature when you choose to close an existing open position. By investing in CFDs, you assume a high level of risk and can result in the loss of all of your invested capital.</div>
               
               <div className="basicTitle">Acknowledgement</div>
               <div className="basicText">1. The Customer shall be responsible for the risks of financial losses caused by the failure of information, communication, electronic and other systems. The result of any system failure may be that his order is either not executed according to his instructions or it is not executed at all. The Company does not accept any liability in the case of such a failure.

<br/><br/>2. While trading through the Client Terminal the Customer shall be responsible for the risks of financial losses caused by:
(a) customer's or Company's hardware or software failure, malfunction or misuse;
(b) poor Internet connection either on the side of the Customer or the Company or both, or interruptions or transmission blackouts or public electricity network failures or hacker attacks, overload of connection;
(c) the wrong settings in the Client Terminal;
(d) delayed Client Terminal updates;
(e) the Customer disregarding the applicable rules described in the Client Terminal user guide and in the Company's Website.

<br/><br/>3. The Customer acknowledges that at times of excessive deal flow the Customer may have some difficulties to be connected over the telephone with a Dealer, especially in a Fast Market (for example, when key macroeconomic indicators are released). Abnormal Market Conditions
<br/><br/>
4. The Customer acknowledges that under Abnormal Market Conditions the period during which the Instructions and Requests are executed may be extended. Trading Platform
<br/><br/>
5. The Customer acknowledges that only one Request or Instruction is allowed to be in the queue at one time. Once the Customer has sent a Request or an Instruction, any further Requests or Instructions sent by the Customer are ignored and the "Order is locked" message appears until the first Request or Instruction is executed.
<br/><br/>
6. The Customer acknowledges that the only reliable source of Quotes Flow information is that of the real/live Server's Quotes Base. Quotes Base in the Client Terminal is not a reliable source of Quotes Flow information because the connection between the Client Terminal and the Server may be disrupted at some point and some of the Quotes simply may not reach the Client Terminal.
<br/><br/>
7. The Customer acknowledges that when the Customer closes the order placing/modifying/deleting window or the position opening/closing window, the Instruction or Request, which has been sent to the Server, shall not be cancelled.
<br/><br/>
8. In case the Customer has not received the result of the execution of the previously sent Instruction but decides to repeat the Instruction, the Customer shall accept the risk of making two Transactions instead of one, however the client may receive an "Order is locked" message as described in point 2.5 above.
<br/><br/>
9. The Customer acknowledges that if the Pending Order has already been executed but the Customer sends the Instruction to modify its level and the levels of If-Done Orders at the same time, the only Instruction, which will be executed, is the Instruction to modify Stop Loss and/or Take Profit levels on the position opened when the Pending Order triggered. Communication
<br/><br/>
10. The Customer shall accept the risk of any financial losses caused by the fact that the Customer has received with delay or has not received at all any notice from the Company.
<br/><br/>
11. The Customer acknowledges that the unencrypted information transmitted by email is not protected from any unauthorised access.
<br/><br/>
12. The Customer is fully responsible for the risks in respect of undelivered trading platform internal mail messages sent to the Customer by the Company as they are automatically deleted within 3 (three) calendar days .
<br/><br/>
13. The Customer is wholly responsible for the privacy of the information received from the Company and accepts the risk of any financial losses caused by the unauthorised access of a third party to the Customer's Trading Account.
<br/><br/>
14. The Company has no responsibility if authorized/unauthorised third persons have access to information, including electronic addresses, electronic communication and personal data, access data when the above are transmitted between the Company or any other party, using the internet or other network communication facilities, telephone, or any other electronic means. Force Majeure Event
<br/><br/>
15. In case of a Force Majeure Event the Customer shall accept the risk of financial losses.</div>
                </div>
            </div>
        </div>
    );
};

export default CompliancePage;