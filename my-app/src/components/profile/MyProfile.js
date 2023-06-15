import React, {useEffect, useRef, useState} from "react";
import './css/Profile.css'
import {faCaretDown, faPencil} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {EditName} from "./EditName";

export const MyProfile = ({name, createdDate, setName}) => {

	const options = {
		backgroundColor: '#D9534F',
		color:'white',
		marginLeft: '10px',
	}

	const [showButton, setShowButton] = useState(false);
	const [isEdit, setIsEdit] = useState(false);

	const showEditBox = () => {
		setIsEdit(true);
	}

	const calculatePassedDay = (date) => {
		const currentDate = new Date();
		const targetDate = new Date(date);

		const diff = currentDate.getTime() - targetDate.getTime();

		return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
	}

	return (
		<div className="flex-container">
			<img src="/images/profile.jpg" style={{borderRadius: '50%'}}/>
			<div className="col-lg-12" style={{marginLeft: '20px'}}>
				<div>
					<h1>
						{
							isEdit ? (
								<EditName
									name={name}
									setName={setName}
									setIsEdit={setIsEdit}
									setShowButton={setShowButton}
								/>
							) : (
								<React.Fragment>
									<span><strong>{name}</strong>님</span>
									<button
										onMouseEnter={() => setShowButton(true)}
										onMouseLeave={() => setShowButton(false)}
										onClick={showEditBox}
										type="button" className={`btn button-danger btn-circle btn-sm ${showButton ? "" : "hide-button"}`} style={options}><FontAwesomeIcon icon={faPencil} /></button>
								</React.Fragment>
							)
						}
					</h1>
				</div>
				<h1 className="content">Gpple과 <span style={{color: '#00A760'}}>{calculatePassedDay(createdDate)}</span>일째 함께하는 중!</h1>
			</div>
		</div>
	)
}