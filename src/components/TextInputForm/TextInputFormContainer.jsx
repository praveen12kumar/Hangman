import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {

    const navigate = useNavigate();

    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");
    const [hint, setHint] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault();
        if(value){
            navigate(`/play`, {state:{wordSelected: value, wordHint: hint}});
        }
    }

    function handleTextInputChange(event) {
        let text = event.target.value;
        text = text.toUpperCase();
        setValue(text);
    }

    function handleHintInputChange(event) {
        setHint(event.target.value);
    }

    function handleShowHideClick() {
        if (inputType === "password") {
            setInputType("text")
        } else {
            setInputType("password");
        } 
    }

    return (
        <TextInputForm 
            inputType={inputType}
            handleFormSubmit={handleFormSubmit} 
            handleTextInputChange={handleTextInputChange} 
            handleShowHideClick={handleShowHideClick}
            handleHintInputChange={handleHintInputChange}
        />
    );
}

export default TextInputFormContainer;