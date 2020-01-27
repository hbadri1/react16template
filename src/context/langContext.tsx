import React, { useState, useLayoutEffect } from 'react'

interface IContextProps {
    lang: string,
    currentLangData: any,
    switchLang: () => void
}

//Passing empty object because we will fill this later with an API call
const LangContext = React.createContext({} as IContextProps)

export default LangContext

export const LangProvider = (props: any) => {
    const [lang, setLang] = useState(window.localStorage.getItem('appUILang') || window.navigator.language)

    useLayoutEffect(()=>{
        const currentLang = window.localStorage.getItem('appUILang')
        if(currentLang){
            setLang(currentLang)
        }
    },[lang])

    const switchLang = () => {
        const newLang = lang === 'en-SA' ? 'ar-SA' : 'en-SA'
        setLang(newLang)
        window.localStorage.setItem('appUILang', newLang)
      };

    return(
        <LangContext.Provider value={{
            lang,
            currentLangData: langData[lang],
            switchLang
        }}>
            {props.children}
        </LangContext.Provider>
    )
}
const langData: any = {
    'en-SA': {
        HOME: 'Home',
        LANG: 'Language'
    },
    'fr-SA': {
        HOME: 'Principale',
        LANG: 'Langue'
    },
    'ar-SA': {
        HOME: 'الرئيسية',
        LANG: 'اللغة'
    }
}
export const LangConsumer = LangContext.Consumer
