import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Twitter from "@material-ui/icons/Twitter";
import "./footer.scss"

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#BFC7ABff",
    marginBottom: "0px"
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#303338ff",
      "&hover": {
        fill: "#9493A2ff",
        fontSize: "1.8rem",
      },
    },
  },
})

const Footer = () => {
  const classes = useStyles();

        return (
            <bottomNavigation className={classes.bottomNavContainer}>
              <BottomNavigationAction href="https://linkedin.com/in/stephanie-clark-b42140225" target="_blank"  icon={<LinkedInIcon/>} className={classes.root}></BottomNavigationAction>
              <BottomNavigationAction href="https://github.com/Wickette" target="_blank" icon={<GitHubIcon/>} className={classes.root}></BottomNavigationAction>
              <BottomNavigationAction href="https://twitter.com/Stephan40815975" target="_blank" icon={<Twitter/>} className={classes.root}></BottomNavigationAction>
            </bottomNavigation>
          );
        }
      
      

export default Footer
