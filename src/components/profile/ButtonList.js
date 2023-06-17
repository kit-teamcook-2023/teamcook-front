import {Button, ButtonGroup} from "@mui/material";
import React, {useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPenToSquare, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import './css/Profile.css'

export const ButtonList = ({query, setQuery, postCount, commentCount}) => {
	const isDarkMode = localStorage.getItem("mode");

	const buttonOptions = {
		outline: 'none',
	}

	const handlePost = () => {
		setQuery("post");
	}

	const handleComment = () => {
		setQuery("comment");
	}

	const handleGas = () => {
		setQuery("gas");
	}

	return (
		<div className="flex-container row" style={{marginTop: '50px'}}>
			<button className={`${isDarkMode === "true" ? 'btn-success' : 'btn-primary'} btn col-xs-6 col-md-4 btn-lg ${query === "post" ? "active" : ""}`} onClick={handlePost} style={buttonOptions}><FontAwesomeIcon icon={faPenToSquare} style={{paddingRight: '10px'}}/>내 글({postCount})</button>
			<button className={`${isDarkMode === "true" ? 'btn-success' : 'btn-primary'} btn col-xs-6 col-md-4 btn-lg ${query === "comment" ? "active" : ""}`} onClick={handleComment} style={buttonOptions}><FontAwesomeIcon icon={faComment} style={{paddingRight: '10px'}}/>내 댓글({commentCount})</button>
			<button className={`${isDarkMode === "true" ? 'btn-success' : 'btn-primary'} btn col-xs-6 col-md-4 btn-lg ${query === "gas" ? "active" : ""}`} onClick={handleGas} style={buttonOptions}><FontAwesomeIcon icon={faCalendarDays} style={{paddingRight: '10px'}}/>월별 사용량</button>
		</div>
	)
}
