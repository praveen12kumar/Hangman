function TextInput({ type = "text",  placeholder = "Enter your input here", onChangeHandler }) {

    return (
            <input 
                type={type}
                className="w-full px-4 py-2 font-poppins font-medium outline-none rounded-md "
                placeholder={placeholder}
                onChange={onChangeHandler}
            />

    )
}

export default TextInput;