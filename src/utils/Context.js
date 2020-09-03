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

	//function that read the todos
	const readTodos = () => {
		db.collection('todos').onSnapshot((Snapshot) =>
			setTodos(
				Snapshot.docs.map((doc) => ({ id: doc.id, info: doc.data().info })),
			),
		);
	};

	//function that add a todo item to data base
	const addTodo = (value) => {
		db.collection('todos').add({ info: value });
	};

	//function to delete item
	const deleteTodo = (id) => {
		db.collection('todos').doc(id).delete()
	}

	return (
		<Context.Provider value={{ addTodo, todos, deleteTodo }}>{children}</Context.Provider>
	);
};

export { ContextProvider, Context };
