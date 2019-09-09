import React from 'react'
import KeyValueDisplay from '../components/AboutMePage/KeyValueDisplay'
import SocialProfileDisplay from '../components/AboutMePage/SocialProfileDisplay'

export default function AboutMePage(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 pt-5">
					<h3 className="intro-title text-white">Profile</h3>
					<hr />
					<div className="row">
						<div className="col">
							<KeyValueDisplay
								title="Name"
								value="Aravind S"
								icon="account_circle"
							/>
							<KeyValueDisplay
								title="Email"
								value="saravind23399@gmail.com"
								icon="mail"
							/>
							<KeyValueDisplay
								title="College"
								value="MSEC, Sivakasi"
								icon="menu_book"
							/>

							<SocialProfileDisplay
								title="Linkedin"
								link="https://www.linkedin.com/in/aravind-srinivasan-308724151/"
								icon="logo-linkedin">
								Aravind Srinivasan
							</SocialProfileDisplay>
						</div>
						<div className="col">
							<KeyValueDisplay
								title="Location"
								value="Madurai, India"
								icon="near_me"
							/>
							<KeyValueDisplay
								title="Mobile"
								value="+91 94867 35349"
								icon="phone"
							/>
							<KeyValueDisplay
								title="Proficiency"
								value="Full Stack Web Developer"
								icon="favorite"
							/>
							<SocialProfileDisplay
								title="Github"
								link="https://github.com/saravind23399"
								icon="logo-github">
								@saravind23399
							</SocialProfileDisplay>
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 pt-5">
					<h3 className="intro-title text-white ">About Me</h3>
					<hr />
					<p className="text-white lead font-size-20">
						Avid Programmer and Web developer looking for a great
						lively team to work in a Startup that inspires me. I've
						did a plethora of projects ranging from VB .NET for
						Desktop Development, ASP .NET , MEAN and MERN Stack for
						Web Development and React Native and Native Android for
						Mobile applications.
					</p>
					<p className="text-white lead font-size-20">
						I have launched 4 production level web applications, on
						behalf of my College. Also i have an Android app that is
						currently in Alpha Testing. I have been through numerous
						training and this has molded me into the perfect
						candidate you would like to choose for any role.
					</p>
				</div>
			</div>
		</div>
	)
}
