"use client";
import { Box, Typography } from "@mui/material";
import TransactionForm from "./transactionForm";
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import TransactionImages from "../decorativeImages/transactionImages";

export default function Transaction() {
	const { isMobile } = useResponsive();
	
  return (
		<Box>
			<TransactionImages />

			<Typography sx={{
				fontWeight: 700,
				fontSize: "25px",
				color: "var(--thirdTextColor)",
				mt: isMobile ? 4 : 3,
				ml: isMobile ? 0 : 3,
				textAlign: isMobile ? 'center' : 'left',
				position: 'relative',
			}}>
				Nova transação
			</Typography>

			<TransactionForm />
		</Box>
  );
}