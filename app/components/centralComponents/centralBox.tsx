import { Box } from "@mui/material";

interface CentralBoxProps {
  bgColor: string;
	height: string;
}

export default function CentralBox({ bgColor, height }: CentralBoxProps) {
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

			</Box>
		
    );
}