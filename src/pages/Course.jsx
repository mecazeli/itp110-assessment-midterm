import React from "react";
import "./Course.css";

const colleges = [
	{
		name: "College of Business, Accountancy, & Administration (CBAA)",
		img: "cbaa.png", 
		programs: [
			"Bachelor of Science in Accountancy",
			"Bachelor of Science in Business Administration – Major in Financial Management",
			"Bachelor of Science in Business Administration – Major in Marketing Management",
		],
	},
	{
		name: "College of Education (CoEd)",
		img: "coed.png",
		programs: [
			"Bachelor of Elementary Education",
			"Bachelor of Secondary Education – Major in English",
			"Bachelor of Secondary Education – Major in Filipino",
			"Bachelor of Secondary Education – Major in Mathematics",
			"Bachelor of Secondary Education – Major in Social Studies",
		],
	},
	{
		name: "College of Arts and Sciences (CAS)",
		img: "cas.png",
		programs: ["Bachelor of Science in Psychology"],
	},
	{
		name: "College of Engineering",
		img: "coe.png",
		programs: [
			"Bachelor of Science in Computer Engineering",
			"Bachelor of Science in Electronics Engineering",
			"Bachelor of Science in Industrial Engineering",
		],
	},
	{
		name: "College of Computing Studies",
		img: "computingstudies.png", 
		programs: [
			"Bachelor of Science in Computer Science",
			"Bachelor of Science in Information Technology",
		],
	},
	{
		name: "College of Health and Allied Sciences",
		img: "chas.png",
		programs: ["Bachelor of Science in Nursing"],
	},
];

const Course = () => (
	<div className="course-container" style={{ padding: "2rem" }}>
		<h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
			🎓 College Degree Programs Offered
		</h1>
		<div
			className="college-list"
			style={{ maxWidth: 900, margin: "0 auto" }}
		>
			{colleges.map((college, idx) => (
				<div
					key={idx}
					className="course-section" // changed from college-section
					style={{
						// You can remove the inline background, borderRadius, boxShadow, etc.
						padding: "1.5rem",
						marginBottom: "2rem",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							marginBottom: "1rem",
						}}
					>
						{college.img && (
							<img
								src={college.img}
								alt={college.name + " logo"}
								style={{
									width: "48px",
									height: "48px",
									objectFit: "contain",
									marginRight: "1rem",
								}}
								onError={(e) => {
									e.target.src = "https://via.placeholder.com/48";
								}}
							/>
						)}
						<h2 style={{ color: "#14532d", margin: 0 }}>{college.name}</h2>
					</div>
					<ul style={{ paddingLeft: "1.5rem" }}>
						{college.programs.map((program, pidx) => (
							<li
								key={pidx}
								style={{
									marginBottom: "0.5rem",
									fontSize: "1.05rem",
								}}
							>
								{program}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	</div>
);

export default Course;


