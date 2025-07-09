import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";

export default function Header() {
  const { colors, palette } = useTheme();

  return (
    <Box display={"flex"} justifyContent={"space-between"} p={2}>
      <Box
        display={"flex"}
        sx={{ backgroundColor: colors.background[300] }}
        borderRadius={2}
      >
        <InputBase sx={{ flex: 1, ml: 1, px: 1 }} placeholder="جستجو" />

        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>

      <Box display={"flex"}>
        <IconButton>
          {palette.mode !== "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>

        <IconButton></IconButton>

        <IconButton></IconButton>

        <IconButton></IconButton>
      </Box>
    </Box>
  );
}
