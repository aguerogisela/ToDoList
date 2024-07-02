import React from "react";
import {
	Typography,
	IconButton,
	List,
	ListItem,
	ListItemSecondaryAction,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TodoList = ({
	todos,
	setTodos,
	setEditTodo,
	filter,
	handleFilterChange,
}) => {
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
		<>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				marginBottom="20px"
			>
				<Typography variant="h6">Tarea</Typography>
				<FormControl variant="outlined" size="small">
					<InputLabel id="filter-label">Filter</InputLabel>
					<Select
						labelId="filter-label"
						value={filter}
						onChange={handleFilterChange}
						label="Filter"
						className="filter-select"
					>
						<MenuItem value="all">Todas</MenuItem>
						<MenuItem value="completed">Completado</MenuItem>
						<MenuItem value="incomplete">Incompleto</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<List>
				{todos.map((todo) => (
					<ListItem
						key={todo.id}
						className="list-item"
						style={{ textDecoration: todo.completed ? "line-through" : "none" }}
					>
						<Typography variant="body1" style={{ flexGrow: 1 }}>
							{todo.title}
						</Typography>
						<ListItemSecondaryAction>
							<IconButton
								edge="end"
								onClick={() => handleComplete(todo.id)}
								size="small"
							>
								<CheckCircleIcon
									color={todo.completed ? "primary" : "default"}
								/>
							</IconButton>
							<IconButton
								edge="end"
								onClick={() => handleEdit(todo.id)}
								size="small"
							>
								<EditIcon color="action" />
							</IconButton>
							<IconButton
								edge="end"
								onClick={() => handleDelete(todo.id)}
								size="small"
							>
								<DeleteIcon color="error" />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default TodoList;
