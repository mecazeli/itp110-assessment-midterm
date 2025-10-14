import React from "react";
import "./Admission.css";

const Admission = () => {
  return (
    <div className="admission-page">
      {/* Main Content */}
      <div className="admission-container">
        <h2 className="section-title">Admission Information</h2>
        <p className="intro-text">
          Begin your academic journey at <strong>Pamantasan ng Cabuyao</strong>.
          Below are the detailed requirements and process for admission.
        </p>

        {/* Requirements */}
        <div className="admission-card">
          <h3>📋 Initial Admission Requirements</h3>
          <ul>
            <li>
              <strong>Application Form (PNC:SDAS-FO-34)</strong>
              <br />
              <em>
                Note: Generated after successful submission of the online
                pre-registration.
              </em>
            </li>
            <li>
              <strong>
                Duly signed and notarized Affidavit of Undertaking
                (PNC:SDAS-FO-35)
              </strong>
              <br />
              <em>Note: Download the fillable form attached to the sent email.</em>
            </li>
            <li>
              Certificate of Enrollment signed by the School Principal or
              Registrar
            </li>
            <li>PSA Birth Certificate (Original Copy)</li>
            <li>Certificate of Good Moral Character</li>
            <li>
              <strong>Voter’s Certificate/Stub</strong>
              <br />
              <em>
                Cabuyeño applicants under 17 may submit a parent’s Certificate
                of Registration. Not required for Non-Cabuyeño applicants.
              </em>
            </li>
            <li>
              Two (2) pcs 2x2 and four (4) pcs 1x1 colored photos (white
              background, nametag)
            </li>
            <li>White folder (long) and plastic envelope (long)</li>
          </ul>
        </div>

        {/* Process */}
        <div className="admission-card">
          <h3>🧭 Admission Process</h3>
          <ol>
            <li>
              Fill out the <strong>Online Pre-Registration Form</strong> on the
              official PNC website.
            </li>
            <li>
              Wait for your email confirmation with your{" "}
              <strong>Application Form</strong> and{" "}
              <strong>Affidavit of Undertaking</strong>.
            </li>
            <li>Prepare and complete all the listed requirements.</li>
            <li>
              Submit the documents to the <strong>Registrar’s Office</strong>{" "}
              for evaluation.
            </li>
            <li>Wait for your official admission result.</li>
            <li>Proceed to enrollment upon approval.</li>
          </ol>
        </div>

        {/* Terms and Download */}
        <div className="terms-box">
          <p>
            By submitting your application, you agree to PNC’s Admission and
            Data Privacy Policy.
          </p>
        </div>

        <div className="download-area">
          <h4>Download the Admission Form</h4>
          <a
            href="/files/PNC_Admission_Form.pdf"
            download
            className="download-btn"
          >
            📄 Download Form
          </a>
        </div>
      </div>
    </div>
  );
};

export default Admission;
