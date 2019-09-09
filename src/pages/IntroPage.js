import React from 'react'

export default function IntroPage(props) {
	return (
		<div className="intro route" style={{ background: 'black' }}>
			<div className="overlay-intro"></div>
			<div className="intro-content display-table">
				<div className="table-cell">
					<div className="container">
						<div className="flex">
							<img
								src="images/profileImage.png"
								alt="Profile"
								className="rounded-circle intro-img-shadow"
								width="200"
								height="200"></img>
							<h1 className=" display-2 text-white mb-4">
								Meet Aravind!
							</h1>
						</div>
						<p className="lead font-size-30">
							<span>Avid Web, Desktop and Mobile Developer</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
