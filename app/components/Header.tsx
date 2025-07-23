import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "var(--primaryColor)",
        color: "var(--primaryTextColor)",
        height: "96px",
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
