import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SkillsList from './SkillsList';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
    container: {
        maxWidth: '1920px',
        margin: 'auto'
    },
    paperWrapper: {
        background: '#e6e6e6',
        boxShadow: 'none',
        paddingTop: 50,
        paddingBottom: 0
    },
    paper: {
        background: '#e6e6e6',
        boxShadow: 'none',
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'left'
        }
    },
    paper2: {
        background: '#e6e6e6',
        boxShadow: 'none',
        padding: theme.spacing.unit * 2,
        textAlign: 'center'
    },
    paperExpansion: {
        '&:before': {
            height: 0
        }
    },
    typographyTitle: {
        marginLeft: 75,
        [theme.breakpoints.down('sm')]: {
            margin: 'auto'
        }
    },
    typographyP1: {
        marginTop: 50,
        marginLeft: 75,
        [theme.breakpoints.down('sm')]: {
            marginTop: 50,
            marginLeft: 'auto'
        }
    },
    typographyP2: {
        marginTop: 50,
        marginLeft: 75,
        [theme.breakpoints.down('sm')]: {
            marginTop: 50,
            marginLeft: 'auto',
            marginBottom: 50
        }
    },
    typographyTitle2: {
        textDecoration: 'underline'
    },
    skillsList: {
        marginTop: 50
    }
})

export const About = (props) => {
    const { classes } = props;

    return (
        <Paper className={classes.paperWrapper} square={true}>
            <Grid classes={{container: classes.container}} container>
                <Grid item xs={12} md={8}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.typographyTitle} variant='h2'>
                            About:
                        </Typography>
                        <Typography className={classes.typographyP1} variant='display1'>
                            Hi I'm Zane, a React focused Front-End Developer. I relocated here from Oklahoma for better career opportunities and I've been studying 
                            ever since. Outside of development I enjoy cooking new things and bantering with friends.
                            Learning is my passion and programming has been the best outlet I could have found, always looking for that next answer, practicing that
                            new library, or sifting through documentation for better understanding.
                        </Typography>
                        <Typography className={classes.typographyP2} variant='display1'>
                            Highly focused and always ready for a new challenge, I keep going till the job is done and I'm satisfied with the results. Taking pride
                            in my work no matter the project. Developing always leads to problem-solving, and problem-solving is the most interactive way to learn.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper2}>
                        <Typography id='skill-text' className={classes.typographyTitle2} variant='h2'>
                            Skills
                        </Typography>
                        <div className={classes.skillsList}>
                            <SkillsList />
                            <ExpansionPanel classes={{root: classes.paperExpansion}} style={{marginTop: '0px', background: 'none', boxShadow: 'none', border: 'none', outline: 'none'}}>
                                <ExpansionPanelSummary style={{borderTop: 'none'}}  expandIcon={<ExpandMoreIcon />}>              
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography style={{ textAlign: 'center', margin: 'auto' }} variant='h5'>
                                        Others: <br />
                                        NPM, Yarn, Jest, Enzyme, Firebase, and Thunk
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default withStyles(styles)(About);

// Done 
// (maybe better about section after review)