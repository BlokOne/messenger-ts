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
import { memo, useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeUser } from "../../store/slices/userSlice";
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { getAuth } from 'firebase/auth';


interface Props {
  window?: () => Window;

}


const drawerWidth = 240;

export default memo(function Header(props: Props) {
  const { firstName, secondName, ChatID, HeaderChat, nameFriend } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [nameHead, setNameHead] = useState<string>(`${secondName} ${firstName}`);
  const [colorLink, setColorLink] = useState("white")
  const [colorLinkMobile, setColorLinkMobile] = useState("#0000ee")
  const dispatch = useDispatch()
  useEffect(() => {
    if (HeaderChat !== "") {
      setNameHead(`Chat with ${nameFriend}`)
    } else {
      setNameHead(`${secondName} ${firstName}`)
    }
  }, [HeaderChat, nameFriend, secondName, firstName])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  useEffect(() => {
    if (!ChatID) {
      setColorLink('#ffffff78')
      setColorLinkMobile('#000000')
    } else {
      setColorLink('white')
      setColorLinkMobile("#0000ee")
    }
  }, [ChatID])

  function exit() {
    getAuth().signOut().then(function () {
      dispatch(removeUser());
    }, function (error) {
      console.error('Sign Out Error', error);
    });


  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}
      style={{ height: "10vh" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <p style={{ textOverflow: "ellipsis" }}>
          {nameHead}
        </p>
      </Typography>
      <Divider />
      <List>
        <Button>
          <Link to={AppRoute.userList}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary='Users' />
              </ListItemButton>
            </ListItem>
          </Link>
        </Button>
        <Button
          disabled={!ChatID}
        >
          <Link to={AppRoute.chat} >
            <ListItem disablePadding
              disabled={!ChatID}>
              <ListItemButton sx={{ textAlign: 'center' }}
                style={{ color: `${colorLinkMobile}` }}>
                <ListItemText primary='Chat' /
                >
              </ListItemButton>
            </ListItem>
          </Link>
        </Button>

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
        style={{ backgroundColor: "rgb(101 119 163)" }}
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
              {nameHead}
            </p>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link to={AppRoute.userList} >
              <Button sx={{ color: '#fff' }}>
                Users
              </Button>
            </Link>
            <Button
              disabled={!ChatID}
            >
              <Link to={AppRoute.chat}
                style={{ color: `${colorLink}` }}
              >Chat room </Link>
            </Button>
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