import React from 'react'
import './Banner.css'
function Banner() {
    return (
      <section className="banner" id="home">
        <div className="bio">
          <h1 style={{ color: "#fff" }}>
            Hello, I am{" "}
            <span style={{ color: "red" }}>Manisha Buragohain</span>
          </h1>
          <h1></h1>
          <h1 style={{ color: "#fff" }}>A self taught Front-End Developer.</h1>
        </div>
        <div className="fade"></div>
      </section>
    );
}

export default Banner;
