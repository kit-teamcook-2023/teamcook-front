import axios from "axios";
import React, {useEffect, useRef, useState} from "react";
import Clock from 'react-live-clock';
import { useLocation } from "react-router-dom";
import io from "socket.io-client";
import jwt_decode from "jwt-decode";
import {Chat} from "../components/chat/Chat";

export const Chatroom = () => {
	const {state} = useLocation();
	const [message, setMessage] = useState("");
	const [messageList, setMessageList] = useState([]);
	const [my, setMy] = useState(jwt_decode(localStorage.getItem('token')).uid);
	const [myName, setMyName] = useState(jwt_decode(localStorage.getItem('token')).nickname);

	let ws = useRef(null);

	const handleEnter = (e) => {
		if(e.key === "Enter")
			sendMessage()
	}

	async function sendMessage() {
		if(ws.current && message !== '') {
			ws.current.send(message)
			console.log("sendMessage", message);
			setMessageList([...messageList, {
				"sender": myName,
				"message": message,
				"time": new Date(),
			}])
			console.log('list', messageList)
			setMessage("");
		}
	}

	useEffect(() => {
		ws.current = new WebSocket(`ws://34.215.66.235:8000/chat/${my}/${state}`)

		console.log("state", state);
		console.log("my", my);
		console.log("myname", myName);

		async function getMessageList() {
			const res = await axios.get(`http://34.215.66.235:8000/prev-chat/${state}`, {
				headers: {
					"Authorization": "Bearer " + localStorage.getItem("token")
				}
			})
			console.log("getMessageList", res);
			setMessageList(res.data);
		}

		async function connectSocket() {
			ws.current.onopen = () => {
				console.log("connect success");
			}

			ws.current.onmessage = (event) => {
				console.log("receive message: ", event);
			}
		}

		getMessageList();
		connectSocket();

		return () => {
			ws.current.close();
		}
	},[])

	const handleWrite = (e) => {
		setMessage(e.target.value)
		console.log(e.target.value)
	}

	return (
		<div id="page-wrapper">
			<div className="row">
				<div className="col-lg-12">
					<div className="panel panel-primary">
						<div className="panel-heading text-center">
							<h3>1대1 채팅</h3>
						</div>
						<div className="panel-body">
							<div className="text-center">
								-<Clock format={'YYYY-MM-DD'} ticking={false} timezone={"Asia/Seoul"} />-
							</div>
							<Chat
								messages={messageList}
								myname={myName}
							/>
						</div>
						<div className="panel-footer">
							<div className="input-group custom-search-form">
								<input
									type="text"
									className="form-control"
									placeholder="채팅 입력"
									onChange={handleWrite}
									onKeyDown={handleEnter}
									value={message}
								/>
								<span className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={sendMessage}>
                                    보내기
                                </button>
                            </span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}