import React, { useState } from "react";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import TodoList from "./components/todoList/TodoList";
import { Container, Paper } from "@mui/material";
import "./App.css";

const App = () => {
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<Container maxWidth="sm">
			<Paper elevation={3} style={{ padding: "20px" }}>
				<Header />
				<Form
					input={input}
					setInput={setInput}
					todos={todos}
					setTodos={setTodos}
				/>
				<TodoList todos={todos} setTodos={setTodos} />
			</Paper>
		</Container>
	);
};

export default App;
