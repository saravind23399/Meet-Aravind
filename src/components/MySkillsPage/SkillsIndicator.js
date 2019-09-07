import React from 'react'

export default function SkillsIndicator({
	isIconEnabled,
	icon,
	title,
	degree
}) {
	let percentage = 0
	switch (degree) {
		case 'Beginner':
			percentage = 25
			break
		case 'Intermediate':
			percentage = 65
			break
		case 'Advanced':
			percentage = 100
			break
		default:
			break
	}
	return (
		<span>
			<div className="d-flex align-items-center">
				{isIconEnabled && (
					<i className="material-icons text-white">{icon}</i>
				)}
				<span className="text-white ml-3 w-100 lead">
					{title}
					<span className="pull-right h6">{degree}</span>
				</span>
			</div>
			<div className="progress">
				<div
					className="progress-bar"
					role="progressbar"
					style={{ width: `${percentage}%` }}
					aria-valuenow={percentage}
					aria-valuemin="0"
					aria-valuemax="100"></div>
			</div>
		</span>
	)
}
