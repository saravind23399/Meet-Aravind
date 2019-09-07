import React from 'react'

export default function IntroPage(props) {
	return (
		<div id="home" className="intro route" style={{ background: 'black' }}>
			<div className="overlay-intro"></div>
			<div className="intro-content display-table">
				<div className="table-cell">
					<div className="container">
						<div className="flex">
							<img
								src="images/profileImage.png"
								alt="Profile"
								className="rounded-circle"
								width="200"
								height="200"></img>
							<h1 className="intro-title mb-4">I am Aravind S</h1>
						</div>
						<p className="intro-subtitle">
							<span>Avid Web, Desktop and Mobile Developer</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
