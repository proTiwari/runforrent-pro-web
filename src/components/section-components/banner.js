import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {

	handleClick = () => {
		// Scroll to a specific Y position on the page (e.g., 500 pixels from the top)
		const screenWidth = window.innerWidth;
		if(screenWidth<=468){
			window.scrollTo({
				top: 740,
				behavior: 'smooth' // Add smooth scrolling animation
			  });
		}else{
			window.scrollTo({
				top: 440,
				behavior: 'smooth' // Add smooth scrolling animation
			  });
		}
	  }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return    <div className="ltn__slider-area ltn__slider-3  section-bg-1 go-top">
				  <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
				    {/* ltn__slide-item */}
				    <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3">
				      <div className="ltn__slide-item-inner">
				        <div className="container">
				          <div className="row">
				            <div className="col-lg-12 align-self-center">
				              <div className="slide-item-info">
				                <div className="slide-item-info-inner ltn__slide-animation">
				                  <div className="slide-video mb-50 d-none">
				                    <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
				                      <i className="fa fa-play" />
				                    </a>
				                  </div>
				                  <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6>
				                  <h1 className="slide-title animated ">Find Your Dream <br /> Property By Us</h1>
				                  <div className="slide-brief animated">
				                    <p>At RunForRent, we provide you with verified properties, detailed insights, and unedited property visit videos with inside-out visuals.</p>
				                  </div>
				                  <div className="btn-wrapper animated ">
				                    	<button onClick={this.handleClick} className="theme-btn-1 btn btn-effect-1 go-top">Search Property</button>
				                    <a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" data-rel="lightcase">
				                      <i className="icon-play  ltn__secondary-color" />
				                    </a>
				                  </div>
				                </div>
				              </div>
				              <div className="slide-item-img">
				                {/* <img src={"/assets/img/bg/21.jpg"} /> */}
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				    {/* ltn__slide-item */}
				    {/* <div className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal ltn__slide-item-3">
				      <div className="ltn__slide-item-inner  text-right text-end">
				        <div className="container">
				          <div className="row">
				            <div className="col-lg-12 align-self-center">
				              <div className="slide-item-info">
				                <div className="slide-item-info-inner ltn__slide-animation">
				                  <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6>
				                  <h1 className="slide-title animated ">The Right Place <br />of House Finding</h1>
				                  <div className="slide-brief animated">
				                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
				                  </div>
				                  <div className="btn-wrapper animated">
				                    <Link to="/service" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
				                    <Link to="/about" className="btn btn-transparent btn-effect-3">LEARN MORE</Link>
				                  </div>
				                </div>
				              </div>
				              <div className="slide-item-img slide-img-left">
							  {/* <img src={"/assets/img/bg/21.jpg"} /> */}
				              {/* </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>  */}
				    {/*  */}
				  </div>
			</div>
        }
}

export default Banner