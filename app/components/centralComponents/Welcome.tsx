"use client";
import { Box, Typography } from "@mui/material";
import Balance from "./Balance";
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import WelcomeImages from "../decorativeImages/welcomeImages";

export default function Welcome() {
	const { isMobile } = useResponsive();
	
	return (
		<Box sx={{
			display: "flex",
			flexDirection: isMobile ? "column" : "row",
			justifyContent: "space-between",
			alignItems: isMobile ? "center" : "left"
		}}>
			<WelcomeImages />
			<Box>
				<Typography sx={{
					fontWeight: 600,
					fontSize: "24px",
					color: "var(--primaryTextColor)",
					mt: 3,
					ml: isMobile ? 0 : 3,
					textWrap: "nowrap",
					textAlign: isMobile ? "center" : "left"
				}}>
					Olá, username! :)
				</Typography>

				<Typography sx={{
					fontWeight: 400,
					fontSize: "14px",
					color: "var(--primaryTextColor)",
					mt: 3,
					ml: isMobile ? 0 : 3,
					textAlign: isMobile ? "center" : "left"
				}}>
					Quinta-feira, 08/09/2024
				</Typography>
			</Box>

			<Balance/>
		</Box>
	);
}