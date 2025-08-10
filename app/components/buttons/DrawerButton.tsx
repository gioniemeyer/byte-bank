"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { useState } from "react";
import SidebarList from "../sidebar-components/SidebarList";

/** Botão utilizado para abrir o menu lateral (Drawer) na versão mobile. */
export default function DrawerButton() {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <>
      <Button onClick={toggleSidebar}>
        <MenuIcon
          sx={{
            color: "var(--secondaryColor)",
            height: "40px",
            width: "40px",
            fontWeight: 300,
          }}
        />
      </Button>

      {open && <SidebarList onClose={() => setOpen(false)} />}
    </>
  );
}
