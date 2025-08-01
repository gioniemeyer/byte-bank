"use client";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import { balanceMock } from "@/app/mocks/userMock";
import { useState } from "react";

export default function Balance() {
	const { isMobile, isDesktop } = useResponsive();

	const [showBalance, setShowBalance] = useState(true);

	const latestBalance = balanceMock[balanceMock.length - 1]?.balance ?? 0;

	return (
		<Box sx={{
			position: 'relative',
			top: isDesktop ? '94px' : isMobile ? '48px' : '86px',
			right: isDesktop ? '100px' : isMobile ? '0px' : '110px',
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
				<IconButton  onClick={() => setShowBalance((prev) => !prev)}>
					{showBalance ? (
            <VisibilityIcon
              sx={{
                color: isDesktop
                  ? "var(--secondaryColor)"
                  : "var(--primaryTextColor)",
                width: "20px",
                height: "20px",
              }}
            />
          ) : (
            <VisibilityOffIcon
              sx={{
                color: isDesktop
                  ? "var(--secondaryColor)"
                  : "var(--primaryTextColor)",
                width: "20px",
                height: "20px",
              }}
            />
          )}
				</IconButton>
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
					{showBalance ? latestBalance.toLocaleString("pt-BR", {style: "currency",	currency: "BRL"}) : "••••••"}
				</Typography>
			</Box>
		</Box>
	);
}