import { Typography } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function Sidebar_Item({
  title,
  selected,
  setSelected,
  to,
  icon,
}) {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography paddingRight={"0.25rem"}>{title}</Typography>
      <Link to={to}></Link>
    </MenuItem>
  );
}
