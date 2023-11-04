// Note.jsx
import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id); // remove the function call here
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
