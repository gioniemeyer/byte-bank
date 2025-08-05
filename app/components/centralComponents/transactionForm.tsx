"use client";
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import type { SxProps, Theme } from "@mui/material";

export default function TransactionForm() {
  const { isMobile, isDesktop } = useResponsive();

  const [type, setTransaction] = React.useState("");

  const handleChange = (event: SelectChangeEvent) =>
    setTransaction(event.target.value as string);

  // Responsividade do container principal
  let sx: SxProps<Theme>;
  if (isDesktop) {
    sx = {
      mt: 3,
      ml: 3,
      width: "355px",
      display: "flex",
      alignItems: "left",
      flexDirection: "column",
      gap: 2,
    };
  } else if (isMobile) {
    sx = {
      mt: 3,
      ml: 2,
      width: "280px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: 2,
    };
  } else {
    // Tablet
    sx = {
      mt: 3,
      ml: isMobile ? 2 : 3,
      width: "355px",
      display: "flex",
      alignItems: "left",
      flexDirection: "column",
      gap: 2,
    };
  }

  return (
    <Box sx={sx}>
      <FormControl
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            height: "48px",
            backgroundColor: "var(--primaryTextColor)",
            borderRadius: "8px",
          },
        }}
      >
        <Select
          value={type}
          onChange={handleChange}
          displayEmpty
          renderValue={(selected) => {
            if (!selected) {
              return (
                <span style={{ color: "#999" }}>
                  Selecione o tipo de transação
                </span>
              );
            }
            return selected === "d" ? "Depósito" : "Transferência";
          }}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--primaryColor)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--primaryColor)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--primaryColor)",
              borderWidth: "1px",
            },
          }}
        >
          <MenuItem
            value="d"
            sx={{
              "&:hover, &.Mui-selected, &.Mui-selected:hover": {
                backgroundColor: "var(--background)",
              },
            }}
          >
            Depósito
          </MenuItem>
          <MenuItem
            value="t"
            sx={{
              "&:hover, &.Mui-selected, &.Mui-selected:hover": {
                backgroundColor: "var(--background)",
              },
            }}
          >
            Transferência
          </MenuItem>
        </Select>
      </FormControl>

      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "16px",
          color: "var(--thirdTextColor)",
          mt: 3,
        }}
      >
        Valor
      </Typography>

      <TextField
        id="outlined-basic"
        placeholder="00,00"
        variant="outlined"
        sx={{
          backgroundColor: "var(--primaryTextColor)",
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            height: "48px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--primaryColor)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--primaryColor)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--primaryColor)",
              borderWidth: "1px",
            },
          },
          mb: 2,
          width: isMobile ? "144px" : "250px",
        }}
      />

      <Button
        variant="contained"
        sx={{
          color: "var(--primaryTextColor)",
          backgroundColor: "var(--primaryColor)",
          width: isMobile ? "144px" : "250px",
          height: "48px",
          borderRadius: "8px",
          fontWeight: 600,
          fontSize: "16px",
          textTransform: "none",
        }}
      >
        Concluir transação
      </Button>
    </Box>
  );
}
