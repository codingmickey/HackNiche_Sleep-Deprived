import React, { useState } from 'react';
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  MenuList,
  FormControl,
  useTheme,
  useMediaQuery,
  ListItemIcon,
  ListItemText
} from '@mui/material';
// import Menu from '@mui/material/Menu';
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
  Print,
  Save,
  Share,
  Google
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setMode, setLogout } from '../../state';
import { Link, useNavigate } from 'react-router-dom';
import FlexBetween from '../../components/FlexBetween';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Navbar1 = () => {
  const [support, setSupport] = useState(false);
  const [community, setCommunity] = useState(false);
  const [pension, setPension] = useState(false);
  const handleSupport = () => {
    setSupport(!support);
    setCommunity(false);
    setPension(false);
  };
  const handleCommunity = () => {
    setCommunity(!community);
    setSupport(false);
    setPension(false);
  };
  const handlePension = () => {
    setSupport(!support);
    setCommunity(false);
    setSupport(false);
  };

  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  // const fullName = `${user.firstName} ${user.lastName}`;
  const fullName = 'Meet Patel';

  return (
    <FlexBetween padding="1rem 4%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography fontWeight="bold" color="primary" onClick={() => navigate('/home')}>
          <span className="text-center cursor-pointer text-[1.8rem] tracking-wider text-orange">
            सैनिक सुविधा
            {/* <div className="text-xs">Sainik Suvidha</div> */}
          </span>
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween backgroundColor={neutralLight} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <Link to="/jobs">
            <Typography sx={{ paddingLeft: '20px' }} variant="h5">
              Job
            </Typography>
          </Link>
          {/* <Link to="/"> */}
          <span className="cursor-pointer relative flex">
            <Typography variant="h5" onClick={handleSupport}>
              Support
            </Typography>
            {support ? (
              <KeyboardArrowUpIcon onClick={handleSupport} />
            ) : (
              <KeyboardArrowDownIcon onClick={handleSupport} />
            )}
            <div
              className={`bg-white w-32 tracking-wider text-[1rem] top-5 my-2 rounded border-gray-300 border-[0.09rem] ${
                support ? 'absolute' : 'hidden'
              }`}
            >
              <div
                className="font-sans cursor-pointer hover:bg-slate-50 px-2 py-1 mt-1"
                onClick={() => navigate('/house-hunt')}
              >
                House Hunt
              </div>
              <div
                className="font-sans cursor-pointer hover:bg-slate-50 px-2 py-1 mt-1"
                onClick={() => navigate('/transition')}
              >
                Transition
              </div>
              <div
                className="font-sans cursor-pointer hover:bg-slate-50 px-2 py-1 mt-1 mb-1"
                onClick={() => navigate('/mental-health')}
              >
                Mental Health
              </div>
              <div
                className="font-sans cursor-pointer hover:bg-slate-50 px-2 py-1 mt-1 mb-1"
                onClick={() => navigate('/donation')}
              >
                Donation
              </div>
            </div>
          </span>
          <span className="cursor-pointer relative flex">
            <Typography variant="h5" onClick={handleCommunity}>
              Community
            </Typography>
            {community ? (
              <KeyboardArrowUpIcon onClick={handleCommunity} />
            ) : (
              <KeyboardArrowDownIcon onClick={handleCommunity} />
            )}
            <div
              className={`bg-white w-32 tracking-wider text-[1rem] top-5 my-2 rounded border-gray-300 border-[0.09rem] ${
                community ? 'absolute' : 'hidden'
              }`}
            >
              <div className="font-sans cursor-pointer hover:bg-slate-50 px-2 py-1 mt-1">Meets</div>
              <div
                className="font-sans cursor-pointer hover:bg-slate-50 px-2 py-1 mt-1 mb-1"
                onClick={() => navigate('/blog')}
              >
                Blogs
              </div>
              <div
                className="font-sans cursor-pointer hover:bg-slate-50 px-2 py-1 mt-1 mb-1"
                onClick={() => navigate('/blog-create')}
              >
                Create Blog
              </div>
              {/* <div className="font-sans cursor-pointer hover:bg-slate-50 px-2 py-1 mt-1 mb-1">
                
              </div> */}
            </div>
          </span>
          <Link to="/pension">
            <Typography variant="h5">Pension</Typography>
          </Link>
          <FontSize />
          {/* </Link> */}
          {/* <Link to="/">
            <Typography variant="h5">Community</Typography>
          </Link> */}
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'dark' ? (
              <DarkMode sx={{ fontSize: '25px' }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: '25px' }} />
            )}
          </IconButton>
          <Translate />
          {/* <Message sx={{ fontSize: '25px' }} />
          <Notifications sx={{ fontSize: '25px' }} />
          <Help sx={{ fontSize: '25px' }} /> */}
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: '150px',
                borderRadius: '0.25rem',
                p: '0.25rem 1rem',
                '& .MuiSvgIcon-root': {
                  pr: '0.25rem',
                  width: '3rem'
                },
                '& .MuiSelect-select:focus': {
                  backgroundColor: neutralLight
                }
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="3rem">
            <IconButton onClick={() => dispatch(setMode())} sx={{ fontSize: '25px' }}>
              {theme.palette.mode === 'dark' ? (
                <DarkMode sx={{ fontSize: '25px' }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: '25px' }} />
              )}
            </IconButton>

            {/* <Message sx={{ fontSize: '25px' }} /> */}
            {/* <Notifications sx={{ fontSize: '25px' }} /> */}
            {/* <Help sx={{ fontSize: '25px' }} /> */}
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: '150px',
                  borderRadius: '0.25rem',
                  p: '0.25rem 1rem',
                  '& .MuiSvgIcon-root': {
                    pr: '0.25rem',
                    width: '3rem'
                  },
                  '& .MuiSelect-select:focus': {
                    backgroundColor: neutralLight
                  }
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar1;
