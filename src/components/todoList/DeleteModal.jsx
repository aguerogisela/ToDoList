import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const DeleteModal = ({
	deleteModalOpen,
	handleConfirmDelete,
	handleCancelDelete,
}) => {
	return (
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
	);
};

export default DeleteModal;
