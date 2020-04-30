import React from "react"

export default () => (
  <div
    style={{
      width: "100%",
      margin: 0,
      padding: 0,
      marginTop: "3%",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, .7)",
    }}
  >
    <div
      className="sectionHeader"
      style={{
        fontWeight: "bold",
        fontSize: "90px",
        marginLeft: "20%",
        width: "60%",
        color: "#F0F0F0",
      }}
    >
      Meet the team
    </div>
    {/* BEGIN TEAM GRID */}
    <div
      class="teamGrid"
      style={{
        marginLeft: "20%",
        marginTop: "1%",
        marginRight: "20%",
        width: "60%",
        height: "60%",
      }}
    >
      <div class="coleCard teamCard">
        <div className="teamPicture" style={{ height: "90%" }}></div>
        <div className="teamMemberName">Cole McKee</div>
        <div className="teamMemberDescriptor">UI/UX Design</div>
      </div>
      <div class="lonnieCard teamCard">
        <div className="teamPicture" style={{ height: "90%" }}></div>
        <div className="teamMemberName">Lonnie Webb</div>
        <div className="teamMemberDescriptor">Analytics and modeling</div>
      </div>
      <div class="aniketCard teamCard">
        <div className="teamPicture" style={{ height: "90%" }}></div>
        <div className="teamMemberName">Aniket Pant</div>
        <div className="teamMemberDescriptor">Frontend Engineer</div>
      </div>
      <div class="virajCard teamCard">
        <div className="teamPicture" style={{ height: "90%" }}></div>
        <div className="teamMemberName">Viraj Kacker</div>
        <div className="teamMemberDescriptor">Pro Flexer</div>
      </div>
      <div class="katsukiCard teamCard">
        <div className="teamPicture" style={{ height: "90%" }}></div>
        <div className="teamMemberName">Katsuki Chan</div>
        <div className="teamMemberDescriptor">Ex-Friend</div>
      </div>
      <div class="matthiasCard teamCard">
        <div className="teamPicture" style={{ height: "90%" }}></div>
        <div className="teamMemberName">Matthias Rathbun</div>
        <div className="teamMemberDescriptor">Atom Installer</div>
      </div>
    </div>
  </div>
)
