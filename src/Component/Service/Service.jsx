import React from 'react'
import './Service.css'
function Service() {
  return (
    <section className="service-page" id="service">
      <h1 className="title">
        <span className="material-symbols-outlined ">design_services</span>
        Services
      </h1>
      <div className="content">
        <p>
          {" "}
          I am eager to continue expanding my skill set and honing my craft. My
          ultimate goal is not just proficiency, but mastery—to become a better
          coder with each passing day. In this journey, the destination is not a
          static endpoint but a continuous evolution towards becoming the best
          coder I can be.
        </p>
      </div>
      <div className="service-images">
        <div className="static" style={{ textAlign: "center" }}>
          <a href="mailto:@gmail.com?subject=Need a Static website&body=Hello Bifin">
            <img src={require("./static-website.png")} alt="" />
            <h2 className="caption">Web Applications</h2>
          </a>
        </div>
        <div className="webapp" style={{ textAlign: "center" }}>
          <a href="mailto:bifinbau088@gmail.com?subject=Need a Web Application&body=Hello Bifin">
            <img src={require("./webapp.png")} alt="" />
            <h2 className="caption">React Applications</h2>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Service