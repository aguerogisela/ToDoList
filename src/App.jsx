import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import TodoList from "./components/todoList/TodoList";
import { Container, Paper } from "@mui/material";
import "./App.css";

const App = () => {
	const initialState = JSON.parse(localStorage.getItem("todos")) || [];
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState(initialState);
	const [editTodo, setEditTodo] = useState(null);
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);
	return (
		<Container maxWidth="sm">
			<Paper elevation={3} style={{ padding: "20px" }}>
				<Header />
				<Form
					input={input}
					setInput={setInput}
					todos={todos}
					setTodos={setTodos}
					editTodo={editTodo}
					setEditTodo={setEditTodo}
				/>
				<TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
			</Paper>
		</Container>
	);
};

export default App;
