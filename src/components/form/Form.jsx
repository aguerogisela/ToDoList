import React, { useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm();

	const updateTodo = (title, id, completed) => {
		const newTodo = todos.map((todo) =>
			todo.id === id ? { title, id, completed } : todo
		);
		setTodos(newTodo);
		setEditTodo(null);
	};

	useEffect(() => {
		if (editTodo) {
			setValue("title", editTodo.title);
		} else {
			setValue("title", "");
		}
	}, [setValue, editTodo]);

	const onSubmit = (data) => {
		if (!editTodo) {
			setTodos([
				...todos,
				{ id: uuidv4(), title: data.title, completed: false },
			]);
			setValue("title", "");
		} else {
			updateTodo(data.title, editTodo.id, editTodo.completed);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form">
			<Box display="flex" alignItems="center" width="100%" sx={{ mb: 2 }}>
				<TextField
					{...register("title", {
						required: "Este campo es obligatorio",
						maxLength: {
							value: 15,
							message: "No puede tener más de 15 caracteres",
						},
						validate: (value) => {
							const isDuplicate = todos.some((todo) => todo.title === value);
							return !isDuplicate || "El texto ya existe";
						},
					})}
					type="text"
					placeholder="Enter a todo"
					variant="outlined"
					fullWidth
					className="todo-input"
					margin="normal"
					sx={{ m: 1 }}
					error={!!errors.title}
					helperText={errors.title ? errors.title.message : ""}
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
