//import react
import React, { useState } from 'react';
//import material
import Typography from '@material-ui/core/Typography';
//import styles
import GlobalStyle from '../../styles/GlobalStyles';
import { Container } from './styles';
//import form
import TodoForm from '../TodoForm';
//import todolist
import TodoList from '../TodoList';

export const App = () => {
	const [todos, setTodos] = useState([]);

	return (
		<Container>
			<GlobalStyle />
			<Typography component='h1' variant='h2'>
				Todos
			</Typography>
			<TodoForm
				saveTodo={(todoText) => {
					const trimmedText = todoText.trim();

					if (trimmedText.length > 0) {
						setTodos([...todos, trimmedText]);
					}
				}}
			/>
			<TodoList 
				todos={todos} 
				deleteTodo={(todoIndex) => {
					const newTodos = todos.filter((_, index) => index !== todoIndex);
			
					setTodos(newTodos);
				}}
				/>
		</Container>
	);
};