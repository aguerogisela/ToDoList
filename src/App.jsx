// App.js
import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import TodoList from "./components/todoList/TodoList";
import { Container, Paper, Box } from "@mui/material";
import "./App.css";

const App = () => {
	const initialState = JSON.parse(localStorage.getItem("todos")) || [];
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState(initialState);
	const [editTodo, setEditTodo] = useState(null);
	const [filter, setFilter] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState(initialState);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	useEffect(() => {
		const filterTodos = () => {
			switch (filter) {
				case "completed":
					setFilteredTodos(todos.filter((todo) => todo.completed));
					break;
				case "incomplete":
					setFilteredTodos(todos.filter((todo) => !todo.completed));
					break;
				default:
					setFilteredTodos(todos);
					break;
			}
		};
		filterTodos();
	}, [todos, filter]);

	const handleFilterChange = (event) => {
		setFilter(event.target.value);
	};

	return (
		<Container maxWidth="sm" className="app-container">
			<Paper elevation={3} className="paper">
				<Header />
				<Box className="form-container">
					<Form
						input={input}
						setInput={setInput}
						todos={todos}
						setTodos={setTodos}
						editTodo={editTodo}
						setEditTodo={setEditTodo}
					/>
				</Box>
				<TodoList
					todos={filteredTodos}
					setTodos={setTodos}
					setEditTodo={setEditTodo}
					filter={filter}
					handleFilterChange={handleFilterChange}
				/>
			</Paper>
		</Container>
	);
};

export default App;
