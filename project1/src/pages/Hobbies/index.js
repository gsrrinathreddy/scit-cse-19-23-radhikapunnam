import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://kahedu.edu.in/n/wp-content/uploads/2021/05/Impact-Of-Reading-Books-On-Your-Mental-Health-990x500.jpg',
    title: 'Reading Books',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://docklinemagazine.com/wp-content/uploads/2022/01/gardening-as-a-hobby.jpg',
    title: 'Gardening',
    
  },
  {
    img: 'https://www.opensesame.com/wp-content/uploads/2018/12/COTW-Hobby.jpg',
    title: 'Exploring new technology',
    
  },
  {
    img: 'https://www.youramazingplaces.com/wp-content/uploads/2018/10/puppy-3688871_1280-620x413.jpg',
    title: 'Photography',
    
    cols: 2,
  },
  {
    img: 'https://www.sharetopros.com/blog/images/from-hobby-to-business-how-to-make-money-from-listening-to-music/from-hobby-to-business-how-to-make-money-from-listening-to-music-img-cover-1.webp',
    title: 'Listening music',
    
    cols: 2,
  }
   
];