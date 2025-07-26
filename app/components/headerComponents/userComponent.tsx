"use client";
import { Box, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useResponsive } from "@/app/contexts/ResponsiveContext";

export default function UserComponent() {
  const { isMobile } = useResponsive();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        maxWidth: "200px",
      }}
    >
      {!isMobile && (
        <Typography
          sx={{
            fontSize: "13px",
            lineHeight: "16px",
            fontWeight: 600,
            padding: "0 10px",
          }}
        >
          User Name
        </Typography>
      )}
      <AccountCircleOutlinedIcon
        sx={{
          color: "var(--secondaryColor)",
          height: "40px",
          width: "40px",
          fontWeight: 300,
        }}
      />
    </Box>
  );
}
