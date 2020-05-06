import React from "react"

export default () => (
  <div
    style={{
      width: "100%",
      margin: 0,
      padding: 0,
      marginTop: "2%",
      height: "100vh",
    }}
  >
    <div
      className="sectionHeader"
      style={{
        fontWeight: "bold",
        fontSize: "80px",
        marginLeft: "20%",
        width: "60%",
        lineHeight: "100px",
      }}
    >
      We’re always looking to learn something new.
    </div>
    <div
      className="closingGrid"
      style={{
        marginLeft: "20%",
        marginTop: "4%",
        marginRight: "20%",
        width: "60%",
      }}
    >
      <div className="projectEmail" style={{ fontSize: "40px" }}>
        <div className="projectDirective">
          Got a project?<br></br>Let's talk.
        </div>
        <div className="contactEmail" style={{ marginTop: "20%" }}>
          Drop us a line at
          <div style={{ color: "#920A0F", fontWeight: "bold" }}>
            contact@forensx.com
          </div>
        </div>
      </div>
      <div className="projectFormEntry" style={{ fontSize: "40px" }}>
        Or, let us know here.
      </div>
    </div>
  </div>
)
