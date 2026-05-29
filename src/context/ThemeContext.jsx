import { createContext, useEffect, useState } from "react";

export const ThemeContext=createContext();

export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState("light");

    const toggleTheme=()=>{
        if(theme==="light"){
            setTheme("dark")
        }else{
            setTheme("light");
        }
    }
    useEffect(()=>{
       const root = window.document.documentElement;

    if (theme === "dark") {
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
    }
    
    localStorage.setItem("app-theme", theme);
    },[theme])

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}