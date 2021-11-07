import React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { stringToColor } from "../../util/utility";

function Header() {
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function stringAvatar(name) {
    return {
      sx: {
        backgroundColor: stringToColor(name),
        cursor: "pointer",
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <div className="Header">
      <AppBar position="static" sx={{ backgroundColor: "#f6f9fc", width: "100%"}}>
        <Toolbar sx={{ justifyContent: "flex-end", width: "100%" }}>
          {auth && (
            <div>
              <Avatar {...stringAvatar("Martin Alemajoh")} onClick={handleMenu} />
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem sx={{ fontSize: "1.5rem" }} onClick={handleClose}>
                  Profile
                </MenuItem>
                <MenuItem sx={{ fontSize: "1.5rem" }} onClick={handleClose}>
                  My account
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
