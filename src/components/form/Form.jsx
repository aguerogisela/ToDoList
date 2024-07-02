import React, { useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
	const updateTodo = (title, id, completed) => {
		const newTodo = todos.map((todo) =>
			todo.id === id ? { title, id, completed } : todo
		);
		setTodos(newTodo);
		setEditTodo(null); // Cambiado a null
	};

	useEffect(() => {
		if (editTodo) {
			setInput(editTodo.title);
		} else {
			setInput("");
		}
	}, [setInput, editTodo]);

	const onInputChange = (event) => {
		setInput(event.target.value);
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		if (!editTodo) {
			setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
			setInput("");
		} else {
			updateTodo(input, editTodo.id, editTodo.completed);
		}
	};

	return (
		<form onSubmit={onFormSubmit} className="form">
			<Box display="flex" alignItems="center" width="100%" sx={{ mb: 2 }}>
				<TextField
					type="text"
					placeholder="Enter a todo"
					variant="outlined"
					value={input}
					required
					onChange={onInputChange}
					fullWidth
					className="todo-input"
					margin="normal"
					sx={{ m: 1 }}
				/>
				<Button
					variant="contained"
					color="primary"
					type="submit"
					className="add-button"
				>
					{editTodo ? "OK" : "Add"}
				</Button>
			</Box>
		</form>
	);
};

export default Form;
