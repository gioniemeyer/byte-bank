"use client";
import { Box, Typography } from "@mui/material";
import EditButton from "../buttons/EditButton";
import StatementItem from "./statementItem";
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import { useTransactions } from "@/app/contexts/TransactionContext";
import { useState } from "react";

export default function Statement() {
  const { isMobile, isDesktop } = useResponsive();
  const { transactions, editingId, setEditingId, deleteTransaction } =
    useTransactions();

  // Estados para modo de edição e exclusão
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  // Handlers dos botões globais
  const handleEditMode = () => {
    setEditMode((prev) => !prev);
    setDeleteMode(false);
    setEditingId(null);
  };

  const handleDeleteMode = () => {
    setDeleteMode((prev) => !prev);
    setEditMode(false);
    setEditingId(null);
  };

  // Handler do clique no item
  const handleItemClick = (id: number) => {
    if (editMode) {
      setEditingId(id);
    }
    if (deleteMode) {
      deleteTransaction(id);
    }
  };

  return (
    <Box
      sx={{
        width: isDesktop ? "282px" : isMobile ? "312px" : "600px",
        minHeight: isDesktop ? "512px" : "480px",
        height: "100%",
        mt: isDesktop ? 3 : 6,
        borderRadius: "8px",
        backgroundColor: "var(--primaryTextColor)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            m: 3,
            width: "240px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "25px",
            }}
          >
            Extrato
          </Typography>

          <Box sx={{ display: "flex" }}>
            <span onClick={handleEditMode}>
              <EditButton type="edit" editing={editMode} />
            </span>
            <span onClick={handleDeleteMode}>
              <EditButton type="delete" editing={deleteMode} />
            </span>
          </Box>
        </Box>

        {transactions.map((item) => (
          <StatementItem
            key={item.id}
            id={item.id}
            date={item.date}
            type={item.type}
            value={item.value}
            isClickable={editMode || deleteMode}
            isSelected={editingId === item.id && editMode}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </Box>
    </Box>
  );
}
