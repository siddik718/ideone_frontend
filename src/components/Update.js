import React, { useEffect, useState } from 'react'
import TForm from './TForm';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    const { url } = useParams();
    const [text,setText] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/text/${url}/`);
            setText(response.data.text);
            console.log(response.data);
        };
        fetchData();
    }, [url]);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/text/${url}/edit/`, { text });
            console.log(text);
            navigate(`/${url}/`);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };
    return (
        <TForm 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        text={text}
        btn_text="Update"
    />
  )
}

export default Update;