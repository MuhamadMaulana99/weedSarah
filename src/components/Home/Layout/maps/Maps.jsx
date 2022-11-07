/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
// import "./style.scss";
import "./styles.css";

export const Maps = () => {
  return (
    <div className="cont">
      <div class="cardss">
        <div class="envelope"></div>
        <h1>
         Temukan <em>Kami</em> to Our <em>Weeding</em>
        </h1>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7493525702425!2d106.60533021531968!3d-6.296632863380972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd660ea7ac51%3A0x614dbd834baadb6a!2sJl.%20Ciakar%20No.73%2C%20Cicalengka%2C%20Kec.%20Pagedangan%2C%20Kabupaten%20Tangerang%2C%20Banten%2015336!5e0!3m2!1sid!2sid!4v1667804461426!5m2!1sid!2sid"
            width="180"
            height="180"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="heart"></div>
      </div>
    </div>
  );
};
