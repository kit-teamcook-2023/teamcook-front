import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import './css/Profile.css'

export const EditName = ({name, setName, setIsEdit}) => {

	const exitEditBox = () => {
		setIsEdit(false);
		setIsDuplicate(false);
	}

	useEffect(() => {
		setTempName(name);
	}, [name])

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.focus();
			moveCursorToEnd(textareaRef.current);
		}
	}, [])

	const moveCursorToEnd = (element) => {
		const length = element.value.length;
		element.setSelectionRange(length, length);
	};

	const [tempName, setTempName] = useState(name);
	const [isDuplicate, setIsDuplicate] = useState(false);
	const textareaRef = useRef(null);

	const postChangeName = async () => {
		try {
			const res = await axios.put(`http://34.215.66.235:8000/user-info`, {
				"nickname": tempName
			}, {
				headers: {
					"Authorization": "Bearer " + localStorage.getItem('token')
				}
			});

			if(res.status === 226) {
				setIsDuplicate(true);
				return;
			}

			const token = res.data.access_token;
			console.log(token);
			localStorage.setItem("token", token);
			setName(tempName);
			exitEditBox();
		}
		catch (err) {
			console.log("name change err", err);
		}
	}

	const handleWrite = (e) => {
		if(isDuplicate)
			setIsDuplicate(false);
		setTempName(e.target.value);
	}

	const handleKeyDown = (e) => {
		if(e.key === "Enter")
			clickChange();
		else if (e.key === "Escape")
			clickCancel();
	}

	const clickChange = () => {
		postChangeName();
	}

	const clickCancel = () => {
		setTempName(name);
		exitEditBox()
	}

	return (
		<div>
			<div className="row">
				<div className="col-sm-8">
					<textarea
						ref={textareaRef}
						className="form-control"
						style={{resize: 'none'}}
						value={tempName}
						rows={1}
						onChange={handleWrite}
						onKeyDown={handleKeyDown}
						maxLength={20}
					/>
				</div>
				<div className="col-sm-1">
					<button className="btn btn-primary" onClick={clickChange}>변경</button>
				</div>
				<div className="col-sm-1">
					<button className="btn btn-danger" onClick={clickCancel}>취소</button>
				</div>
			</div>
			<div>
				{
					isDuplicate && <p className="error">{tempName}은 중복된 이름입니다.</p>
				}
			</div>
		</div>
	)
}