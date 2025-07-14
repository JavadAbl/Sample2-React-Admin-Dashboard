import { Sidebar as SidebarLib, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import Sidebar_Item from "./Sidebar_Item";
import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/HomeWorkOutlined";
import GroupIcon from "@mui/icons-material/GroupOutlined";
import ContactIcon from "@mui/icons-material/ContactPageOutlined";
import FactorIcon from "@mui/icons-material/ReceiptOutlined";
import FromIcon from "@mui/icons-material/ForumOutlined";
import CalendarIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpIcon from "@mui/icons-material/HelpCenterOutlined";
import BarChartIcon from "@mui/icons-material/BarChartOutlined";
import PieChartIcon from "@mui/icons-material/PieChartOutlineOutlined";
import LineChartIcon from "@mui/icons-material/LineAxisOutlined";
import MapChartIcon from "@mui/icons-material/MapOutlined";

export default function Sidebar() {
  const [selected, setSelected] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const theme = useTheme();

  return (
    <>
      <SidebarLib rootStyles={{ borderRadius: "6rem" }} collapsed={isCollapsed}>
        <Menu
          rootStyles={{
            backgroundColor: theme.palette.background.paper,
          }}
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <Box paddingRight={isCollapsed ? undefined : "10%"}>
            <Sidebar_Item
              to={"/"}
              title={"داشبورد"}
              selected={selected}
              setSelected={setSelected}
              icon={<HomeIcon />}
            />

            <Sidebar_Item
              to={"/team"}
              title={"مدیریت تیم"}
              selected={selected}
              setSelected={setSelected}
              icon={<GroupIcon />}
            />

            <Sidebar_Item
              to={"/contact"}
              title={"اطلاعات تماس"}
              selected={selected}
              setSelected={setSelected}
              icon={<ContactIcon />}
            />

            <Sidebar_Item
              to={"/factor"}
              title={"موجودی فاکتور"}
              selected={selected}
              setSelected={setSelected}
              icon={<FactorIcon />}
            />

            <Sidebar_Item
              to={"/form"}
              title={"پروفایل"}
              selected={selected}
              setSelected={setSelected}
              icon={<FromIcon />}
            />

            <Sidebar_Item
              to={"/calendar"}
              title={"تقویم"}
              selected={selected}
              setSelected={setSelected}
              icon={<CalendarIcon />}
            />

            <Sidebar_Item
              to={"/help"}
              title={"پشتیبانی"}
              selected={selected}
              setSelected={setSelected}
              icon={<HelpIcon />}
            />

            <Sidebar_Item
              to={"/barchart"}
              title={"نمودار میله ای"}
              selected={selected}
              setSelected={setSelected}
              icon={<BarChartIcon />}
            />

            <Sidebar_Item
              to={"/piechart"}
              title={"نمودار دایره ای"}
              selected={selected}
              setSelected={setSelected}
              icon={<PieChartIcon />}
            />

            <Sidebar_Item
              to={"/linechart"}
              title={"نمودار خطی"}
              selected={selected}
              setSelected={setSelected}
              icon={<LineChartIcon />}
            />

            <Sidebar_Item
              to={"/geochart"}
              title={"نمودار جغرافیایی"}
              selected={selected}
              setSelected={setSelected}
              icon={<MapChartIcon />}
            />
          </Box>
        </Menu>
      </SidebarLib>
      ;
    </>
  );
}
