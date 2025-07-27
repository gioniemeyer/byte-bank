"use client";
import { Box, Typography } from "@mui/material";
import EditButton from "../buttons/EditButton";
import StatementItem from "./statementItem";
import { useResponsive } from "@/app/contexts/ResponsiveContext";

export default function Statement() {
	const { isMobile, isDesktop } = useResponsive();

  return (
		<Box sx={{
			width: isDesktop ? "282px" : isMobile ? "312px" : "600px",
			height: isDesktop ? "512px" : "480px",
			mt: isDesktop ? 3 : 6,
			ml: isDesktop ? 3 : isMobile ? 1 : -3,
			borderRadius: '8px',
			backgroundColor: "var(--primaryTextColor)",
		}}>
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}>

				<Box sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					m: 3,
					width: '240px'
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
		</Box>
		
  );
}
