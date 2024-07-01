import React from "react";
import { TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

// onInputChange: Función para manejar cambios en el campo de entrada.
// onFormSumbit: Función para manejar el envío del formulario, creando una nueva tarea con un ID único (uuidv4).
const Form = ({ input, setInput, todos, setTodos }) => {
	const onInputChange = (event) => {
		setInput(event.target.value);
	};

	const onFormSumbit = (event) => {
		event.preventDefault();
		setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
		setInput("");
	};

	return (
		<form onSubmit={onFormSumbit}>
			<TextField
				type="text"
				placeholder="Enter a todo"
				variant="outlined"
				value={input}
				required
				onChange={onInputChange}
				fullWidth
			/>
			<Button
				variant="contained"
				color="primary"
				type="submit"
				style={{ marginTop: "10px" }}
				fullWidth
			>
				Add
			</Button>
		</form>
	);
};

export default Form;
