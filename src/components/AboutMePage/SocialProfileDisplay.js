import React from 'react'

export default function SocialProfileDisplay({ link, icon, title, children }) {
	return (
		<span>
			<dt className="d-flex align-items-center mt-4">
				<ion-icon name={icon}></ion-icon>
				<span className="ml-2">{title}</span>
			</dt>
			<dd>
				<a href={link} className="text-white">
					{children}
				</a>
			</dd>
		</span>
	)
}
