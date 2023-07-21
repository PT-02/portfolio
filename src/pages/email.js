import React from "react";
import "./email.css";
import Footer from "./footer";

function Email() {
  return (
    <>
      <div className="email">
        <h1>Send me a message</h1>
        <h4>Got a question, or just wanna say hello?</h4>
        <h4>Go Ahead</h4>
        <div id="formfill">
          <form data-aos="fade-up" id="sayhello" action="">
            <label class="yourname">You Name</label>
            <input type="name" placeholder="Enter your name"></input>
            <label class="youremail">Email Address</label>
            <input type="email" placeholder="Enter your Email address"></input>
            <label class="yourmessage">Your Message</label>
            <textarea
              name=""
              id=""
              cols="20"
              rows="8"
              placeholder="Hi,I think we need a frontend developer. How soon can you hop on to discuss?"
            ></textarea>

            <button class="submitbtn" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Email;
