import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import GitHubIcon from '@mui/icons-material/GitHub';
import project1 from "../../../images/TeachThruTalk.PNG"
import project2 from "../../../images/happeningWeather.png"
import project3 from "../../../images/Muscles&Meals.PNG"
import project4 from "../../../images/noteTaker.PNG"
import project5 from "../../../images/work-dayScheduler.png"
import project6 from "../../../images/Tech_Blog.PNG"


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#0E2C2Fff",
    height: "100vh",
  },
  cardContainer: {
    marginTop: "100px",
    maxWidth: "345px",
    maxHeight: "400px",
    margin: "1rem auto"
  },
  btn: {
    textDecoration: "none",
  }
})) 

const projects = [
  {
    title: "TeachThruTalk (team project)",
    description:"A messenger style app created to help people around the world converse and learn lanaguages",
    image: project1,
    link: "https://teach-through-talk.herokuapp.com/",
    github: "https://github.com/FilipAlH/TeachThruTalk.git"
},
{
    title: "happeningWeather App",
    description:"An app created using OpenWeather API to dynamically grab weather info from around the world",
    image: project2,
    link: "https://wickette.github.io/HappeningWeather/",
    github: "https://github.com/Wickette/HappeningWeather.git"
},
{
    title: "Work-Day Scheduler",
    description:"An app created using Moment.js to schedule your day based on the current time",
    image: project5,
    link: "https://wickette.github.io/Daily_Work_Scheduler/",
    github: "https://github.com/Wickette/Daily_Work_Scheduler.git"
},
{
    title: "Basic Note Taker",
    description:"A basic note taker app using Node.js and Express.js to add, update and delete notes",
    image: project4,
    link: "https://vast-ravine-20794.herokuapp.com/",
    github: "https://github.com/Wickette/newNoteTaker.git"
},
{
    title: "Muscles&Meals (team project)",
    description:"An app created to help users pick new exercises and find new meal ideas based on calories",
    image: project3,
    link: "https://wickette.github.io/V_A_S_T/",
    github: "https://github.com/Wickette/V_A_S_T.git"
},
{
    title: "Tech Blog",
    description:"A messenger style app display blog posts and comments, with user authentication",
    image: project6,
    link: "https://dry-fortress-24774.herokuapp.com/",
    github: "https://github.com/Wickette/Tech_Blog.git"
}
]

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <a href={project.link} target="_blank">
                <CardMedia component="img"
                alt="Project 1"
                height="140"
                image={project.image}
                />
                </a>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button href={project.github} target="_blank" variant="contained" startIcon={<GitHubIcon />}>
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
