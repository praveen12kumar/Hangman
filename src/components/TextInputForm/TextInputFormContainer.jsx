import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInputForm from "./TextInputForm";
import WordContext from "../../store/WordContext";

function TextInputFormContainer() {

    const navigate = useNavigate();

    const [inputType, setInputType] = useState("password");

    const {word, setWord,hint, setHint} = useContext(WordContext);

    function handleFormSubmit(event) {
        event.preventDefault();
        if(word){
            navigate(`/play`);
        }
    }

    function handleTextInputChange(event) {
        let text = event.target.value;
        if(text === ""){
            alert("Input is Empty")
        }
        text = text.toUpperCase();
        setWord(text);
    }

    function handleHintInputChange(event) {
        let text = event.target.value;
        if(text === ""){
            alert("Input is Empty")
        }
        setHint(text);
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