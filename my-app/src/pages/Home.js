import React, {Component, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWonSign, faPercent } from '@fortawesome/free-solid-svg-icons';
import {HotBoard} from "../components/hotboard/HotBoard";
import {ExpectCost} from "../components/home/ExpectCost";
import {Context} from "../store/Context";
import '../components/home/graph.css'
import {useNavigate} from "react-router-dom";

export const Home = () => {
    document.title="대시 보드"

    const navigate = useNavigate();

    return (
        <div id="page-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">이번달 예상 가스비</h1>
            </div>
          </div>
          <div>
              {
                  localStorage.getItem('token') ? <ExpectCost /> : <button type="button" className="btn btn-lg graph-hidden" onClick={() => navigate('/login')}>로그인 하면 보여요</button>
              }
          </div>
          <HotBoard />
        </div>
    );
}
