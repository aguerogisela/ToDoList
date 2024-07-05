import React, { useState } from "react";
import { List, Box, Typography } from "@mui/material";
import TodoItem from "./TodoItem";
import DeleteModal from "./DeleteModal";
import Filter from "./filter";

const TodoList = ({
	todos,
	setTodos,
	setEditTodo,
	filter,
	handleFilterChange,
}) => {
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [todoToDelete, setTodoToDelete] = useState(null);

	const handleDelete = (id) => {
		setTodoToDelete(id);
		setDeleteModalOpen(true);
	};

	const handleConfirmDelete = () => {
		if (todoToDelete) {
			setTodos(todos.filter((todo) => todo.id !== todoToDelete));
			setDeleteModalOpen(false);
		}
	};

	const handleCancelDelete = () => {
		setDeleteModalOpen(false);
	};

	const handleComplete = (id) => {
		setTodos(
			todos.map((item) => {
				if (item.id === id) {
					return { ...item, completed: !item.completed };
				}
				return item;
			})
		);
	};

	const handleEdit = (id) => {
		const findTodo = todos.find((todo) => todo.id === id);
		setEditTodo(findTodo);
	};

	return (
		<>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				marginBottom="20px"
			>
				<Typography variant="h6">Tarea</Typography>
				<Filter filter={filter} handleFilterChange={handleFilterChange} />
			</Box>
			<List>
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						handleComplete={handleComplete}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
					/>
				))}
			</List>
			<DeleteModal
				deleteModalOpen={deleteModalOpen}
				handleConfirmDelete={handleConfirmDelete}
				handleCancelDelete={handleCancelDelete}
			/>
		</>
	);
};

export default TodoList;
