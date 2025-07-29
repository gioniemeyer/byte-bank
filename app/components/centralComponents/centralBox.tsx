'use client';
import { Box } from "@mui/material";
import Welcome from "./Welcome";
import Transaction from "./Transaction";
import { useResponsive } from "@/app/contexts/ResponsiveContext";

interface CentralBoxProps {
  bgColor: string;
	height: string;
	content: string;
}

export default function CentralBox({ bgColor, height, content }: CentralBoxProps) {
	const { isTablet, isMobile, isDesktop } = useResponsive();
	
	return (
		<Box sx={{
			width: isDesktop ? "690px" : isTablet ? "600px" : "312px",
			height: isMobile ? "655px" : height,
			position: 'relative',
			top: isDesktop ? "24px" : "48px",
			mb: 3,
			ml: isDesktop ? 3 : 0,
			borderRadius: '8px',
			backgroundColor: bgColor,
		}}>

			{content === "welcome" && <Welcome />}
			{content === "transaction" && <Transaction />}
		</Box>
	);
}