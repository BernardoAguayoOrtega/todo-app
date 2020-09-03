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

	//use effect
	React.useEffect(() => {
		readTodos();
	}, []);
	console.log(todos);

	//function that read the todos
	const readTodos = () => {
		db.collection('todos').onSnapshot((Snapshot) =>
			setTodos(Snapshot.docs.map((doc) => doc.data())),
		);
	};

	//function that add a todo item to data base
	const addTodo = (value) => {
		db.collection('todos').add({ info: value });
	};

	return <Context.Provider value={{ addTodo }}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
