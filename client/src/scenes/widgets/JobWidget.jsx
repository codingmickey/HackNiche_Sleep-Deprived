import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined
} from '@mui/icons-material';
import { Box, Button, Chip, Divider, IconButton, Stack, Typography, useTheme } from '@mui/material';
import FlexBetween from '../../components/FlexBetween';
import Friend from '../../components/Friend';
import WidgetWrapper from '../../components/WidgetWrapper';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPost } from '../../state';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import RestoreIcon from '@mui/icons-material/Restore';
import { useNavigate } from 'react-router-dom';

const JobWidget = ({ post }) => {
  const navigate = useNavigate();
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const handleApply = async () => {
    const response = await fetch(`http://localhost:3001/auth/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'meetp272003@gmail.com',
        subject: 'Application for the new Job',
        html: '<h1>Application for the new Job</h1><p>Hi, I am interested in the new job.</p> <p>Thanks</p><p>Name: Kartik</p><p>Phone: 9619247188</p><p>Link to the resume: https://website.com</p>'
        // attachments: ''
      })
    });
    const data = await response.json();
    console.log(data);
    const response1 = await fetch(`http://localhost:3001/auth/sms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: '+919082374694',
        body: 'New Job Alert: Hi, I am interested in the new job. Thanks Name: Kartik Phone: 9619247188, Link to the resume: https://website.com. Regards, Sainik Suvidha'
        // attachments: ''
      })
    });

    const data1 = await response1.json();
    console.log(data1);
    navigate('/success');
  };

  return (
    <WidgetWrapper m="0 0 2rem 0">
      {/* <Friend friendId={postUserId} name={name} subtitle={location} userPicturePath={userPicturePath} /> */}

      <Typography
        color={main}
        variant="h3"
        fontWeight="500"
        sx={{
          '&:hover': {
            color: palette.primary.main,
            cursor: 'pointer'
          }
        }}
      >
        {post.job.profile ? post.job.profile : '...'}
      </Typography>
      <Typography color={main}>{post.org.name ? post.org.name : '...'}</Typography>
      <Typography color={main}>{post.org.desc ? post.org.desc : '...'}</Typography>

      <Box mt="1rem"></Box>

      <Box color={main} display="flex" alignItems="start" gap="0.5rem" pb="1.1rem">
        <LocationOnIcon color={main} />
        <Typography color={main} variant="p" fontWeight="400">
          {post.job.city ? post.job.city : '...'}
        </Typography>
      </Box>

      <Box display="flex" flexDirection="row" gap="1.5rem" mb="1.5rem">
        <Box display="flex" flexDirection="column" gap="0.5rem">
          <Box color={main} display="flex" alignItems="start" gap="0.5rem">
            <PlayCircleFilledWhiteIcon color={main} />
            <Typography color={main} variant="p" fontWeight="500">
              START DATE
            </Typography>
          </Box>
          <Typography color={main} variant="p" fontWeight="400">
            Immediately
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="0.5rem">
          <Box color={main} display="flex" alignItems="start" gap="0.5rem">
            <CalendarMonthIcon color={main} />
            <Typography color={main} variant="p" fontWeight="500">
              DURATION
            </Typography>
          </Box>
          <Typography color={main} variant="p" fontWeight="400">
            {post.job.duration ? post.job.duration : '...'}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="0.5rem">
          <Box color={main} display="flex" alignItems="start" gap="0.5rem">
            <LocalAtmIcon color={main} />
            <Typography color={main} variant="p" fontWeight="500">
              CTC/STIPEND
            </Typography>
          </Box>
          <Typography color={main} variant="p" fontWeight="400">
            ₹{post.job.salary ? post.job.salary : '...'}
            /year
          </Typography>
        </Box>
      </Box>

      <Stack direction="row" spacing={1}>
        <Chip label="Today" icon={<RestoreIcon />} size="small" color="success" />
        <Chip label={post.job.type ? post.job.type : '...'} size="small" />
      </Stack>

      <Box display="flex" flexDirection="row-reverse">
        <Stack spacing={2} direction="row">
          <Button variant="text">View Details</Button>
          <Button variant="contained" onClick={handleApply}>
            Apply Now
          </Button>
        </Stack>
      </Box>

      {/* <Stack direction="row" spacing={1}>
        <Chip label="Clickable" onClick={handleClick} />
        <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      </S> */}
    </WidgetWrapper>
  );
};

export default JobWidget;
