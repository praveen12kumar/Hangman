import getButtonStyling from "./getButtonStyling";

function Button({ text, onClickHandler, styleType = "primary", type="button" }) {

    return (
        <button
            onClick={onClickHandler}
            type={type}
            className={`px-8 py-2 ${getButtonStyling(styleType)}  text-white  font-poppins border border-zinc-300 rounded-lg`}
        >
            {text}
        </button>
    );
}


export default Button;