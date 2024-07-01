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

// TextField: Campo de entrada de texto que muestra el título de la tarea.
// IconButton: Botones para completar (CheckCircleIcon), editar (EditIcon) y eliminar (DeleteIcon) una tarea.
// handleDelete: Función para eliminar una tarea de la lista.
// handleComplete: Función para marcar una tarea como completada.
// handleEdit: (Pendiente) Función para editar una tarea.

const TodoList = ({ todos, setTodos }) => {
	const handleDelete = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleComplete = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const handleEdit = (id) => {
		// Lógica para editar el todo
	};

	return (
		<List>
			{todos.map((todo) => (
				<ListItem key={todo.id}>
					<TextField
						value={todo.title}
						variant="outlined"
						onChange={(event) => event.preventDefault()}
						fullWidth
					/>
					<ListItemSecondaryAction>
						<IconButton edge="end" onClick={() => handleComplete(todo.id)}>
							<CheckCircleIcon />
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
