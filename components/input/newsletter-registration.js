import { useState } from "react";
import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const [email, setEmail] = useState("");
  function registrationHandler(event) {
    event.preventDefault();

    if (!email) {
      alert("Email Field Is Mandatory !");
      setEmail("");
    } else {
      const formValue = {
        id: new Date().toISOString(),
        email,
      };

      fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formValue),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
