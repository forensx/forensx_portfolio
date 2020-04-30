import React from "react"

export default () => (
  <div
    style={{
      width: "100%",
      margin: 0,
      padding: 0,
      marginTop: "3%",
      height: "100vh",
    }}
  >
    <div
      className="sectionHeader"
      style={{
        fontWeight: "bold",
        fontSize: "90px",
        marginLeft: "20%",
        width: "60%",
      }}
    >
      Our projects
    </div>
    {/* BEGIN GRID */}
    <div
      className="projectsGrid"
      style={{
        marginLeft: "20%",
        marginTop: "5%",
        marginRight: "20%",
        width: "60%",
        height: "500px",
      }}
    >
      <div className="projectFRI projectCard">FRI</div>
      <div className="projectGViz projectCard">GViz</div>
      <div className="projectSciSearch projectCard">Sci-Search</div>
      <div className="projectTanzania projectCard">Tanzania</div>
      <div className="projectNYC projectCard">Magic City NYC</div>
    </div>
  </div>
)
