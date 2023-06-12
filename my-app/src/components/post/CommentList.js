
import React, {useContext, useEffect} from "react";
import {Context} from "../../store/Context";

export const CommentList = ({comments}) => {

	const { calculateDate } = useContext(Context)

	useEffect(() => {

	}, [comments])

	return (
		<div className="w-100">
			{
				comments.map(item => (
<<<<<<< HEAD
					<div key={item.id} style={{backgroundColor: '#F8F8F8'}}>
=======
					<div>
>>>>>>> 044065e79951400a69812d6dfa299aa29ae8559c
						<p style={{margin: '10px'}}>{item.author}</p>
						<p style={{margin: '10px'}}>{item.content}</p>
						<p style={{margin: '10px'}}>{calculateDate(item.date)}</p>
						<hr/>
					</div>
				))
			}
		</div>
	)
}