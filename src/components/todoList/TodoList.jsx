import React, { useState } from "react";
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
	Modal,
	Button,
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
						style={{
							textDecoration: todo.completed ? "line-through" : "none",
						}}
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
			<Modal
				open={deleteModalOpen}
				onClose={handleCancelDelete}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: 400,
						bgcolor: "background.paper",
						boxShadow: 24,
						p: 4,
						textAlign: "center",
					}}
				>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						¿Estás seguro que deseas eliminar esta tarea?
					</Typography>
					<Box sx={{ mt: 2 }}>
						<Button
							onClick={handleConfirmDelete}
							variant="contained"
							color="error"
						>
							Eliminar
						</Button>
						<Button
							onClick={handleCancelDelete}
							variant="contained"
							color="primary"
							sx={{ ml: 2 }}
						>
							Cancelar
						</Button>
					</Box>
				</Box>
			</Modal>
		</>
	);
};

export default TodoList;
