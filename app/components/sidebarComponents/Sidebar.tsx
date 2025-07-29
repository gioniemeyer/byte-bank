"use client";
import { Box } from "@mui/material";
import SidebarList from "./sidebarList";
import { useResponsive } from "@/app/contexts/ResponsiveContext";

export default function Sidebar() {
	const { isTablet, isDesktop } = useResponsive();
	
	if (isDesktop) {
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

	if (isTablet) {
		return (
			<Box sx={{
				display: 'flex',
				position: 'relative',
				top: "24px",
			}}>
				<SidebarList />
			</Box>
		);
	}
}