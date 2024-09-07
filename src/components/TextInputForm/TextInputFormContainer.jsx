import TextInputForm from "./TextInputForm"

function TextInputFormContainer(){
    function handleFormSubmit(event){
        event.preventDefault()
        console.log("Form submitted")
    }

    function handleTextInputChange(event){
        console("Text input change")
        console.log(event.target.value)
    }
    return (
    <TextInputForm
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
    />
  )
}

export default TextInputFormContainer