"use client";
import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useState } from "react";

export default function Sidebar() {
	const itens = ['Início', 'Transferências', 'Investimentos', 'Outros serviços'];

	const [selectedItem, setSelectedItem] = useState(0);

	const setListItemColor = (index: number) => setSelectedItem(index);

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