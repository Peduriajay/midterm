// App.jsx
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNoteForm from "./AddNoteForm";
import notes from "../notes";

const App = () => {
  const [notesState, setNotes] = useState(notes);

  const handleAddNote = (newNote) => {
    setNotes([...notesState, newNote]);
  };

  const handleDeleteNote = (noteId) => {
    setNotes(notesState.filter((note) => note.id !== noteId));
  };

  return (
    <div>
      <Header />
      <main>
        {notesState.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            onDelete={handleDeleteNote} // remove the function call here
          />
        ))}
        <AddNoteForm onSubmit={handleAddNote} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
