import React from 'react'
import {Link} from "react-router-dom";
import './css/Profile.css'
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";

export const MyCommentList = ({commentCount}) => {

	const [comments, setComments] = useState([])
	const [page, setPage] = useState(0);

	useEffect(() => {
		axios.get(`http://34.215.66.235:8000/user-comments?page=${page}`, {
			headers: {
				"Authorization" : "Bearer " + localStorage.getItem("token")
			}
		})
			.then(res => {
				setComments([...comments, ...res.data]);
			})
	}, [page])

	const handleLoadMore = () => {
		setPage(page + 1);
	}

	return (
		<div>
			{
				comments.map((comment, index) => (
					<div key={index} className="panel panel-default">
						<Link to={`/post/${comment.postId}`} className="link">
							<div style={{padding: '5px'}}>
								<p className="content">{comment.comment}</p>
								<p className="like-font">{comment.title}<span>에 남긴 댓글</span></p>
								<p>작성일 {new Date(comment.date).toLocaleDateString()}</p>
							</div>
						</Link>
					</div>
				))
			}
			{
				commentCount > (page + 1) * 20 ? (
					<div>
						<button className="btn btn-primary flex-button" onClick={handleLoadMore}>댓글 목록 더 보기</button>
					</div>
				) : (
					<React.Fragment></React.Fragment>
				)
			}
		</div>
	)
}