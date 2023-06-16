import React, { useState } from 'react';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import './App.css';
import {Nav} from './components/Nav';
import FlotChart from './pages/FlotChart';
import Forms from './pages/Forms';
import PanelWeels from './pages/PanelWeels';
import Buttons from './pages/Buttons';
import Notifications from './pages/Notifications';
import Typography from './pages/Typography';
import Icons from './pages/Icons';
import Grid from './pages/Grid';
import Blank from './pages/Blank';
import {Login} from './pages/Login';
import {Post} from "./pages/Post";
import {Write} from "./pages/Write";
import {Karrot} from "./pages/Karrot";
import {GroupBuying} from "./pages/GroupBuying";
import {LifeHack} from "./pages/LifeHack";
import {ProductReview} from "./pages/ProductReview";
import {Government} from "./pages/Government";
import {KakaoLogin} from "./components/login/KakaoLogin";
import {SignUp} from "./pages/SignUp";
import {ContextProvider} from "./store/Context";
import {Chatroom} from "./pages/Chatroom";
import PrivateRoute from "./pages/PrivateRoute";
import MorrisChart from "./pages/MorrisChart";
import {NotFound} from "./pages/NotFound";
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from './components/Theme';
import {Profile} from "./pages/Profile";
import {Home} from './pages/Home'
import {DashBoard} from "./pages/Dashboard";


const GlobalStyle = createGlobalStyle`
  body, #page-wrapper, .dropdown-menu, .form-control, .pagination>li>a, .panel-footer, .chat-background, .navbar, .form-select {
    background-color: ${(props) => props.theme.bgColor};
  }

  .sidebar, .panel {
    background-color: ${(props) => props.theme.sideColor};
  }

  .pagination>li>a:hover, .pagination>li>a:focus, .table-hover>tbody>tr:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }

  .nav>li>a.dropdown-toggle:hover, .nav>li>a.dropdown-toggle:focus, .open>a {
    background-color: ${(props) => props.theme.nHoverColor};
  }

  .nav>li>a:hover, .nav>li>a:focus {
    background-color: ${(props) => props.theme.sHoverColor};
  }

  .nav>li>a, .pagination>li>a, .pagination>li>a:hover {
    color: ${(props) => props.theme.nTextColor};
  }

  a, h1, h2, h3, h5, h6, .navbar-brand, p, tr, .dropdown-menu>li>a, .navbar-default, time, .form-control, .search-input, .form-select, .form-select option {
    color: ${(props) => props.theme.textColor};
  }

  tr, .caution {
    background-color: ${(props) => props.theme.tableColor};
  }

  .your-chat-message {
    background-color: ${(props) => props.theme.yChatColor};
    border: solid ${(props) => props.theme.borderColor} 1px;
  }

  .my-chat-message {
    background-color: ${(props) => props.theme.mChatColor};
    border: solid ${(props) => props.theme.borderColor} 1px;
  }

  .ql-toolbar .ql-stroke {
    fill: none;
    stroke: ${(props) => props.theme.textColor};
  }

  .ql-toolbar .ql-fill {
    fill: ${(props) => props.theme.textColor};
    stroke: none;
  }

  .ql-toolbar .ql-picker {
    color: ${(props) => props.theme.textColor};
  }
  
  .toggle {
    width: 50px;
    height: 25px;
    border-radius: 15px;
    background-color: ${(props) => props.theme.bgColor};
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s;
    border-style: none;
  }
  
  .toggle-on {
    background-color: #000000;
  }
  
  .toggle-off {
    background-color: #99ccff;
  }
  
  .switch {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.toggleColor};
    position: relative;
    left: 0;
    transition: left 0.3s;
  }
  
  .toggle-on .switch {
    left: calc(100% - 20px);
  }

  .btn-success {
    background-color: #212121;
    border-color: #212121;
  }

  .btn-success.active, .btn-success:hover, .btn-success:focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success:hover:focus, .btn-success:focus:active{
    background-color: #000000;
    border-color: #000000;
  }

  .nav>li>a>span {
    font-size: 10px;
  }
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("mode") === "true");

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    window.localStorage.setItem("mode", String(!isDarkMode));
  }
    return (
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <div id="wrapper">
          <ContextProvider>
            <Nav toggleDarkMode={toggleDarkMode}/>
            <main role="main">
              <Routes>
                {/* 
                  특정 이상의 좋아요 개수를 가진 글들을 모은 테이블 보여줌
                  Dashboard 페이지에서 showHotboard 조건에 따라 해당 테이블을 보여줄지 보여주지 않을지 선택
                */}
                <Route path='/' element={<Home />} />

                <Route path='/login' element={<Login />} />
                <Route path='/karrot' element={<Karrot/>} />
                <Route path='/group-buying' element={<GroupBuying/>} />
                <Route path='/government' element={<Government/>} />
                <Route path='/product-review' element={<ProductReview/>} />
                <Route path='/life-hack' element={<LifeHack/>} />
                <Route path='/post/:id' element={<Post/>} />
                <Route path='/auth/kakao/callback' element={<KakaoLogin />} />


                <Route path='/morris-chart' element={MorrisChart} />
                <Route path='/typography' element={<Typography />} />
                <Route path='/flot-chart' element={<FlotChart />} />
                <Route path='/forms' element={<Forms />} />
                <Route path='/panel-weels' element={<PanelWeels />} />
                <Route path='/buttons' element={<Buttons />} />
                <Route path='/notifications' element={<Notifications />} />
                <Route path='/icons' element={<Icons />} />
                <Route path='/grid' element={<Grid />} />
                <Route path='/blank' element={<Blank />} />

                {/*<Route path='/signup' element={<SignUp />} />*/}

                {/* private route */}
                <Route path='/chatroom' element={<PrivateRoute component={<Chatroom />}/>} />
                <Route path='/:category/write' element={<PrivateRoute component={<Write />}/>} />
                <Route path='/signup' element={<PrivateRoute component={<SignUp />}/>} />
                <Route path='/profile' element={<PrivateRoute component={<Profile />} />} />
                <Route path='/dashboard' element={<PrivateRoute component={<DashBoard />}/>} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
        </ContextProvider>
        </div>
      </ThemeProvider>
    );
}

export default App;
