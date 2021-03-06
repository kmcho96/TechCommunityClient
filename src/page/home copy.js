import React from "react"
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem,CssBaseline,Drawer,Box,AppBar,Toolbar,List,Typography,Divider,IconButton,Badge,Link,Avatar,Chip} from '@material-ui/core';

import Files from './Landing/side/files';
import Members from './Landing/side/members';
import Temlpate from './Landing/side/template';
import Grabage from './Landing/side/garbage';
import Main from './Landing/side/main';

import ReplayIcon from '@material-ui/icons/Replay';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LayersIcon from '@material-ui/icons/Layers';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FolderOpenRoundedIcon from '@material-ui/icons/FolderOpenRounded';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link component='a' color="inherit" href="https://www.kitech.re.kr/main/">
        KITECH
      </Link>{' & '}
      <Link component='a' color="inherit" href="https://www.uxidstudio.com/">
        UCID
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 160;

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minWidth: 1340,
    minHeight: 753.75,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: "#ffffff",
  },

  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    backgroundColor: "#ffffff",
    ...theme.mixins.toolbar,
  },

  toolbarDiv:{
    mariginTop: "5%",
    height:"90%"
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    backgroundColor: "#cacfdb"
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    color : "#232426",
    fontWeight : "Bold",
  },
  drawerPaper: {
    backgroundColor: '#f7f8fa',
    height: "100%",
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    backgroundColor: '#f7f8fa',
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,

  content: {
    height:"1024",
    flexGrow: 1,
    overflow: 'auto',
    backgroundColor: "#ffffff"
  },

  container: {
    marginTop:150,
    width:"auto",
    overflow: 'auto',
  },
  
  paper: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },

  sidepaper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fbfcfe'
  },

  schedheight:{
    height: 360,
  },
  memoheight:{
    height: 260,
  },
  fixedHeight: {
    height: 300,
  },
  new:{
    width:"100%",
    height:"100%",
  },
  menuIcon:{
    backgroundColor:"#ffffff",
    color:"#6a6d74",
    boxShadow: "0 2px 14px -6px #a4a9b3"
  }
}));

export default function App() {
  const classes = styles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightSidePaper = clsx(classes.sidepaper, classes.fixedHeight);

  return (
    <React.Fragment>
      <Box className={classes.root}>
        
        <CssBaseline />
        <AppBar position="absolute" elevation={1} className={clsx(classes.appBar, open && classes.appBarShift)} >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" noWrap className={classes.title}>
              협업지원플랫폼
            </Typography>

            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <Avatar className={classes.menuIcon}>
                  <NotificationsIcon />
                </Avatar>
              </Badge>
            </IconButton>

            <Divider variant="middle" orientation="vertical" flexItem />

            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography color="textSecondary" variant="button" noWrap>
              사용자명
            </Typography>
        
            
            <Divider variant="middle" orientation="vertical" flexItem />

            <Chip
              variant="outlined"
              label="지식공유 플랫폼"
              color="primary"
              clickable
              component="a"
              href="https://video-platform-93f91.firebaseapp.com"
              icon={<ArrowForwardIosIcon/>}
            />

          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List style={{marginTop:45}}>
            <ListItem button component="a" href="/home"> 
              <ListItemIcon>
                <Avatar className={classes.menuIcon}>
                  <ReplayIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="처음으로" style={{color:'#6a6d74'}}/>
            </ListItem>
            <ListItem button component="a" href="/home/members"> 
              <ListItemIcon>
                <Avatar className={classes.menuIcon}>
                  <PeopleAltTwoToneIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="팀 관리" style={{color:'#6a6d74'}}/>
            </ListItem>
            <ListItem button component="a" href="/home/files">
              <ListItemIcon>
                <Avatar className={classes.menuIcon}>
                  <FolderOpenRoundedIcon/>
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="자료실" style={{color:'#6a6d74'}}/>
            </ListItem>
            <ListItem button>
              <ListItemIcon component="a" href="/home/template">
                <Avatar className={classes.menuIcon}>
                  <LayersIcon/>
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="템플릿" style={{color:'#6a6d74'}}/>
            </ListItem>
            <ListItem button component="a" href="/home/garbage">
              <ListItemIcon>
                <Avatar className={classes.menuIcon}>
                  <DeleteForeverIcon/>
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="휴지통" style={{color:'#6a6d74'}}/>
            </ListItem>
          </List>
        </Drawer>
        

        <Box className={classes.content}>
          <div className={classes.appBarSpacer}/>
          <div>
          <Router>
            <Switch>
              <Route exact path="/home" component={Main}/>
              <Route path="/home/members" component={Members}/>
              <Route path="/home/files" component={Files}/>
              <Route path="/home/template" component={Temlpate}/>
              <Route path="/home/garbage" component={Grabage}/>
            </Switch>
          </Router>
          </div>
          <Box className={classes.container}>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Box>
        </Box>
        
      </Box>
    </React.Fragment>
  );
}

