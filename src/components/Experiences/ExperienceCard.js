import React from 'react'

export default function ExperienceCard({
	image,
	company,
	workedAs,
	children,
	from,
	to
}) {
	return (
		<div
		 	className="card" 
			style={{height: '100%'}}
		>
			<img
				src={image}
				className="card-img-top mt-5"
				alt="company logo"
				style={{
					width: '80%',
					alignSelf: 'center',
					maxHeight: '550px',
					maxWidth: '200px'
				}}
			/>
			<h3 className="card-title">{company}</h3>
			<h6 className="card-text text-dark">{workedAs}</h6>
			<div className="card-body" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
				<p className="card-text text-dark text-align-justify">
					{children}
				</p>
			</div>
			<p className="align-items-center mt-4 w-100">
				<span className="ml-2 text-dark">
					<b className="text-dark">From </b> {from}{' '}
					<b className="text-dark">To </b> {to}
				</span>
			</p>
		</div>
	)
}
