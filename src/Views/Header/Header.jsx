import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import { useThemeContext } from "../../Context/ThemeContext";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Header() {
  const { colors, palette } = useTheme();
  const { toggleTheme } = useThemeContext();

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
          <NotificationsIcon />
        </IconButton>

        <IconButton>
          <PersonIcon />
        </IconButton>

        <IconButton>
          <SettingsIcon />
        </IconButton>

        <IconButton onClick={toggleTheme}>
          {palette.mode !== "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Box>
    </Box>
  );
}
