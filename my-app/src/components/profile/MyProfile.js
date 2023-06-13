import React, {useEffect, useState} from "react";
import './css/Profile.css'
import {faCaretDown, faPencil} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const MyProfile = ({name, createdDate, setName}) => {

	const options = {
		backgroundColor: '#D9534F',
		color:'white',
		marginLeft: '10px',
	}

	const [showButton, setShowButton] = useState(false);

	return (
		<div className="flex-container">
			<img src="/images/profile.jpg" style={{borderRadius: '50%'}}/>
			<div className="col-lg-12" style={{marginLeft: '20px'}}>
				<div>
					<h1>
						닉네임 · <span>{name}</span>
						<button
							onMouseEnter={() => setShowButton(true)}
							onMouseLeave={() => setShowButton(false)}
							onClick={changeName}
							type="button" className={`btn button-danger btn-circle btn-sm ${showButton ? "" : "hide-button"}`} style={options}><FontAwesomeIcon icon={faPencil} /></button>
					</h1>
				</div>
				<h1>생성일 · <span>{new Date(createdDate).toLocaleString()}</span></h1>
			</div>
		</div>
	)
}