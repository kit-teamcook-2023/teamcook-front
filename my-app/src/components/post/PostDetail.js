import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {LikeButton} from "./LikeButton";
import {useNavigate} from "react-router-dom";
import {Context} from "../../store/Context";

export const PostDetail = ({post, nickname, postId, likes, setLikes, date}) => {

	const navigate = useNavigate();
	const {isLogin} = useContext(Context);

	const deletePost = async () => {
		try {
			const res = await axios.delete(`http://34.215.66.235:8000/post/${postId}/${nickname}`,{
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
			navigate('/karrot')
		}
		catch(err) {
			console.log('post delete err: ', err);
		}
	}

	const editPost = async () => {
		navigate(`/edit/${postId}`, {state: postId})
	}

	const handleChat = async () => {
		navigate(`/chatroom`, {state: post.author})
	}

	return (
		<div>
			<h1>{post.title}</h1>
			<p className="font-monospace">{post.author}</p>
			<div>
				<p className="font-monospace">{date}</p>
			</div>
			<hr/>
			<div dangerouslySetInnerHTML={{ __html: post.content }} style={{minHeight: '500px'}}></div>
			<LikeButton
				postId={postId}
				likes={likes}
				setLikes={setLikes}
			/>

			{/*로그인 한 회원이면 수정/삭제 버튼 보여주기*/}
			{
				post.author === nickname ? (
					<div>
						<button className="btn btn-success" style={{color: 'black'}} onClick={editPost}>수정하기</button>
						<button className="btn btn-danger" style={{color: 'black'}} onClick={deletePost}>삭제하기</button>
					</div>

				) : (<div></div>)
			}
			{
				isLogin && post.author !== nickname ? (
					<div>
						<button className="btn btn-warning" style={{color: 'black'}} onClick={handleChat}>채팅걸기</button>
					</div>
				) : (
					<div></div>
				)
			}
			<hr/>
		</div>
	)
}