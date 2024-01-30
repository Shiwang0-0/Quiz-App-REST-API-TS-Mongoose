import React from "react";
import "./error.css";

export const getResponseError=(error)=>{
    if((error===null)||(error===undefined))
    {
        return null;
    }
    if(error && error.response)
    {
        console.log("Error Response:", error.response);
        if(error.response.status===422 && error.response.data)
        {
           const responseError=error.response.data;
           if(responseError)
           {
            const errorData={};
           
           for(const errorItem of responseError)
           {
            errorData[errorItem.field]=errorItem.msg;
           }
           return errorData;
        }
        
        }
        return null;
    }
}

export const Error=(error)=>{
    return(
        <div className="errorMsg">{error.message}</div>
    );
}  

export default getResponseError