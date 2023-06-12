import React, {Component, useContext, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faCaretDown,
  faAngleRight,
  faBell,
  faComment,
  faScroll,
  faUser,
  faGear,
  faSignOut,
  faSearch,
  faWonSign,
  faChartColumn,
  faTable,
  faSignIn, faUserGroup, faBook, faThumbsUp, faBullhorn
} from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import {Context} from "../store/Context";
import jwt_decode from "jwt-decode";
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';
import {faCamera} from "@fortawesome/free-solid-svg-icons/faCamera";

export const Nav = ({isDarkMode, toggleDarkMode}) => {

    const navigate = useNavigate();
    const {isLogin, logout} = useContext(Context);
    const chats = localStorage.getItem("chat");
    const comments = localStorage.getItem("comment");

    useEffect(() => {

    }, [chats, comments])

    return (
        <nav className="navbar navbar-default navbar-static-top" style={{marginBottom: 0}}>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">네비게이션 토글</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          {
            !localStorage.getItem("mode") || localStorage.getItem("mode") === 'false' ? (
            <Link to='/' className="navbar-brand" style={{padding: '0'}}><img src="/images/apple-light.png" alt="logo"/></Link> )
                : (
            <Link to='/' className="navbar-brand" style={{padding: '0'}}><img src="/images/apple-dark.png" alt="logo"/></Link> )
          }
        </div>
        {/* <!-- /.navbar-header --> */}

        <ul className="nav navbar-top-links navbar-right">
          <li>
            <button type="button" onClick={toggleDarkMode} isdarkmode={isDarkMode}>{isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}</button>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#!">
              <FontAwesomeIcon icon={faEnvelope} /> <FontAwesomeIcon icon={faCaretDown} />
            </a>
            <ul className="dropdown-menu dropdown-messages">
              {
                chats !== null && localStorage.getItem('token') ? (
                  Object.entries(JSON.parse(chats)).map((chat) => {
                  const my = jwt_decode(localStorage.getItem('token')).uid;
                  const id = chat[0].split("-");
                  const you = my === id[0] ? id[1] : id[0];
  
                  return (
                    <React.Fragment>
                    <li>
                    <Link to={`/chatroom`} state={you}>
                        <FontAwesomeIcon icon={faComment}/> {chat[0].length > 10 ? chat[0].slice(0, 10) + '...' : chat[0]} : 새로운 채팅
                        <span className="pull-right text-muted small">{chat[1][1]}</span>
                    </Link>
                    </li>
                    <div className="divider"></div>
                    </React.Fragment>
                  )})) : (
                    <React.Fragment>
                      <li>
                        <Link>
                          <FontAwesomeIcon icon={faComment}/> 채팅 알림 없음
                        </Link>
                      </li>
                      <div className="divider"></div>
                    </React.Fragment>
                )
              }
            </ul>
            {/* <!-- /.dropdown-messages --> */}
          </li>
          {/* <!-- /.dropdown --> */}
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#!">
              <FontAwesomeIcon icon={faBell} /> <FontAwesomeIcon icon={faCaretDown} />
            </a>
            <ul className="dropdown-menu dropdown-alerts">
              {
                comments !== null && localStorage.getItem('token') ? (
                Object.entries(JSON.parse(comments)).map((key, idx) => {
                  return (
                    <React.Fragment>
                      <li>
                        <Link to={`/post/${key[0]}`}>
                          <span><FontAwesomeIcon icon={faScroll}/> {key[1][0].length > 5 ? key[1][0].slice(0, 5) + '...' : key[1][0]} : 새로운 댓글</span>
                          <span className="pull-right text-muted small">{key[1][1]}</span>
                        </Link>
                      </li>
                      <div className="divider"></div>
                    </React.Fragment>
                  )})) : (
                      <React.Fragment>
                        <li>
                          <Link>
                            <FontAwesomeIcon icon={faScroll}/> 댓글 알림 없음
                          </Link>
                        </li>
                        <div className="divider"></div>
                      </React.Fragment>
                )
              }
            </ul>
            {/* <!-- /.dropdown-alerts --> */}
          </li>
          {/* <!-- /.dropdown --> */}
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#!">
            <FontAwesomeIcon icon={faUser} /> <FontAwesomeIcon icon={faCaretDown} />
            </a>
            <ul className="dropdown-menu dropdown-user">
              {
                isLogin ? (
                    <React.Fragment>
                      <li><a href="#!"><FontAwesomeIcon icon={faUser} /> 내 프로필</a></li>
                      <li><a href="/settings"><FontAwesomeIcon icon={faGear} /> 설정</a></li>
                      <li className="divider"></li>
                      <Link to='/' onClick={logout}><FontAwesomeIcon icon={faSignOut} /> 로그아웃</Link>
                    </React.Fragment>
                ) : (
                    <div style={{textAlign: 'center', cursor: 'pointer'}} onClick={() => navigate('/login')}>
                      <li><FontAwesomeIcon icon={faSignIn} /> 로그인</li>
                    </div>
                )
              }
            </ul>
            {/* <!-- /.dropdown-user --> */}
          </li>
          {/* <!-- /.dropdown --> */}




          
        </ul>
        {/* <!-- /.navbar-top-links --> */}
            <div className="navbar-default sidebar" role="navigation">
              <div className="sidebar-nav navbar-collapse">
                <ul className="nav" id="side-menu">
                  <li className="sidebar-search">
                    <div className="input-group custom-search-form">
                      <input type="text" className="form-control" placeholder="검색어를 입력하세요" />
                      <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                    <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </span>
                    </div>
                    {/* <!-- /input-group --> */}
                  </li>
                  <li>
                    <Link to='/dashboard'><FontAwesomeIcon icon={faWonSign} /> 실시간 요금</Link>
                  </li>
                  <li>
                    <a href="#!"><FontAwesomeIcon icon={faChartColumn} /> 월별 사용량</a>
                  </li>
                  <li>
                    <Link to='/karrot'><FontAwesomeIcon icon={faBook} /> 중고 거래</Link>
                  </li>
                  <li>
                    <Link to='/group-buying'><FontAwesomeIcon icon={faUserGroup} /> 공동 구매</Link>
                  </li>
                  <li>
                    <Link to='/product-review'><FontAwesomeIcon icon={faCamera} /> 물품 리뷰</Link>
                  </li>
                  <li>
                    <Link to='/government'><FontAwesomeIcon icon={faBullhorn} /> 정부 정책</Link>
                  </li>
                  <li>
                    <Link to='/life-hack'><FontAwesomeIcon icon={faThumbsUp} /> 생활 꿀팁</Link>
                  </li>
                </ul>
              </div>
              {/* <!-- /.sidebar-collapse --> */}
            </div>
        {/* <!-- /.navbar-static-side --> */}
      </nav>
    );
}
