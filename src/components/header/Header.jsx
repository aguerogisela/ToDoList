import React from "react";
import { Typography } from "@mui/material";

// Typography de Material UI se usa para mostrar el título "TodoList" centrado y con un estilo de encabezado de nivel 2 (h2).
const Header = () => {
	return (
		<div className="header">
			<Typography variant="h2" align="center">
				TodoList
			</Typography>
		</div>
	);
};

export default Header;
