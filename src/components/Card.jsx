import React from 'react'
import { MdDelete } from "react-icons/md";

function Card({ title, desc, onDelete }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <button onClick={onDelete}>
        Delete 
      </button>
    </div>
  );
}

export default Card

