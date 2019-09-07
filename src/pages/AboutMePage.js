import React from 'react'
import KeyValueDisplay from '../components/AboutMePage/KeyValueDisplay'

export default function AboutMePage(props) {
	return (
		<div id="whoami" className="container">
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
					<h3 className="intro-title text-white">Profile</h3>
					<hr />
					<div className="row">
						<div className="col">
							<dl>
								<KeyValueDisplay
									title="Name"
									value="Aravind S"
									icon="account_circle"
								/>
							</dl>
							<dl>
								<KeyValueDisplay
									title="Email"
									value="saravind23399@gmail.com"
									icon="account_circle"
								/>
							</dl>
						</div>
						<div className="col">
							<dl>
								<KeyValueDisplay
									title="Location"
									value="Madurai, Tamil Nadu"
									icon="near_me"
								/>
							</dl>
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-md-12 col-lg-8 col-xl-8"></div>
			</div>
		</div>
	)
}
