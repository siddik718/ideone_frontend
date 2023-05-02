import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import TForm from './TForm';
import axios from 'axios';
function Edit() {
    const navigate = useNavigate();
    const { url } = useParams();

    const [text, setText] = useState("");

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/text/${url}`)
        .then((response)=>{
            console.log(response)
            setText(response.data.text)
        })
        .catch((error) => {
            console.error(error);
        });
    },[url]);
    function handleChange() {

    }
    function handleSubmit(event) {
        event.preventDefault();
        navigate(`/${url}/edit/`);
    }
    return (
        <div>
            <TForm 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                text={text}
                btn_text="Edit"
            />
        </div>
    )
}

export default Edit;