import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sree Chaitanya Institute Of Technological Sciences" src="https://img.collegedekhocdn.com/media/img/institute/logo/1434463349.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute Of Technological Sciences College,Karimnagar"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                7.63 CGPA
              </Typography>
              {" — B-TECH, Computer Science And Engineering(CSE)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SR Junior College" src="https://sreducationalacademy.in/assets/img/icons/srea_brand_badge.png" />
        </ListItemAvatar>
        <ListItemText
          primary="SR Junior College,Karimnagar"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                958/1000
              </Typography>
              {" — Intermediate studies with Maths,Physics&Chemistry(MPC)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Gouthami High School" src="https://neon-creative.com/wp-content/uploads/2015/05/GEMS-Education-brand-mark-detail-1-by-Neon.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Gouthami High School,Karimnagar"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                 9.7 CGPA
              </Typography>
              {' — Secondary School Certificate(SSC),Telangana'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}