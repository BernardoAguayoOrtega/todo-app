//import react
import React from 'react';
//create context
const Context = React.createContext();

//crete functional component Provider
const ContextProvider = ({ children }) => {
	return <Context.Provider value='this is a test'>{children}</Context.Provider>;
};

export { ContextProvider, Context };
