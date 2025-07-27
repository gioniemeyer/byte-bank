"use client";
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface EditButton {
	type: string;
}

export default function EditButton({ type }: EditButton) {
  return (
		<IconButton sx={{
			backgroundColor: 'var(--primaryColor)',
			color: "var(--primaryTextColor)",
			width: '40px',
			height: '40px',
			mr: 1,
			borderRadius: '50%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			'&:hover': {
				backgroundColor: 'var(--primaryTextColor)',
				color: "var(--primaryColor)",
			},
		}}>
			{type === "edit" && <EditIcon sx={{ fontSize: 20 }} />}
			{type === "delete" && <DeleteIcon sx={{ fontSize: 20 }} />}
		</IconButton>
  );
}
