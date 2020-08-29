//import react
import React, { useState } from 'react';
//import material
import Typography from '@material-ui/core/Typography';
//import styles
import GlobalStyle from '../../styles/GlobalStyles';
//import form
import TodoForm from '../TodoForm';
//import todolist
import TodoList from '../TodoList';

export const App = () => {
	const [todos, setTodos] = useState([]);

	return (
		<>
			<GlobalStyle />
			<Typography component='h1' variant='h2'>
				Todos
			</Typography>
			<TodoForm saveTodo={console.warn} />
			<TodoList todos={todos} />
		</>
	);
};
