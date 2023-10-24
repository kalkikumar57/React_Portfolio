import React from "react";

import "./header.css";

const about = () => {

  return (

    <div id="main">

      <h1>My Projects</h1>

      <div id="row">

        <div className="col">

          <img

            src="https://miro.medium.com/v2/resize:fit:1200/1*6uJgYvJ3ZyIzy0fUlQ20vg.png"

            className="image"

          ></img>

          <h1 className="head">

            <p>Project Name:</p>

            <a href="">Wishlist</a>

          </h1>

        </div>

        <div className="col">

          <img

            src="https://www.cricketfile.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-25-at-5.36.42-AM-1024x1024.jpeg"

            className="image"

          ></img>

          <h1 className="head">

            <p>Project Name:</p>

            <a href="">Hand Cricket</a>

          </h1>

        </div>

        <div className="col">

          <img

            src="https://wp.technologyreview.com/wp-content/uploads/2022/07/SONYAI_GTSophy_RaceTogether.jpeg"

            className="image"

          ></img>

          <h1 className="head">

            <p>Project Name:</p>

            <a href="">Car Racing </a>

          </h1>

        </div>

        <div className="col">

          <img

            src="https://cdn.britannica.com/95/124395-004-3B484C8B/hand-cards-trump-spades.jpg"

            className="image"

          ></img>

          <h1 className="head">

            <p>Project Name:</p>

            <a href="">Cards Game</a>

          </h1>

        </div>

      </div>

    </div>

  );

};

 

export default about;