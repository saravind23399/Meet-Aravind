import React from 'react'

export default function RootNavBar() {
	return (
		<nav
			className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
			style={{ background: 'black' }}
			id="mainNav"
			onLoad={window.animateNavBar}>
			<div className="container">
				<a className="navbar-brand js-scroll" href="#page-top">
					Aravind S
				</a>
				<button
					className="navbar-toggler collapsed"
					type="button"
					data-toggle="collapse"
					data-target="#navbarDefault"
					aria-controls="navbarDefault"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span></span>
					<span></span>
					<span></span>
				</button>
				<div
					className="navbar-collapse collapse justify-content-end"
					id="navbarDefault">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link js-scroll" href="#home">
								Intro
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll " href="#whoami">
								Who am I
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link js-scroll "
								href="#achievements">
								Achievements
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll " href="#myskills">
								Skills
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link js-scroll "
								href="#experiences">
								Experiences
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link js-scroll "
								href="#whatimlookingfor">
								What I'm Looking For
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
