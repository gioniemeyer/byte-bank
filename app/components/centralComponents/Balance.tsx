"use client";
import { Box, Divider, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import { balanceMock } from "@/app/mocks/userMock";

export default function Balance() {
	const { isMobile, isDesktop } = useResponsive();

	return (
		<Box sx={{
			position: 'relative',
			top: isDesktop ? '100px' : isMobile ? '50px' : '100px',
			right: isDesktop ? '100px' : isMobile ? '0px' : '50px',
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
					color: isDesktop ? "var(--secondaryColor)" : "var(--primaryTextColor)",
					width: "20px",
					height: "20px"
				}} />
			</Box>
				<Divider sx={{
					width: "180px",
					height: "16px",
					borderBottomWidth: '2px',
					borderColor: isDesktop ? "var(--secondaryColor)" : "var(--primaryTextColor)", 
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
					{balanceMock[balanceMock.length - 1].balance.toLocaleString("pt-BR", {
						style: "currency",
						currency: "BRL",
					})}
				</Typography>
			</Box>
		</Box>
	);
}