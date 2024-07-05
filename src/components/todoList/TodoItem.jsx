import React from "react";
import {
	ListItem,
	ListItemSecondaryAction,
	IconButton,
	Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TodoItem = ({ todo, handleComplete, handleEdit, handleDelete }) => {
	return (
		<ListItem
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
					<CheckCircleIcon color={todo.completed ? "primary" : "default"} />
				</IconButton>
				<IconButton edge="end" onClick={() => handleEdit(todo.id)} size="small">
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
	);
};

export default TodoItem;
