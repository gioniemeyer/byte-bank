"use client";
import { Box, Divider, Typography } from "@mui/material";

interface Statement {
	type: string;
}

export default function StatementItem({ type }: Statement) {
  return (
		<Box sx={{
			width: "240px",
			height: "78px",
			display: 'flex',
			flexDirection: 'column',
			m: 2,
		}}>

			<Typography sx={{
				fontWeight: 600,
				fontSize: "13px",
				color: "var(--thirdColor)"
			}}>
				Novembro
			</Typography>

			<Box sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center'
			}}>
				<Typography sx={{
					fontWeight: 400,
					fontSize: "16px",
					color: "var(--secondaryTextColor)",
				}}>
					{type === "deposit" && 'Depósito'}
					{type === "transfer" && 'Transferência'}
				</Typography>

				<Typography sx={{
					fontWeight: 400,
					fontSize: "13px",
					color: "var(--thirdTextColor)"
				}}>
					18/11/2022
				</Typography>
			</Box>

			<Typography sx={{
				fontWeight: 600,
				fontSize: "16px",
				color: "var(--secondaryTextColor)",
			}}>
				RS 150,00
			</Typography>

			<Divider sx={{
				width: '180px',
				color: "var(--thirdTextColor)",
				mt: 1
			}}/>
		</Box>
  );
}