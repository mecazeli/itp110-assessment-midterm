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
    name: "College of Engineering",
    img: "coe.png",
    programs: [
      "Bachelor of Science in Computer Engineering",
      "Bachelor of Science in Electronics Engineering",
      "Bachelor of Science in Industrial Engineering",
    ],
  },
  {
    name: "College of Arts and Sciences (CAS)",
    img: "cas.png",
    programs: ["Bachelor of Science in Psychology"],
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
  <div className="course-container">
    <h1 className="course-title">🎓 College Degree Programs Offered</h1>

    <div className="college-grid">
      {colleges.map((college, idx) => (
        <div key={idx} className="college-card">
          <div className="college-img-container">
            <img
              src={college.img}
              alt={college.name}
              onError={(e) => (e.target.src = "https://via.placeholder.com/120")}
            />
          </div>
          <div className="college-info">
            <h2>{college.name}</h2>
            <ul>
              {college.programs.map((program, pidx) => (
                <li key={pidx}>{program}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Course;
