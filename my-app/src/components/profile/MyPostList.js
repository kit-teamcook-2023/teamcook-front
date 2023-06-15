import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import './css/Profile.css'
import {useState} from "react";
import axios from "axios";
import {CircularProgress} from "@mui/material";

export const MyPostList = ({postCount}) => {

	const [posts, setPosts] = useState([])
	const [page, setPage] = useState(0);

	const changeLang = (category) => {
		if(category === "karrot")
			return "중고거래";
		else if(category === "group-buying")
			return "공동구매";
		else if(category === "product-review")
			return "물품리뷰";
		else if(category === "government")
			return "정부정책";
		else if(category === "life-hack")
			return "생활꿀팁";
	}

	useEffect(() => {
		axios.get(`http://34.215.66.235:8000/user-posts?page=${page}`, {
			headers: {
				"Authorization" : "Bearer " + localStorage.getItem("token")
			}
		})
			.then(res => {
				setPosts(res.data);
			})
	}, [page])

	const handleLoadMore = () => {
		setPage(page + 1);
	}

	return (
		<div>
			{
				posts.length > 0 ? (
					posts.map((post) => (
						<div key={post.id} className="panel panel-default">
							<Link to={`/post/${post.id}`} className="link">
								<div style={{padding: '5px'}}>
									<p className="title"><span>({changeLang(post.board)}) </span>{post.title}</p>
									<p>좋아요 수 <span className="like-font">{post.like}</span> · 댓글 개수 <span className="like-font">{post.comments}</span></p>
									<p>작성일 {new Date(post.date).toLocaleString()}</p>
								</div>
							</Link>
						</div>
					))) : (
						Array(10).fill().map((_, index) => (
							<div key={index} className="panel panel-default" style={{textAlign: 'center', height: '120px', position: 'relative'}}>

							</div>
						))
					)
			}
			{
				postCount > (page + 1) * 20 ? (
					<div>
						<button className="btn btn-primary flex-button" onClick={handleLoadMore}>글 목록 더 보기</button>
					</div>
				) : (
					<React.Fragment></React.Fragment>
				)
			}
		</div>
	)
}