
import React from 'react';


export const MyContext = React.createContext(  
   null
);

interface Props 
{
    children: React.ReactNode;
}

export const MyContextProvider:React.FC<Props> =(props) =>
{
    const [username, setUsername] = React.useState("lemoncode");
    const [usernameApi, setUsernameApi] = React.useState("");
    return(
        <MyContext.Provider value={{value1:[username,setUsername],value2:[usernameApi,setUsernameApi]}}>
            {props.children}
        </MyContext.Provider>
    )
}
