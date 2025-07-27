"use client";
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import { Box, Button, FormControl, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React from "react";

export default function TransactionForm() {
	const { isMobile } = useResponsive();
	
	const [type, setTransaction] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => setTransaction(event.target.value as string);

	return (
		<Box
			sx={{
				mt: 3,
				ml: isMobile ? 2 : 3,
				width: isMobile ? "280px" : "355px",
				display: "flex",
				alignItems: isMobile ? 'center' : 'left',
				flexDirection: "column",
				gap: 2,
			}}
		>
			<FormControl
				sx={{
					width: "100%",
					'& .MuiOutlinedInput-root': {
						height: "48px",
						backgroundColor: "var(--primaryTextColor)",
						borderRadius: "8px",
					},
				}}
			>
				<Select
					value={type}
					onChange={handleChange}
					displayEmpty
					renderValue={(selected) => {
						if (!selected) {
							return <span style={{ color: '#999' }}>Selecione o tipo de transação</span>;
						}
						return selected === "d" ? "Depósito" : "Transferência";
					}}
				>
					<MenuItem value="d">Depósito</MenuItem>
					<MenuItem value="t">Transferência</MenuItem>
				</Select>
			</FormControl>

			<Typography
				sx={{
					fontWeight: 600,
					fontSize: "16px",
					color: "var(--thirdTextColor)",
					mt: 3
				}}
			>
				Valor
			</Typography>

			<TextField
				id="outlined-basic"
				placeholder="00,00"
				variant="outlined"
				sx={{
					backgroundColor: "var(--primaryTextColor)",
					borderRadius: "8px",
					'& .MuiOutlinedInput-root': {
						height: "48px",
					},
					mb: 3,
					width: isMobile ? "144px" : "250px",
				}}
			/>

			<Button
				variant="contained"
				sx={{
					color: "var(--primaryTextColor)",
					backgroundColor: "var(--primaryColor)",
					width: isMobile ? "144px" : "250px",
					height: "48px",
					borderRadius: "8px",
					fontWeight: 600,
					fontSize: "16px",
					textTransform: "none",
				}}
			>
				Concluir transação
			</Button>
		</Box>
	);
}