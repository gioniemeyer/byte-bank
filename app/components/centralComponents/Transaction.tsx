"use client";
import { Box, Typography } from "@mui/material";
import TransactionForm from "./transactionForm";

export default function Transaction() {
  return (
		<Box>
			<Typography sx={{
				fontWeight: 700,
				fontSize: "25px",
				color: "var(--thirdTextColor)",
				mt: 3,
				ml: 3
			}}>
				Nova transação
			</Typography>

			<TransactionForm />
		</Box>
  );
}