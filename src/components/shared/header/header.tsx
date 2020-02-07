import React, {useContext} from 'react'
import './header.css'
import LangContext from '../../../context/langContext'
import AuthContext from '../../../context/authContext'


const Header = () => {
    const { lang , switchLang, currentLangData} = useContext(LangContext)
    const { user, signOut} = useContext(AuthContext)

    const { HOME } = currentLangData

    return(
        <div>
        </div>
    )
}
export default Header