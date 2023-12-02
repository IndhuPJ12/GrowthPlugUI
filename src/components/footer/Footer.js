import React from "react";
import "./Footer.css";

const Footer = () => {
  const navigation = ["Home", "Reviews", "Contact"];
  return (
    <div className="footer-container">
      <div className="footer-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.836452162906!2d-90.00444322452388!3d35.135754659746105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d57e02faea552d%3A0x5df1eff0f09a5467!2sDr.%20J.%20Whitley%20Wills!5e0!3m2!1sen!2sin!4v1701431945645!5m2!1sen!2sin"
          width="600"
          height="350"
          style={{ border: 0, borderRadius: "8px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="footer-content">
        <div className="footer-officehours">
          <div>J WHITLEY WILLS</div>
          <div>OFFICE HOURS</div>
          <ul className="footer-timing">
            <li>
              <li>MON</li>
              <li>7.20 am - 3.00 pm</li>
            </li>
            <li>
              <li>TUE</li>
              <li>8.00am - 12.00 pm</li>
            </li>
            <li>
              <li>WED-THU</li>
              <li>8.00 am - 5.00 pm</li>
            </li>
            <li>
              <li>FRI</li>
              <li>closed</li>
            </li>
          </ul>
          <div>LOCATION</div>
          <div>
            59 S Idlewild St, Memphis, TN 38104
            <div>Phone:(901)726-9525 </div>
            <div>TextUs: (901)726-9525</div>
            <div>Email:office@jwhitleywillsdds.com</div>
          </div>
        </div>
        <div className="footer-navigation">
          <div>Navigation</div>
          <ul>
            {navigation?.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
