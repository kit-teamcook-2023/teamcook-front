import React, {useEffect, useState} from "react";
import {MyProfile} from "../components/profile/MyProfile";
import {ButtonList} from "../components/profile/ButtonList";
import {MyPostList} from "../components/profile/MyPostList";
import {MyCommentList} from "../components/profile/MyCommentList";
import {MyGasFee} from "../components/profile/MyGasFee";
import axios from "axios";

export const Profile = () => {

	const [name, setName] = useState("닉네임");
	const [date, setDate] = useState("1970-01-01T00:00:00");
	const [info, setInfo] = useState(null);
	const [query, setQuery] = useState("post");

	useEffect(() => {
		async function getInfo() {
			try {
				const res = await axios.get(`http://34.215.66.235:8000/user-info`, {
					headers: {
						"Authorization" : "Bearer " + localStorage.getItem("token")
					}
				});
				setInfo(res.data);
				setName(res.data.info[0]);
				setDate(res.data.info[1]);
			}
			catch (err) {
				console.log("profile", err);
			}
		} ;
		getInfo();
	}, [])

	return (
		<div id="page-wrapper">
			<div className="row">
				<div className="col-lg-12">
					<h1 className="page-header">내 프로필</h1>
				</div>
			</div>
				<MyProfile
					name={name}
					createdDate={date}
					setName={setName}
				/>
			<ButtonList
				query={query}
				setQuery={setQuery}
				postCount={info?.writing_count}
				commentCount={info?.comment_count}
			/>
			<div style={{marginTop: '50px'}}>
				{query === "post" && <MyPostList postCount={info?.writing_count}/>}
				{query === "comment" && <MyCommentList commentCount={info?.comment_count}/>}
				{query === "gas" && <MyGasFee />}
			</div>
		</div>
	)
}