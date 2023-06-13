import {Button, ButtonGroup} from "@mui/material";
import React, {useEffect} from "react";
import './css/Profile.css'

export const ButtonList = ({query, setQuery, postCount, commentCount}) => {

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
			<button className={`btn-outline btn-primary btn col-sm-4 btn-lg ${query === "post" ? "active" : ""}`} onClick={handlePost} style={buttonOptions}>내 글({postCount})</button>
			<button className={`btn-outline btn-primary btn col-sm-4 btn-lg ${query === "comment" ? "active" : ""}`} onClick={handleComment} style={buttonOptions}>내 댓글({commentCount})</button>
			<button className={`btn-outline btn-primary btn col-sm-4 btn-lg ${query === "gas" ? "active" : ""}`} onClick={handleGas} style={buttonOptions}>가스비</button>
		</div>
	)
}
