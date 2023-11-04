// AddNoteForm.jsx
import React, { useState } from "react";

const AddNoteForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit the new note to the App component
    onSubmit({ title, content });

    // Reset the form
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNoteForm;
