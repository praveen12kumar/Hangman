import './button.css'
import getButtonStyling from './getStypeType';



const Button = ({text, type, onClickHandler, styleType="primary"}) => {
    console.log(styleType);
    
  return (
    <button className= {`${getButtonStyling(styleType)} text-white bg-blue-600 font-sans px-4 py-2 rounded`}
        onClick={onClickHandler}
        type={type}    
        >{text}</button>
  )
}



export default Button