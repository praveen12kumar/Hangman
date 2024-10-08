import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ inputType, handleFormSubmit, handleTextInputChange, handleShowHideClick, handleHintInputChange }) {
   
    return (
        <form className="w-full px-20 flex flex-col gap-8" onSubmit={handleFormSubmit}>
            <div className="w-full flex items-center justify-between">
                <TextInput 
                    type={inputType}
                    placeholder="Enter a word or phrase here ..."
                    onChangeHandler={handleTextInputChange}
                />
                <Button
                    styleType="warning"
                    text={inputType === "password" ? "Show" : "Hide"}
                    onClickHandler={handleShowHideClick}
                />
            </div>

            <div className="w-full flex items-center justify-between">
                <TextInput 
                    type={inputType}
                    placeholder="Enter word description."
                    onChangeHandler={handleHintInputChange}
                />
                <Button
                    type="submit"
                    styleType="primary"
                    text="Submit"
                />    
            </div>
        </form>
    );
}

export default TextInputForm;