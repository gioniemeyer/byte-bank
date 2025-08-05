"use client";
import { Box, Divider, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useResponsive } from "@/app/contexts/ResponsiveContext";
import { balanceMock } from "@/app/mocks/userMock";

export default function Balance() {
  const { isMobile, isDesktop } = useResponsive();

  // Defina as posições de acordo com o dispositivo
  const positionStyles = isDesktop
    ? { top: "94px", right: "100px" }
    : isMobile
    ? { top: "48px", right: "0px" }
    : { top: "86px", right: "110px" };

  // Pegue o saldo mais recente
  const latestBalance = balanceMock[balanceMock.length - 1].balance;

  // Cor do texto/ícone/divisor
  const color = isDesktop ? "var(--secondaryColor)" : "var(--primaryTextColor)";

  return (
    <Box sx={{ position: "relative", ...positionStyles }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontWeight: 600, fontSize: "20px", color, mr: 4 }}>
          Saldo
        </Typography>
        <VisibilityIcon sx={{ color, width: "20px", height: "20px" }} />
      </Box>
      <Divider
        sx={{
          width: "180px",
          height: "16px",
          borderBottomWidth: "2px",
          borderColor: color,
        }}
      />
      <Box>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            color: "var(--primaryTextColor)",
            mt: 2,
          }}
        >
          Conta Corrente
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "32px",
            color: "var(--primaryTextColor)",
          }}
        >
          {latestBalance.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Typography>
      </Box>
    </Box>
  );
}
