import React from 'react'

//Passing empty object because we will fill this later with an API call
const UserContext = React.createContext({})

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext