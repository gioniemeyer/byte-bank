"use client";
import { Box } from "@mui/material";
import SidebarList from "./sidebarList";

export default function Sidebar() {
	return (
		<Box sx={{
			width: "180px",
			height: "904px",
			position: 'relative',
			top: "24px",
			borderRadius: '8px',
			backgroundColor: "var(--primaryTextColor)",
		}}>
			<SidebarList />
		</Box>
	);
}