import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {Box, Drawer, Toolbar, List, Button, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 280;

function Sidebar(props) {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', 0);
    return navigate("/");
  }

  return (
    <Box sx={{ display: 'flex'}}>
      <Drawer style={{border:"12px black solid" , backgroundColor:"black"}}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar style={{backgroundColor:"rgb(28, 37, 54)",padding:"24px"}} >
          <Button size='large' variant='outlined' style={{backgroundColor:"rgba(255, 255, 255, 0.04)", borderRadius:"8px"}}>Admin Panel</Button>
        </Toolbar>
        <Divider style={{backgroundColor:"rgb(47, 55, 70)"}}/>
        <List style={{backgroundColor: "rgb(28, 37, 54)", color:"#fff", fontWeight:"700"}}>

              <Link to={"/dashboard"}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SignalCellularAltIcon style={{color:"rgb(99, 102, 241)"}}/> 
                    </ListItemIcon>
                    <ListItemText primary={"Dashboard"} />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to={"/account"}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SupportAgentIcon style={{color:"rgb(99, 102, 241)"}}/> 
                    </ListItemIcon>
                    <ListItemText primary={"Account"} />
                  </ListItemButton>
                </ListItem>
              </Link>
              {/* <Link to={"/logout"}> */}
                <ListItem disablePadding onClick={handleLogout}>
                  <ListItemButton>
                    <ListItemIcon>
                      <LogoutIcon style={{color:"rgb(99, 102, 241)"}}/> 
                    </ListItemIcon>
                    <ListItemText primary={"Logout"} />
                  </ListItemButton>
                </ListItem>
              {/* </Link> */}
              
        </List>
        <Divider style={{backgroundColor:"rgb(47, 55, 70)"}}/>
      </Drawer>
      <Box
        component="main"
        sx={{ bgcolor: 'background.default', p: 3 }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default Sidebar;

