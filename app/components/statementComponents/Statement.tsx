"use client";
import { Box, Typography } from "@mui/material";
import EditButton from "../buttons/EditButton";
import StatementItem from "./statementItem";
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import { statementMock } from "@/app/mocks/statementMock";

export default function Statement() {
	const { isMobile, isDesktop } = useResponsive();

  return (
		<Box sx={{
			width: isDesktop ? "282px" : isMobile ? "312px" : "600px",
			minHeight: isDesktop ? "512px" : "480px",
			height: "100%",			
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

				{statementMock.map(item => (
					<StatementItem 
						key={item.id}
						date={item.date}
						type={item.type}
						value={item.value}
					/>
				))}
			</Box>
		</Box>
		
  );
}
