import React, { useEffect, useRef } from 'react';
import '../css/destination.css';
import $ from 'jquery';
// import { Controller, Scene } from "react-scrollmagic";
import { Power4, gsap, TimelineLite } from 'gsap';
import imag1 from '../images/destination/baot.jpg';
import imag2 from '../images/destination/mountain.jpg';
import imag3 from '../images/destination/polynaise.jpg';
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";
// gsap.registerPlugin(CSSRulePlugin);


export default function Destination() {

    // let sektion = useRef(null);
    // let projetInfo = useRef(null);
    // let imag = useRef(null);
    // const projetInfo = useRef(null);
    // const smallTitle = useRef(null);
    let tl = new TimelineLite();

    useEffect(() => {
        // let tl = gsap.TweenMax;
        $('section').each(function () {
            let imag = $(this).find(".box")
            let projetInfo = $(this).find(".projet-info")
            let projetText = $(this).find("h4")
            // TweenMax.to(sektion, 1, { css: { visibility: 'visible' } })

            tl.from(imag, 1.2, { x: 30, scale: 1.5 }, { skewX: 0, xPercent: 100, transformOrigin: "0 % 100 %", ease: Power4.easeOut })
            tl.from(projetInfo, 2, { y: 1230, scale: 1.5 }, { skewX: 0, xPercent: 100, transformOrigin: "0 % 100 %", ease: Power4.easeOut })
            tl.from(projetText, 1.2, { y: 300, scale: 1.5 }, { skewX: 0, xPercent: 10, transformOrigin: "0 % 100 %", ease: Power4.easeIn })
            // console.log(sektion);
            // console.log(imag);
            // tl.from(smallTitle.current, { autoAlpha: 0, y: 3 }, ".=0.8")
        })
    })


    return (
        <>
            <div className="p-4 mt-4">
                <h1 className="text-center">Choose your Destination</h1>
            </div>
            {/* section 1 */}
            <section className="mt-3 section">
                <div className="grillCSS Projet projet-left">
                    <div className="box">
                        <img className="destina-image" src={imag1} alt="left" />
                        <div className="overlay"></div>
                    </div>

                    <div className="projet-info">
                        <p className="small-title"> Nature</p>
                        <h4>Explore</h4>
                        <a href="/Destination" className="projet-link">Exposition </a>
                    </div>
                </div>
            </section>
            {/* section 2 */}
            {/* ref={el => sektion = el}  */}
            <section className="mt-5 section">
                <div className="grillCSS Projet projet-right">
                    <div className="box">
                        <img className="destina-image" src={imag2} alt="right" />
                        <div className="overlay"></div>
                    </div>

                    <div className="projet-info">
                        <p className="small-title"> Nature</p>
                        <h4>Explore</h4>
                        <a href="/Destination" className="projet-link">Exposition </a>
                    </div>
                </div>
            </section>
            {/* section 3 */}
            <section className="mt-5 mb-5">
                <div className="grillCSS Projet projet-left">
                    <div className="box">
                        <img className="destina-image" src={imag3} alt="down" />
                        <div className="overlay"></div>
                    </div>

                    <div className="projet-info">
                        <p className="small-title"> Nature</p>
                        <h4>Explore</h4>
                        <a href="/Destination" className="projet-link">Exposition </a>
                    </div>
                </div>
            </section>
        </>
    )
}
