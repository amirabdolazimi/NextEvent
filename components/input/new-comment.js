import {  useState } from "react";
import classes from "./new-comment.module.css";

function NewComment(props) {
  const [isInvalid, setIsInvalid] = useState(false);
  const [formValues, setFormValues] = useState({
    emailInput: "",
    nameInput: "",
    commentInput: "",
  });

  function sendCommentHandler(event) {
    event.preventDefault();

    const enteredEmail = formValues.emailInput;
    const enteredName = formValues.nameInput;
    const enteredComment = formValues.commentInput;

    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredComment ||
      enteredComment.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    props.onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    });
    setIsInvalid(false);
    setFormValues({
      emailInput: "",
      nameInput: "",
      commentInput: "",
    });
  }

  return (
    <form className={classes.form} onSubmit={sendCommentHandler}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            value={formValues.emailInput}
            onChange={(e) =>
              setFormValues((prevState) => ({
                ...prevState,
                emailInput: e.target.value,
              }))
            }
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            value={formValues.nameInput}
            onChange={(e) =>
              setFormValues((prevState) => ({
                ...prevState,
                nameInput: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="comment">Your comment</label>
        <textarea
          id="comment"
          rows="5"
          value={formValues.commentInput}
          onChange={(e) =>
            setFormValues((prevState) => ({
              ...prevState,
              commentInput: e.target.value,
            }))
          }
        ></textarea>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button>Submit</button>
    </form>
  );
}

export default NewComment;
