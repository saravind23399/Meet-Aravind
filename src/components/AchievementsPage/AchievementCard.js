import React from 'react'

export default function AchievementCard({ children, icon, title, link }) {
	return (
		<div className="service-box">
			<div className="service-ico">
				<span className="ico-circle">
					<i className={`ion-${icon} text-dark`}></i>
				</span>
			</div>
			<div className="service-content">
				<h2 className="s-title">{title}</h2>
				<p className="text-center">
					<a href={link}>{link}</a>
				</p>
				<p className="s-description text-center">{children}</p>
			</div>
		</div>
	)
}
