"use client";
import { Box, Divider, Typography } from "@mui/material";
import { StatementItemInterface } from "@/app/mocks/statementMock";

export default function StatementItem({ date, type, value }: StatementItemInterface) {
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
				{new Date(date).toLocaleDateString("pt-BR", { month: "long" }).replace(/^./, str => str.toUpperCase())}
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
					{type}
				</Typography>

				<Typography sx={{
					fontWeight: 400,
					fontSize: "13px",
					color: "var(--thirdTextColor)"
				}}>
					{new Date(date).toLocaleDateString("pt-BR", {
						day: "2-digit",
						month: "2-digit",
						year: "numeric",
					})}
				</Typography>
			</Box>

			<Typography sx={{
				fontWeight: 600,
				fontSize: "16px",
				color: "var(--secondaryTextColor)",
			}}>
				{(type === "Transferência" ? -value : value).toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				})}
			</Typography>

			<Divider sx={{
				width: '180px',
				color: "var(--thirdTextColor)",
				mt: 1
			}}/>
		</Box>
  );
}