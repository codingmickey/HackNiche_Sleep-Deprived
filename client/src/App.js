import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from './scenes/homePage';
import LoginPage from './scenes/loginPage';
import ProfilePage from './scenes/profilePage';
import JobsPage from './scenes/JobsPage';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import { Landing } from './scenes/landing/Landing';
import { Explore } from './scenes/explorePage/Explore';
import { Employer } from './scenes/EmployerPage/Employer';
import { Blog } from './scenes/BlogPage/Blog';
import { Transition } from './scenes/TransitionPage/Transition';
import { Donation } from './scenes/DonationPage/Donation';
import House from './scenes/HouseHuntPage/House';
import { Pension } from './scenes/pension/Pension';
import { Mental } from './scenes/mental/Mental';
import { Ptsd } from './scenes/mental/Ptsd';
import { Trauma } from './scenes/ptsd/Trauma';

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/employer" element={<Employer />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/map" element={<House />} />
            <Route path="/transition" element={<Transition />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/pension" element={<Pension />} />
            <Route path="/mental-health" element={<Mental />} />
            <Route path="/ptsd" element={<Trauma />} />

            <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
