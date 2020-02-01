import React, { useState, useLayoutEffect } from 'react'
import en from '../i18n/en'
import fr from '../i18n/fr'
import ar from '../i18n/ar'

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
            currentLangData: lang === 'en-SA' ? en : ar,
            switchLang
        }}>
            {props.children}
        </LangContext.Provider>
    )
}

export const LangConsumer = LangContext.Consumer
