import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      {/* ===== Banner Section ===== */}
      <div
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://tse1.mm.bing.net/th/id/OIP.zAgK0vxIfYKmQpcUIuJAFQHaE6?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          position: "relative",
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.55)",
          }}
        ></div>

        {/* Banner Text */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "90%",
            padding: "0 15px",
          }}
        >
          <h1
            className="fw-bold mb-3"
            style={{
              fontSize: "clamp(2rem, 4vw, 4.5rem)",
              lineHeight: "1.2",
              color: "#fff",
            }}
          >
            Welcome to Pamantasan ng Cabuyao
          </h1>

          <p
            className="mb-4"
            style={{
              fontSize: "clamp(1rem, 1.6vw, 1.4rem)",
              maxWidth: "850px",
              margin: "0 auto 3rem auto",
              color: "#FFD700",
            }}
          >
            Explore academic programs, student services, and community
            initiatives that shape future leaders dedicated to service,
            innovation, and sustainability.
          </p>

          <button
            className="btn btn-success fw-bold btn-lg px-4 py-2 shadow"
            style={{ marginTop: "2.5rem" }}
          >
            READ MORE
          </button>
        </div>
      </div>

      {/* ===== Overview Section ===== */}
      <div
        className="container text-center my-5 mt-5"
        style={{ margin: "0 auto", maxWidth: "97%" }}
      >
        <div className="d-flex justify-content-center">
          <div
            className="card shadow-lg mx-auto"
            style={{
              borderRadius: "5px",
              backgroundColor: "#fff",
              border: "1px solid #198754",
              width: "95%",
              margin: "10px auto",
              padding: "0 10px",
            }}
          >
            <div className="card-body p-4">
              <h4
                className="card-title fw-bold text-success mb-4"
                style={{
                  borderBottom: "1px solid #198754",
                  display: "inline-block",
                  paddingBottom: "5px",
                }}
              >
                PnC Overview
              </h4>

              <div className="row align-items-center mt-3">
                {/* Left Column - Image */}
                <div className="col-md-5 mb-3 mb-md-0">
                  <img
                    src="https://newsinfo.inquirer.net/files/2025/02/2048px-PnC_Bagong_Cabuyao_Hall.jpg"
                    alt="PnC Building"
                    className="img-fluid rounded"
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>

                {/* Right Column - Text */}
                <div className="col-md-7">
                  <p
                    className="card-text text-start"
                    style={{ fontSize: "1.05rem" }}
                  >
                    PnC envisions itself becoming the premier leading local
                    university in Region IV by further elevating its academic
                    standards, thereby producing value-laden and globally
                    competent graduates and continuously striving for
                    improvement in quality services in instruction, research,
                    and extension.
                  </p>
                  <p
                    className="card-text text-start"
                    style={{ fontSize: "1.05rem" }}
                  >
                    PnC commits itself to the holistic education of every
                    “Dangal ng Bayan”, thereby producing graduates that bring
                    pride and honor to the nation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Featured Images Carousel ===== */}
      <div className="container my-5" style={{ maxWidth: "90%" }}>
        <div className="row justify-content-center">
          <div className="col-auto">
            <h3
              className="text-success fw-bold text-center mb-4"
              style={{
                borderBottom: "2px solid #198754",
                paddingBottom: "5px",
                display: "inline-block",
              }}
            >
              PnC Featured Images
            </h3>
          </div>
        </div>

        <div
          id="featuredCarousel"
          className="carousel slide shadow-lg"
          data-bs-ride="carousel"
          style={{ border: "1px solid #198754" }}
        >
          <div className="carousel-inner rounded">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <img
                src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/557255390_832381539734121_6800484396975057323_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=P8fPxakpi08Q7kNvwEw-L3O&_nc_oc=AdmtZFMKjH3v4dQEMZ683-q_-HEBtfuqA3qiE-ZhYMbDM6Q8ZueptTp9qCdnTG201aKSq5qraxge6q2RZB2s0IEY&_nc_zt=23&_nc_ht=scontent.fmnl8-1.fna&_nc_gid=BNYHKgr8ESwcbmwfifRgDA&oh=00_AffOnjErD3bp9fJAxmVtnQDTzDoq2_gK998SydSX3Nf_YQ&oe=68F462FC"
                className="d-block w-100"
                alt="Teachers Day"
                style={{ objectFit: "cover", height: "700px" }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded px-2">
                <h5>PnC Celebrates Teacher's Day</h5>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <img
                src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/552835980_824049253900683_1079050491036926826_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=AzEjSfw-45EQ7kNvwFl3e4U&_nc_oc=AdnEIjiHsNdg2LeCBlv0zHQ7aQ-9M8wcVc2Ui5uHSbInWbOvz6PeDF8UUfMDmlA1sxc5qijM3-dRHpjo7LWDMZ01&_nc_zt=23&_nc_ht=scontent.fmnl8-2.fna&_nc_gid=eustfF6IKJcHp8RBkxdqnw&oh=00_Afc5Tp-7P93NywGpSlEMqFliE7s6vesYMmIM3pPZASVgBA&oe=68F45F12"
                className="d-block w-100"
                alt="Pinning"
                style={{ objectFit: "cover", height: "700px" }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded px-2">
                <h5>
                  20th 𝗖𝗮𝗽𝗽𝗶𝗻𝗴, 𝗣𝗶𝗻𝗻𝗶𝗻𝗴, 𝗮𝗻𝗱 𝗖𝗮𝗻𝗱𝗹𝗲 𝗟𝗶𝗴𝗵𝘁𝗶𝗻𝗴 𝗖𝗲𝗿𝗲𝗺𝗼𝗻𝘆 of our
                  2nd-year Nursing students from the College of Health and
                  Allied Sciences, University of Cabuyao{" "}
                </h5>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <img
                src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/541638275_804325025873106_4090230888167310351_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=rnx7cccfoeUQ7kNvwH_XVAI&_nc_oc=Adn8sapb7AYMbIYs63B77_Yzn4H0lO9AMrEz0sjVZ6JWuAdoAlXysafYaC_BBhEkiRQ39ax6rHim8D5s9qAJJ0Zz&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=qxHuupG1k10Zp4iiRh3wuQ&oh=00_AfcAd7T5mKEqHXYVylu9BxXEIOwbJAumTYDS5buckYiS-g&oe=68F45166"
                className="d-block w-100"
                alt="Red Cross Donation"
                style={{ objectFit: "cover", height: "700px" }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded px-2">
                <h5>𝘾𝙊𝙈𝙀 𝘽𝘼𝘾𝙆: 𝙏𝙪𝙢𝙞𝙗𝙤𝙠 𝙖𝙣𝙜 𝙋𝙪𝙨𝙤, 𝙈𝙖𝙮 𝙋𝙪𝙨𝙤, 𝙈𝙖𝙮 𝘿𝙖𝙣𝙜𝙖𝙡</h5>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="carousel-item">
              <img
                src="https://scontent.fmnl8-4.fna.fbcdn.net/v/t39.30808-6/542005424_802463769392565_8701019461398059192_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=tS5rtofp7U4Q7kNvwGsf5n3&_nc_oc=AdnfZCPs8BxzGMXR42wUYJKLRMBMzw_n9P7IG-_QDYNZIddSK3ts2fnNaeqkyEgnne6c1XgoPBNfO2tEh_SfxL3W&_nc_zt=23&_nc_ht=scontent.fmnl8-4.fna&_nc_gid=S8XGl2vqPavWZjf0xKVj_Q&oh=00_AfePH_DAr-lW8jJ2-cz5RnpYHBBW2pSMoBDaQOppqyJuwQ&oe=68F44DF0"
                className="d-block w-100"
                alt="Buwan ng Wika"
                style={{ objectFit: "cover", height: "700px" }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded px-2">
                <h5>𝐁𝐮𝐰𝐚𝐧 𝐧𝐠 𝐖𝐢𝐤𝐚: 𝐏𝐚𝐠𝐝𝐢𝐫𝐢𝐰𝐚𝐧𝐠 𝐧𝐠 𝐊𝐮𝐥𝐭𝐮𝐫𝐚 𝐚𝐭 𝐏𝐚𝐠𝐤𝐚𝐤𝐚𝐢𝐬𝐚</h5>
              </div>
            </div>

            {/* Slide 5 */}
            <div className="carousel-item">
              <img
                src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/539493008_799294323042843_4496519700829412563_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=QQjVE4iRBe0Q7kNvwEcT_vX&_nc_oc=AdkfY8-GWXSqlt_wSCkCjIclFK9_YYxKdmJ0eGsECwCshVoqqEFji_FyxLfSjeLiDb5Qyw5MK9Mp0iYrkcd1uNLV&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=ZY2g9ZWRil8usjUeJ9hPvg&oh=00_Afe9f5dvlpybsIHRLDKr-Ascc0MbGi1qaWfDzoOsGF1f-Q&oe=68F4422F"
                className="d-block w-100"
                alt="Pagsalubong"
                style={{ objectFit: "cover", height: "700px" }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded px-2">
                <h5>𝐏𝐚𝐠𝐬𝐚𝐥𝐮𝐛𝐨𝐧𝐠 2025: 𝐄𝐦𝐛𝐫𝐚𝐜𝐢𝐧𝐠 𝐍𝐞𝐰 𝐁𝐞𝐠𝐢𝐧𝐧𝐢𝐧𝐠𝐬 𝐚𝐧𝐝 𝐔𝐧𝐢𝐭𝐲</h5>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#featuredCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#featuredCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      {/* ===== Mission, Vision, Core Values Section ===== */}
      <div className="container my-5" style={{ maxWidth: "90%" }}>
        {/* Section Title */}
        <div className="text-center mb-4">
          <h3
            className="text-success fw-bold"
            style={{
              borderBottom: "2px solid #198754",
              display: "inline-block",
              paddingBottom: "8px",
              fontSize: "clamp(1.5rem, 3vw, 2rem)", // responsive title
              textAlign: "center",
            }}
          >
            PnC Mission, Vision and Core Values
          </h3>
        </div>

        {/* Row 1 - Vision and Mission */}
        <div className="row g-4 mt-3 justify-content-center">
          {/* Vision */}
          <div className="col-md-6">
            <div
              className="card h-100 shadow-sm border-success text-center"
              style={{
                backgroundImage: "url('/pnc-logo.png')",
                backgroundSize: "100px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minHeight: "220px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  zIndex: 1,
                }}
              ></div>

              <div
                className="card-body"
                style={{ position: "relative", zIndex: 2 }}
              >
                <h5
                  className="fw-bold mb-3 text-success"
                  style={{
                    fontSize: "clamp(1.25rem, 2.5vw, 1.8rem)",
                    textAlign: "center",
                  }}
                >
                  Institutional Vision
                </h5>
                <p
                  className="text-justify mx-auto"
                  style={{
                    lineHeight: "1.7",
                    maxWidth: "90%",
                    fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                    color: "#000",
                  }}
                >
                  A premier educational institution of higher learning in Region
                  IV, developing globally-competitive and value-laden
                  professionals and leaders instrumental to community
                  development and nation building.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="col-md-6">
            <div
              className="card h-100 shadow-sm border-success text-center"
              style={{
                backgroundImage: "url('/pnc-logo.png')",
                backgroundSize: "100px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minHeight: "220px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  zIndex: 1,
                }}
              ></div>

              <div
                className="card-body"
                style={{ position: "relative", zIndex: 2 }}
              >
                <h5
                  className="fw-bold mb-3 text-success"
                  style={{
                    fontSize: "clamp(1.25rem, 2.5vw, 1.8rem)",
                    textAlign: "center",
                  }}
                >
                  Institutional Mission
                </h5>
                <p
                  className="text-justify mx-auto"
                  style={{
                    lineHeight: "1.7",
                    maxWidth: "90%",
                    fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                    color: "#000",
                  }}
                >
                  As an institution of higher learning, PnC is committed to
                  equip individuals with knowledge, skills, and values that will
                  enable them to achieve their professional goals and provide
                  leadership and service for national development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 - Core Values */}
        <div className="row mt-4 justify-content-center">
          <div className="col-12">
            <div
              className="card shadow-sm border-success text-center"
              style={{
                backgroundImage: "url('/pnc-logo.png')",
                backgroundSize: "100px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minHeight: "180px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  zIndex: 1,
                }}
              ></div>

              <div
                className="card-body"
                style={{ position: "relative", zIndex: 2 }}
              >
                <h5
                  className="fw-bold mb-3 text-success"
                  style={{
                    fontSize: "clamp(1.25rem, 2.5vw, 1.8rem)",
                    textAlign: "center",
                  }}
                >
                  Institutional Core Values
                </h5>
                <p
                  className="text-justify mx-auto"
                  style={{
                    lineHeight: "1.7",
                    maxWidth: "90%",
                    fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                    color: "#000",
                  }}
                >
                  As a God-fearing institution respecting multi-faith of people,
                  PnC adheres to the following core values: <br></br>
                  <strong>
                    Personal Dignity, Nurturing Community, and Commitment to
                    Excellence.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
