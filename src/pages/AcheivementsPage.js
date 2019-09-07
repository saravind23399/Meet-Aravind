import React from 'react'
import AchievementCard from '../components/AchievementsPage/AchievementCard'

export default function AcheivementsPage() {
	return (
		<div id="achievements" className="container">
			<h3 className="intro-title text-white">My Achievements</h3>
			<hr />
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
					<AchievementCard
						idx={1}
						icon="briefcase"
						title="Technical Symposium management website ( Gyanmitra '19 )"
						summary="A Complete event management website for Gyanmitra '19"
						link="https://gyanmitra19.herokuapp.com/"
						from="December 2018"
						to="February 2019"
						myRole="Full Stack Developer"
						contribution="I leaded the team for this project. It was my first project on full stack development ( MEAN Stack to be precise ). I came to know the power of Javascript and its incredible flexibility. "
						technologiesUsed={[
							'JavaScript',
							'Node.js',
							'MongoDB',
							'Express.js',
							'Angular 6'
						]}>
						An Event Management site for a technical symposium held
						at Mepco Schlenk Engineering College
					</AchievementCard>
				</div>
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
					<AchievementCard
						idx={2}
						icon="document"
						title="Online File sharing and Discussion portal"
						summary="An portal designed for Teacher Enhancement Workshop at MSEC"
						link="http://www.tew.mepcoeng.ac.in"
						from="March 2019"
						to="May 2019"
						myRole="Full Stack Developer"
						contribution="This was my second project on MEAN Stack. I was a full stack developer and engineered the backend using Nodejs and MongoDB, while the frontend was developed using AngularJS"
						technologiesUsed={[
							'JavaScript',
							'Node.js',
							'MongoDB',
							'Express.js',
							'Angular 6'
						]}>
						An Online Web discussion and file sharing portal for the
						Teacher Enhancement Workshop to be held at Mepco Schlenk
						Engineering College, Sivakasi.
					</AchievementCard>
				</div>
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
					<AchievementCard
						idx={3}
						icon="person-add"
						title="Online Admission portal"
						summary="Web Portal for Online Admission for MSEC, Sivakasi"
						link="http://erp.mepcoeng.ac.in:81/me/login.aspx"
						from="March 2019"
						to="March 2019"
						myRole=".NET Developer"
						contribution="One of my many .NET Development projects. I worked on to build a premature project to production."
						technologiesUsed={[
							'ASP .NET',
							'Twitter Bootstrap',
							'HTML',
							'CSS',
							'Aspx',
							'Javascript'
						]}>
						An web portal for pre-registration of students to the
						M.E. Programmes to Mepco Schlenk Engineering College,
						Sivakasi
					</AchievementCard>
				</div>
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
					<AchievementCard
						idx={4}
						icon="help"
						title="Quizzly"
						summary="An quizzing application built using React Native"
						link="https://install.appcenter.ms/orgs/quizzly/apps/quizzly/distribution_groups/alpha%20quizzlers"
						from="April 2019"
						to="June 2019"
						myRole="React Native Developer"
						contribution="I developed this app from the scratch using React Native. This helped me to reinforce my concepts of React Native, as this was the first project on React Native framework."
						technologiesUsed={[
							'React Native',
							'Node.js',
							'Express.js',
							'Mongo DB',
							'Android'
						]}>
						An Android focused mobile application where admins can
						create quizzes and users answer to it. On further
						development, the data emerging from these quizzes may be
						used to harvest trends prevailing in users.
					</AchievementCard>
				</div>
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
					<AchievementCard
						idx={5}
						icon="outlet"
						title="Automatic Level Crossing system using IoT"
						summary="Winning project of Smart India Hackathon 2019"
						link=""
						from="February 2019"
						to="March 2019"
						myRole="Full Stack Developer"
						contribution="This was a short termed project that was built for Smart India Hackathon 2019. I learned to work in abrupt deadline situations and had a very nuclear role in my team. It helped me in knowing how to integrate Hardware ( from Adruino ) into Software ( to Nodejs Backend )"
						technologiesUsed={[
							'Angular 7',
							'Node.js',
							'Express.js',
							'Mongo DB',
							'Arduino'
						]}>
						Done for the Ministry of Railways for Smart India
						Hackathon 2019. This project would help the railways by
						automating level crossings across India. It provided a
						cost efficient, maintenance-less solution to the
						existing problem of manual level crossings
					</AchievementCard>
				</div>
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-4">
					<div className="font-weight-bold font-size-20 p-5">
						And Know What! This Site was coded on ReactJs, With
						<i className="material-icons ml-3">favorite</i>
					</div>
				</div>
			</div>
		</div>
	)
}
