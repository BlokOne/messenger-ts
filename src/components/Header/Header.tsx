import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { memo, useState } from 'react';
import { Avatar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeUser } from "../../store/slices/userSlice";
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { deleteUser, getAuth } from 'firebase/auth';
import { deleteDoc } from 'firebase/firestore';

interface Props {
  window?: () => Window;

}


const drawerWidth = 240;
const navItems = [{ link: 'Users', navLink: `${AppRoute.userList}` }, { link: 'Chat', navLink: `${AppRoute.chat}` }];

export default memo(function Header(props: Props) {
  const { firstName, secondName, ChatID } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function exit() {
    getAuth().signOut().then(function () {
      dispatch(removeUser());
    }, function (error) {
      console.error('Sign Out Error', error);
    });


  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <p style={{ textOverflow: "ellipsis" }}>
          {secondName} {firstName}
        </p>
      </Typography>
      <Divider />
      <List>
        <Link to={AppRoute.userList}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary='Users' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to={AppRoute.chat} >
          <ListItem disablePadding
            disabled={!ChatID}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary='Chat' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Button
          variant="text"
          style={{ color: "black" }}
          onClick={exit}
        >
          Sing Out
        </Button>
      </List>
    </Box >
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav"
        style={{ backgroundColor: "#3318df99" }}
      >
        <Toolbar
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Avatar />
            <p style={{ textOverflow: "ellipsis" }}>
              {secondName} {firstName}
            </p>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link to={AppRoute.userList} >
              <Button sx={{ color: '#fff' }}>
                Users
              </Button>
            </Link>
            <Link to={AppRoute.chat} >
              <Button sx={{ color: '#fff' }}
                disabled={!ChatID}
              >
                Chat
              </Button>
            </Link>
          </Box>
          <Button
            variant="text"
            style={{ color: "white" }}
            onClick={exit}
          >
            Sing Out
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  )
})