function getButtonStyling(styleType){
    if(styleType === 'primary'){
        return "bg-blue-600"
    }
    else if(styleType === 'secondary'){
        return "bg-orange-600"
    }
    else if(styleType === 'success'){
        return "bg-green-600"
    }
    else if(styleType === 'danger'){
        return "bg-red-600"
    }
    else if(styleType === 'warning'){
        return "bg-yellow-600"
    }
       }

export default getButtonStyling;