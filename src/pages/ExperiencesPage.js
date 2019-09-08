import React from 'react'
import ExperienceCard from '../components/Experiences/ExperienceCard'

export default function ExperiencePage() {
	return (
		<div id="experiences" className="container">
			<h3 className="intro-title text-white">My Experiences</h3>
			<hr />
			<div className="text-center text-muted">
				Completed Two major internships in reputed companies as a Full
				Stack Developer
			</div>
			<div className="row mt-3">
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-3 text-center text-white">
					<ExperienceCard
						company="Sqenta Technologies, Coimbatore"
						workedAs="Full Stack Web Developer"
						image="http://sqenta.com/wp-content/uploads/2018/12/Website.png"
						from="May 2019"
						to="June 2019">
						Worked on Sqenta Technologies' new product{' '}
						<b className="text-dark">Sloqe</b>. An Single Page Web
						application designed using the MEAN Stack, (Specifically
						Angular 7). This was aimed at colleges to provide a
						quality assesment tool for their students.
					</ExperienceCard>
				</div>
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-3 text-center text-white">
					<ExperienceCard
						image="https://www.tricog.com/images/logo.png"
						company="Tricog Health Services, Bangalore"
						workedAs="Full Stack Web Developer"
						from="June 2019"
						to="July 2019">
						Worked on Tricog's In-House Software,
						<b className="text-dark">
							TRIMP - Tricog Inventory Management Portal
						</b>{' '}
						&nbsp; for Managing hardware devices produced by the
						company, providing OTA Updates, Device Configuration,
						etc.
					</ExperienceCard>
				</div>
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-3 text-center text-white">
					<ExperienceCard
						company="Mepco Schlenk Engineering College, Sivakasi"
						workedAs="Computer Science & Engineering Graduate"
						image="https://upload.wikimedia.org/wikipedia/en/8/87/Mepco_Schlenk_Engineering_College_logo.png"
						from="July 2016"
						to="Present">
						As An CSE Graduate, studying in Mepco Schlenk
						Engineering College, I have contributed to my college's
						software programs like{' '}
						<b className="text-dark">
							{' '}
							Office Server ( in-house ERP Solution ) , GyanMitra
							'19 Event Management System, Legacy '19 Event
							Management System{' '}
						</b>
						, to name a few. My College has offered me to explore
						new horizons in software development and this is where I
						really learnt a plethora of languages, whilst securing
						the foundation in Computer Science
					</ExperienceCard>
				</div>
				<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-3 text-center text-white">
					<ExperienceCard
						company="The TVS School, Madurai"
						workedAs="Higher Secondary Student"
						image="https://www.thetvsschool.org/images/logo.png"
						from="June 2014"
						to="April 2016">
						My First place, when I jumped into programming. Got
						immense experience on the foundations of computer
						programming. Was also the president of the Cyber Club
						and hosted many events under the banner of the club.
					</ExperienceCard>
				</div>
			</div>
		</div>
	)
}
