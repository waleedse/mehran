import React, { Component } from 'react';
import Navbar from './NavBar'
import Slider from './Slider'
import './front.css'
import Features from './LandingComponents/faeture2'
import Story from './LandingComponents/Story'
import FeatureProducts from './LandingComponents/FeatureProducts'
import Dream from './LandingComponents/Dream'
import Journey from './LandingComponents/journey'
import Footer from './LandingComponents/Footer'
import $ from 'jquery';

class Index extends Component {
    componentDidMount(){
        $(document).ready(function(){
          $(window).scroll(function (){
            if($(window).scrollTop()>50){
              $('nav').addClass('index_nav_var');
            }else{
              $('nav').removeClass('index_nav_var');

            }
          })
        })
        $('body').on('mouseenter mouseleave','.dropdown',function(e){
          var _d=$(e.target).closest('.dropdown');
          if (e.type === 'mouseenter')_d.addClass('show');
          setTimeout(function(){
            _d.toggleClass('show', _d.is(':hover'));
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded',_d.is(':hover'));
          },300);
        });
      }
    render() {
        return (
            <div style={{overflow:"hidden"}}>

                <div id="explorebutton">
                 <a href="/Shop"><button  className="btnShopNow">Explore Our Products</button></a>
                </div>
                <div >
                    <Slider></Slider>
                </div>
                <Features></Features>
                <Story />
                <Journey />
                <FeatureProducts />
                <Dream />
            </div>
        );
    }
}

export default Index;
