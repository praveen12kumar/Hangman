
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";
import Button from "../components/Button/Button";
function StartGame(){
    return(
        <div className="w-full h-screen bg-slate-800 flex flex-col justify-center items-center relative">
            <div className="w-1/2 h-1/2 bg-slate-500 flex flex-col justify-center items-center rounded-xl gap-5">
            <h1 className="text-5xl text-slate-200 font-poppins font-semibold">Start Game</h1>
            
            <TextInputFormContainer/>

            </div>
            
           <div className="absolute top-10 left-10">
            <Button
                text={"Back"}
                onClickHandler={() => window.history.back()}
                type="button"
                styleType="secondary"
            />
           </div>
        
        </div>
    )
}

export default StartGame;