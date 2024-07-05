import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Filter = ({ filter, handleFilterChange }) => {
	return (
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
	);
};

export default Filter;
