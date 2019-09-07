import React from 'react'

export default function KeyValueDisplay({ icon, title, value }) {
	return (
		<span>
			<dt className="d-flex align-items-center mt-4">
				<i className="material-icons">{icon}</i>
				<span className="ml-2">{title}</span>
			</dt>
			<dd>{value}</dd>
		</span>
	)
}
