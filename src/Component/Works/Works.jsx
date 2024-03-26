import React from 'react'
import './Works.css'
function Works() {
  return (
    <section className="work-page" id="work">
      <h1 className="title">
        <span className="material-symbols-outlined ">home_repair_service</span>
        My Projects
      </h1>
      <div className="content">
        {/* <p>Following are some of my  works : </p> */}
      </div>
      <div className="works-display">
        <div className="item" style={{ textAlign: "center" }}>
          <img src={require("./ticket.jpg")} alt="" />
          {/* <img src={{require("./Ticket.jpeg")}}alt="" /> */}

          <a
            className="link-icon"
            href="https://tickete-ebon.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="item-title cart">
              <span>
                <b>Ticket Booking Website (Cart)</b>
              </span>
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </div>
          </a>
          <p className="p" style={{ paddingTop: "0.6rem" }}>
            Front-end : <b>HTML5, CSS3, Javascript</b> <br />
            FrameWorks : <b>React.JS</b>{" "}
          </p>
        </div>

        <div className="item" style={{ textAlign: "center" }}>
          <img src={require("./health.png")} alt="" />
          <a
            className="link-icon"
            href="https://fixhealth-ruddy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="item-title cart">
              <span>
                <b>Health Fix</b>
              </span>
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </div>
          </a>
          <p className="p" style={{ paddingTop: "0.6rem" }}>
            Front-end : <b>HTML5,CSS3, Javascript</b> <br />
            FrameWorks : <b>ReactJs</b>{" "}
          </p>
        </div>

        <div className="item" style={{ textAlign: "center" }}>
          <img src={require("./movie.png")} alt="" />
          <a
            className="link-icon"
            href="https://listing-movies.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="item-title cart">
              <span>
                <b>Movie Listing</b>
              </span>
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </div>
          </a>
          <p className="p" style={{ paddingTop: "0.6rem" }}>
            Front-end : <b>HTML5,CSS3, Javascript</b> <br />
            FrameWorks : <b>ReactJs</b>{" "}
          </p>
        </div>

        <div className="item" style={{ textAlign: "center" }}>
          <img src={require("./vaccine_tracker.png")} alt="" />
          <a
            class="link-icon"
            href="https://vaccine-tracker-psi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="item-title netflix">
              <span>
                <b>Covid Vaccine Tracker</b>
              </span>

              <i class="fa fa-external-link" aria-hidden="true"></i>
            </div>
          </a>
          <p className="p" style={{ paddingTop: "0.6rem" }}>
            Front-end : <b>HTML5,CSS3, Javascript</b> <br />
            FrameWorks : <b>ReactJs</b>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Works