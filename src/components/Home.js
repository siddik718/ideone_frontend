import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TForm from './TForm';

function TextShare() {
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post("http://127.0.0.1:8000/text/",{text});
        console.log(response.data);
        console.log(response.data.url)
        const url = response.data.url;
        navigate(`/${url}/`);
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <div>
      <TForm 
        text={text}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        btn_text="Save"
      />
    </div>
  );
}

export default TextShare;
