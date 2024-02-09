import React from "react";
// import { i1, i6 } from '../images';

// Section2
import { section1CSS } from "../../cssfiles/section1.css";
import Section2 from "./section2";
import SectionOne from "./section1";
import Meassage from "./message";
// import Testimonial from './testimonials';
import { breed1, breed2, breed3, breed4 } from "../images";

export default function AllSection() {
  return (
    <>
      {/* <section className='wrapper' style={{ height: '10rem' }}> */}
      <div className="wrapper">
        <div className="row">
          <SectionOne num="card1" title="RENT A PET" />
          <SectionOne num="card2" title="Adopt A PET" />
          <SectionOne num="card3" title="Breed A PET" />
        </div>
      </div>
      {/* -----------MESSAGE---------- */}

      <div className="message" style={{ marginTop: "20px" }}>
        <Meassage />
      </div>

      <div className="section2">
        <h1>Featured Breed</h1>
        <Section2
          title="Labrador-Rettriver"
          img={breed1}
          para="hey there click on explore to chech out our featuring feed"
        />
        <Section2
          title="German Sheperd"
          img={breed2}
          para="hey there click on explore to chech out our featuring feed"
        />
        <Section2
          title="Golden Retriver"
          img={breed3}
          para="hey there click on explore to chech out our featuring feed"
        />
        <Section2
          title="Bulldog"
          img={breed4}
          para="hey there click on explore to chech out our featuring feed"
        />
      </div>

      {/* <Testimonial/> */}
    </>
  );
}
