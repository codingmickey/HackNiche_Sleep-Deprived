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

const JobWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId: loggedInUserId })
    });
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
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
        Operations
      </Typography>
      <Typography color={main}>ClearTax</Typography>

      <Box mt="1rem"></Box>

      <Box color={main} display="flex" alignItems="start" gap="0.5rem" pb="1.1rem">
        <LocationOnIcon color={main} />
        <Typography color={main} variant="p" fontWeight="400">
          Mumbai
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
            6 months
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
            ₹15,000 /month
          </Typography>
        </Box>
      </Box>

      <Stack direction="row" spacing={1}>
        <Chip label="Today" icon={<RestoreIcon />} size="small" color="success" />
        <Chip label="Internship" size="small" />
      </Stack>

      <Box display="flex" flexDirection="row-reverse">
        <Stack spacing={2} direction="row">
          <Button variant="text">View Details</Button>
          <Button variant="contained">Apply Now</Button>
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
