import React from 'react';
import './style.css';
function TForm({ handleSubmit, handleChange, text, btn_text }) {
  return (
    <div className="container">
      <nav>
        <h1>IDEOne</h1>
      </nav>
      <form onSubmit={handleSubmit}>
        <textarea
          className="textarea"
          value={text}
          onChange={handleChange}
          placeholder="Enter your text here"
        />
        <button type="submit" className="button">
          {btn_text}
        </button>
      </form>
    </div>
  )
}

export default TForm;