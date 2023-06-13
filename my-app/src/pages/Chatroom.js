import axios from "axios";
import React, {useEffect, useRef, useState} from "react";
import Clock from 'react-live-clock';
import {useLocation, useNavigate} from "react-router-dom";
import io from "socket.io-client";
import jwt_decode from "jwt-decode";
import {Chat} from "../components/chat/Chat";

export const Chatroom = () => {

	document.title = "채팅방"

	const navigate = useNavigate();

	const {state} = useLocation();
	const [message, setMessage] = useState("");
	const [messageLen, setMessageLen] = useState(0);
	const [messageList, setMessageList] = useState([]);
	const [my, setMy] = useState(jwt_decode(localStorage.getItem('token')).uid);
	const [myName, setMyName] = useState(jwt_decode(localStorage.getItem('token')).nickname);

	let ws = useRef(null);

	const handleEnter = (e) => {
		if(e.key === "Enter")
			sendMessage()
	}

	function sendMessage() {
		if(ws.current && message !== '') {
			const date = new Date();
			const send_msg = {}
			send_msg[message] = date.toLocaleString()
			ws.current.send(JSON.stringify(send_msg))
			setMessageList([...messageList, {
				"sender": myName,
				"message": message,
				"time": date,
			}])
			setMessage("");
			setMessageLen(0);
		}
	}

	useEffect(() => {
		ws.current = new WebSocket(`ws://34.215.66.235:8000/chat/${my}/${state}`)

		async function getMessageList() {
			const res = await axios.get(`http://34.215.66.235:8000/prev-chat/${state}`, {
				headers: {
					"Authorization": "Bearer " + localStorage.getItem("token")
				}
			})

			res.data.forEach(data => {
				data.time = new Date(data.time).toLocaleString('ko-KR', {
					year: 'numeric',
					month: 'numeric',
					day: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric',
					hour12: true,
				});
			})

			setMessageList(res.data);
		}

		async function connectSocket() {
			ws.current.onopen = () => {
			}

			ws.current.onmessage = (event) => {
				const recv = JSON.parse(event.data)
				const key = Object.keys(recv)[0]

				if (key == 400) alert(recv[key]);
				else if (key == 200) return

				const sender = key
				const message = recv[key][0]
				const sendtime = recv[key][1]

				setMessageList(messageList => [...messageList, {
					"sender": sender,
					"message": message,
					"time": sendtime
				}])
			}
		}

		connectSocket();
		getMessageList();

		return () => {
			ws.current.close();
		}
	},[state])

	const handleWrite = (e) => {
		const newValue = e.target.value;
		console.log(newValue.length)
		if (newValue.length <= 200) {
		  setMessage(newValue);
		  setMessageLen(newValue.length)
		}
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
								<div className="max-message-counter">
									<p>{messageLen}/200</p>
								</div>
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
