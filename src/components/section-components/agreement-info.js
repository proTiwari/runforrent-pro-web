import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AgreementInfo extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__contact-address-area mb-90">
				<div className="container">
				<div className="row">
                <div className="col-lg-4">
					<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<><Link to="/policyagreement"><h3>Policy Agreement</h3></Link></>
						{/* <p>+0123-456789 <br /> +987-6543210</p> */}
					</div>
					</div>
                    {/* {/* <div className="col-lg-4"> */}
					{/* <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow"> */}
						{/* {/* <div className="ltn__contact-address-icon"> */}
						{/* <img src={publicUrl+"assets/img/icons/11.png"} alt="Icon Image" /> */}
						{/* </div> */}
						{/* <a href='https://merchant.razorpay.com/policy/MQjTG7bTIb155J/refund'><h3>Cancellation and Refund Policy</h3></a> */}
						{/* <p>+0123-456789 <br /> +987-6543210</p> */}
					{/* </div> */} 
					{/* </div> */}
					{/* <div className="col-lg-4"> */}
					{/* <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow"> */}
						{/* <div className="ltn__contact-address-icon">
						<img src={publicUrl+"assets/img/icons/10.png"} alt="Icon Image" />
						</div> */}
						{/* <a href='https://merchant.razorpay.com/policy/MQjTG7bTIb155J/contact_us'><h3>Contact us</h3></a> */}
						{/* <p>team@runforrent.com <br />
						team@runforrent.com</p> */}
					{/* </div> */}
					{/* </div> */}
					
					{/* <div className="col-lg-4"> */}
					{/* <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow"> */}
						{/* <div className="ltn__contact-address-icon">
						<img src={publicUrl+"assets/img/icons/12.png"} alt="Icon Image" />
						</div> */}
						{/* <a href='https://merchant.razorpay.com/policy/MQjTG7bTIb155J/shipping'><h3>Other</h3></a> */}
						{/* <p>18/A, New Born Town Hall <br />
						New York, US</p> */}
					{/* </div> */}
					{/* </div> */}
                   
				</div>
				</div>
			</div>
        }
}

export default AgreementInfo