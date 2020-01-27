import React from 'react'

//Passing empty object because we will fill this later with an API call
const ThemeContext = React.createContext({})

export const ThemeProvider = ThemeContext.Provider
export const ThemeConsumer = ThemeContext.Consumer

export default ThemeContext