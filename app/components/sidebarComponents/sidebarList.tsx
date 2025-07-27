"use client";
import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import { useResponsive } from "@/app/contexts/ResponsiveContext";

export default function SidebarList() {
	const { isTablet, isDesktop } = useResponsive();
	
	const itens = ['Início', 'Transferências', 'Investimentos', 'Outros serviços'];

	const [selectedItem, setSelectedItem] = useState(0);

	const setListItemColor = (index: number) => setSelectedItem(index);

	if (isDesktop) {
		return (
			<List>
				{itens.map((text, index) => (
					<Box key={index} sx={{ textAlign: "center" }}>
						<ListItem disablePadding>
							<ListItemButton
								selected={selectedItem === index}
								onClick={() => setListItemColor(index)}
								sx={{					
									"&.Mui-selected": {
										backgroundColor: "transparent",
									},
									"&.Mui-selected:hover": {
										backgroundColor: "transparent",
									},
									"&:hover": {
										backgroundColor: "var(--background)",
									},
								}}>
								<ListItemText
									primary={
										<Typography
											fontSize={16}
											fontWeight={selectedItem === index ? 700 : 400}
											color={selectedItem === index ? "var(--thirdColor)" : "inherit"}
											textAlign="center"
											noWrap
										>
											{text}
										</Typography>
									}
								/>
							</ListItemButton>
						</ListItem>
	
						{index < itens.length - 1 && (
							<Divider sx={{
								width: '112px',
								margin: '0 auto',
							}}/>
						)}
					</Box>
				))}
			</List>
		);
	}

	if (isTablet) {
		return (
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: "600px",
					left: "60px",
					top: "32px",
				}}
			>
				{itens.map((text, index) => (
					<Box
						key={index}
						onClick={() => setListItemColor(index)}
					>
						<Typography
							sx={{
								textAlign: "center",
								fontSize: 16,
								fontWeight: selectedItem === index ? 700 : 400,
								color: selectedItem === index ? 'var(--thirdColor)' : 'var(--secondaryTextColor)',
							}}
						>
							{text}
						</Typography>

						{selectedItem === index && (
							<Box
								sx={{
									width: '112px',
									height: '1px',
									backgroundColor: 'var(--thirdColor)',
									margin: '6px auto 0 auto',
								}}
							/>
						)}
					</Box>
				))}
			</Box>
		);
	}
}