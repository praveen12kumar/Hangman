
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";
function StartGame(){
    return(
        <div className="w-full h-screen bg-slate-800 flex flex-col justify-center items-center">
            <div className="w-1/2 h-1/2 bg-slate-500 flex flex-col justify-center items-center rounded-xl gap-5">
            <h1 className="text-5xl text-slate-200 font-poppins font-semibold">Start Game</h1>
            
            <TextInputFormContainer/>

            </div>
           
        
        </div>
    )
}

export default StartGame;