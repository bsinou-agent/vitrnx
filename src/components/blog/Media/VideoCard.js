import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Card, CardContent, CardMedia, Typography } from 'material-ui';


const styles = theme => ({
    card: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        width: '250px',
    },
    cover: {
      width: 200,
      height: 140,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  });
  
function VideoCard(props) {
    const { classes, video, onSelect } = props;

    return (
        <div>
            <Card className={classes.card} onClick={() => onSelect(video)}>
                <CardMedia
                    className={classes.cover}
                    image={"../imgRepo/" +  video.thumb}
                    title={video.title}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="headline">{video.title}</Typography>
                        <Typography variant="subheading" color="textSecondary">{video.desc}</Typography>
                    </CardContent>
                </div>
              
            </Card>
        </div>
    );
}

export default withStyles(styles)(VideoCard);
