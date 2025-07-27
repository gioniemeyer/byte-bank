"use client";
import { Box, Typography } from "@mui/material";
import Balance from "./Balance";

export default function Welcome() {
	return (
		<Box sx={{
			display: "flex",
			justifyContent: "space-between"

		}}>
			<Box>
				<Typography sx={{
					fontWeight: 600,
					fontSize: "24px",
					color: "var(--primaryTextColor)",
					mt: 3,
					ml: 3
				}}>
					Olá, username! :)
				</Typography>

				<Typography sx={{
					fontWeight: 400,
					fontSize: "14px",
					color: "var(--primaryTextColor)",
					mt: 3,
					ml: 3
				}}>
					Quinta-feira, 08/09/2024
				</Typography>
			</Box>

			<Balance/>
		</Box>
	);
}