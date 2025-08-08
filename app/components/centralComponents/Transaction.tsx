"use client";
import { Box, Typography } from "@mui/material";
import TransactionForm from "./transactionForm";
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import TransactionImages from "../decorativeImages/transactionImages";
import { useTransactions } from "@/app/contexts/TransactionContext";

export default function Transaction() {
  const { isMobile } = useResponsive();
  const { editingId } = useTransactions();

  return (
    <Box
      sx={{
        position: "relative",
        height: isMobile ? "655px" : "478px",
        display: "flex",
        flexDirection: "column",
        alignItems: isMobile ? "center" : "flex-start",
        justifyContent: "flex-start",
      }}
    >
      {/* Imagens decorativas */}
      <TransactionImages />

      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "25px",
          color: "var(--thirdTextColor)",
          mt: isMobile ? 4 : 3,
          ml: isMobile ? 0 : 3,
          textAlign: isMobile ? "center" : "left",
          position: "relative",
        }}
      >
        {editingId ? "Editar" : "Nova"} transação
      </Typography>

      <TransactionForm />
    </Box>
  );
}
