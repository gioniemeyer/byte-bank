"use client";
import { Box, Typography } from "@mui/material";
import EditButton from "../buttons/EditButton";
import StatementItem from "./statementItem";

export default function Statement() {
  return (
		<Box sx={{
			width: "282px",
			height: "512px",
			position: 'relative',
			top: "24px",
			ml: 6,
			borderRadius: '8px',
			backgroundColor: "var(--primaryTextColor)",
		}}>
			<Box sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				m: 3
			}}>
				<Typography 
					sx={{ 
						fontWeight: 700, 
						fontSize: "25px" 
					}}
				>
					Extrato
				</Typography>
				
				<Box sx={{ display: 'flex' }}>
					<EditButton type="edit"/>
					<EditButton type="delete"/>
				</Box>
			</Box>

			<StatementItem type="deposit"></StatementItem>
			<StatementItem type="transfer"></StatementItem>
		</Box>
		
  );
}
