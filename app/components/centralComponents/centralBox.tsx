import { Box } from "@mui/material";
import Welcome from "./Welcome";
import Transaction from "./Transaction";

interface CentralBoxProps {
  bgColor: string;
	height: string;
	content: string;
}

export default function CentralBox({ bgColor, height, content }: CentralBoxProps) {
    return (
			<Box sx={{
				width: "690px",
				height: height,
				position: 'relative',
				top: "24px",
				left: "24px",
				mb: 3,
				borderRadius: '8px',
				backgroundColor: bgColor,
			}}>

				{content === "welcome" && <Welcome />}
				{content === "transaction" && <Transaction />}
			</Box>
    );
}