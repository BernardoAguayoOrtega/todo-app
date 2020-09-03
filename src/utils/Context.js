//import react
import React from 'react';
//import the db
import { db } from './firebase';
//create context
const Context = React.createContext();

//crete functional component Provider
const ContextProvider = ({ children }) => {
	//use state hook
	const [todos, setTodos] = React.useState([]);

	console.log(todos);

	const addTodo = (value) => {
		db.collection('todos').add({ info: value });
	};

	return <Context.Provider value={{addTodo}}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
