"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

export default function DrawerButton() {
  return (
    <Button>
      <MenuIcon
        sx={{
          color: "var(--secondaryColor)",
          height: "40px",
          width: "40px",
          fontWeight: 300,
        }}
      />
    </Button>
  );
}
