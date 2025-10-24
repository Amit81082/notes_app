import { useState, useEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ title: "", desc: "" });

  const handleAddNote = (e) => {
    e.preventDefault();
      if (currentNote?.title?.trim() === "" || currentNote?.desc?.trim() === "") {
        alert("Please fill both Title and Note before adding🤦‍♂️😁!");
        return; // stop here, don’t add
      }
    setNotes([...notes, currentNote]); // add new note
    localStorage.setItem("notes", JSON.stringify([...notes, currentNote]));
    setCurrentNote({ title: "", desc: "" }); // clear inputs
  };




  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {

        const parsedNotes = JSON.parse(savedNotes);
        setNotes(parsedNotes);

    }
  }, []); // empty dependency array to prevent infinite loop

  const handleDelete = (index) => {
    const confirmDelete = window.confirm(
      "Do you really want to delete ❌ the note ?"
    );
    if (!confirmDelete) return; // if user clicks Cancel, stop here

    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes)); // update storage
  };




  return (
    <>
      <Navbar />
      <main>
        <div className="notebox">
          <h1>Create Your Note</h1>
          <form onSubmit={handleAddNote}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              placeholder="Write Your title..."
              name="title"
              id="title"
              value={currentNote.title}
              onChange={(e) =>
                setCurrentNote({ ...currentNote, title: e.target.value })
              }
            />
            <br />
            <label htmlFor="note">Note:</label>
            <textarea
              placeholder="Write your note here..."
              id="note"
              name="note"
              value={currentNote.desc}
              onChange={(e) =>
                setCurrentNote({ ...currentNote, desc: e.target.value })
              }
            ></textarea>
            <br />
            <button type="submit">Submit Note</button>
          </form>
        </div>
      </main>
      <section>
        <h2>Your Notes Here</h2>
        <div className="card-container">
          {notes.length === 0 ? (
            <p>Add a note to continue...</p>
          ) : (
            <div className="card-container">
              {notes.map((note, index) => (
                <Card
                  key={index}
                  title={note.title}
                  desc={note.desc}
                  onDelete={() => handleDelete(index)}
                />
              ))}
            </div>
          )}
        </div>

      </section>
    </>
  );
}

export default App;
