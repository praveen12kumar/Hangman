import TextInput from "../TextInput/TextInput"
import Button from "../Button/Button";

function TextInputForm({handleFormSubmit, handleTextInputChange}){

   

    return(
        <form onSubmit={handleFormSubmit}>
            <div className="">
                <TextInput 
                    label="Enter a word or a phrase"
                    placeholder="Enter a word or a phrase here..."
                    onChangeHandler={handleTextInputChange}
                    />
            </div>
            <div className="">
                <Button
                    type="submit"
                    styleType="primary"
                    text="Submit"
                />
            </div>
        </form>
    )
}

export default TextInputForm