import React, {useContext, useEffect, useState} from 'react';
import {useLocation, useParams, Link} from 'react-router-dom'
import axios from "axios";
import {CommentList} from "../components/post/CommentList";
import {CommentWrite} from "../components/post/CommentWrite";
import {PostDetail} from "../components/post/PostDetail";
import {LikeButton} from "../components/post/LikeButton";
import jwt_decode from 'jwt-decode'
import {Context} from "../store/Context";
import testImage from '../components/image/github-long.png'

export const Post = () => {

	const location = useLocation();

	const { id } = useParams();
	const { calculateDate } = useContext(Context);

	const [post, setPost] = useState({});
	const [likes, setLikes] = useState(0);
	const [comments, setComments] = useState([]);
	const [nickname, setNickname] = useState("");
	const [date, setDate] = useState("");

	document.title = post.title;

	useEffect(() => {
		axios.get(`http://34.215.66.235:8000/post?id=${id}`)
			.then(res => {
				setPost(res.data.writing);
				setLikes(res.data.writing.likes);
				setComments(res.data.comments);
				setDate(calculateDate(res.data.writing.date));
				if(localStorage.getItem('token')) {
					const token = localStorage.getItem('token');
					const payload = jwt_decode(token);
					setNickname(payload.nickname)
				}
			})
	}, [likes, location])

	return (
		<div id="page-wrapper">
			<PostDetail
				post={post}
				nickname={nickname}
				postId={id}
				likes={likes}
				setLikes={setLikes}
				date={date}
			/>
			<div title='해당 광고로 이동합니다.' style={{backgroundColor: "white"}}>
				<Link to='https://github.com/orgs/kit-teamcook-2023/repositories'>
					<img src={testImage} style={{margin: 'auto', display: 'block', marginBottom: '30px', width: '250px'}} alt='광고자리'/>
				</Link>
			</div>
			<CommentWrite
				postId={id}
				comments={comments}
			 	setComments={setComments}
			/>
			<CommentList
				comments={comments}
			/>
		</div>
	)
}