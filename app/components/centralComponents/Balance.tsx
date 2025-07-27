"use client";
import { Box, Divider, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Balance() {
	return (
		<Box sx={{
			position: 'relative',
			top: '100px',
			right: '100px',
		}}>
			<Box sx={{
				display: "flex",
				alignItems: "center"
			}}>
				<Typography sx={{
					fontWeight: 600,
					fontSize: "20px",
					color: "var(--primaryTextColor)",
					mr: 4
				}}>
					Saldo
				</Typography>
				<VisibilityIcon sx={{
					color: "var(--secondaryColor)",
					width: "20px",
					height: "20px"
				}} />
			</Box>
				<Divider sx={{
					width: "180px",
					height: "16px",
					borderBottomWidth: '2px',
					borderColor: "var(--secondaryColor)", 
				}} />
			<Box>
				<Typography sx={{
					fontWeight: 400,
					fontSize: "16px",
					color: "var(--primaryTextColor)",
					mt: 2
				}}>
					Conta Corrente
				</Typography>
				<Typography sx={{
					fontWeight: 400,
					fontSize: "32px",
					color: "var(--primaryTextColor)",
				}}>
					R$ 2.500,00
				</Typography>
			</Box>
		</Box>
	);
}