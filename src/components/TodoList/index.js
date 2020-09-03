//import react
import React from 'react';
//import conext
import { Context } from '../../utils/Context';
//import components from material
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = () => {
	//react use Context hook
	const { todos } = React.useContext(Context);

	return (
		<List>
			{todos.map((todo, index) => (
				<ListItem key={index.toString()} dense button>
					<Checkbox tabIndex={-1} disableRipple />
					<ListItemText primary={todo.info} />
					<ListItemSecondaryAction>
						{/*<IconButton
							aria-label='Delete'
							onClick={() => {
								deleteTodo(index);
							}}>
							<DeleteIcon />
						</IconButton>*/}
					</ListItemSecondaryAction>
				</ListItem>
			))}
		</List>
	);
};

export default TodoList;
