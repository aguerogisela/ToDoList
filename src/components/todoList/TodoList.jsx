import React from "react";
import {
	TextField,
	IconButton,
	List,
	ListItem,
	ListItemSecondaryAction,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
	const handleDelete = (id) => {
		console.log(`Deleting todo with id: ${id}`);
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleComplete = (id) => {
		console.log(`Completing todo with id: ${id}`);
		setTodos(
			todos
				.map((item) => {
					if (item.id === id) {
						return { ...item, completed: !item.completed };
					}
					return item;
				})
				.sort((a, b) => a.completed - b.completed)
		);
	};

	const handleEdit = (id) => {
		console.log(`Editing todo with id: ${id}`);
		const findTodo = todos.find((todo) => todo.id === id);
		setEditTodo(findTodo);
	};

	return (
		<List>
			{todos.map((todo) => (
				<ListItem
					key={todo.id}
					style={{ textDecoration: todo.completed ? "line-through" : "none" }}
				>
					<TextField
						value={todo.title}
						variant="outlined"
						onChange={(event) => event.preventDefault()}
						fullWidth
					/>
					<ListItemSecondaryAction>
						<IconButton edge="end" onClick={() => handleComplete(todo.id)}>
							<CheckCircleIcon color={todo.completed ? "primary" : "default"} />
						</IconButton>
						<IconButton edge="end" onClick={() => handleEdit(todo.id)}>
							<EditIcon />
						</IconButton>
						<IconButton edge="end" onClick={() => handleDelete(todo.id)}>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			))}
		</List>
	);
};

export default TodoList;
