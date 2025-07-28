"use client";
import { Box, Typography } from "@mui/material";
import Balance from "./Balance";
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import WelcomeImages from "../decorativeImages/welcomeImages";
import { userMock } from "@/app/mocks/userMock";

export default function Welcome() {
	const { isMobile } = useResponsive();

	const date = new Date();

	const formatedDate = date.toLocaleDateString("pt-BR", {
		weekday: "long",
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});

	const formatedLetterDate = formatedDate.charAt(0).toUpperCase() + formatedDate.slice(1);
	
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
					Olá, {userMock[0].first_name}! :)
				</Typography>

				<Typography sx={{
					fontWeight: 400,
					fontSize: "14px",
					color: "var(--primaryTextColor)",
					mt: 3,
					ml: isMobile ? 0 : 3,
					textAlign: isMobile ? "center" : "left"
				}}>
					{formatedLetterDate}
				</Typography>
			</Box>

			<Balance/>
		</Box>
	);
}