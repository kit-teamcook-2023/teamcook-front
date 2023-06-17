import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {PostWrite} from "../components/post/PostWrite";
import axios from "axios";
import {PostEdit} from "../components/post/PostEdit";

export const Edit = () => {

	document.title="글 수정하기"

	const {state} = useLocation();

	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const category = useParams();

	useEffect(() => {
		console.log(state)
		axios.get(`http://34.215.66.235:8000/post?id=${state}`)
			.then(res => {
				setTitle(res.data.writing.title);
				setBody(res.data.writing.content);
				console.log(res.data.writing.content);
			})
	}, [])

	const handleTitle = (event) => {
		setTitle(event.target.value);
	}

	return (
		<div id="page-wrapper">
			<h1 className="page-header">글 수정하기</h1>
			<textarea
				className="form-control"
				rows='1'
				style={{resize: 'none', marginTop: '50px'}}
				placeholder="제목을 작성하세요."
				value={title}
				onChange={handleTitle}
			/>
			<div style={{marginTop: '50px'}}>
				<PostEdit
					postId={state}
					title={title}
					body={body}
					setBody={setBody}
					category={category}
				/>
			</div>
		</div>
	)
}