// Dependencies
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// Styles
import "./App.css";

export function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_gicct0f", form.current, "VzQNPgx1ZTM_-GVXh")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="application">
      <div className="form__area">
        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="input__area">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Adress"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
