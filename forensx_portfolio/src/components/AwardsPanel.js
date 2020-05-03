import React from "react"

export default () => (
  <div
    style={{
      width: "100%",
      margin: 0,
      padding: 0,
      background: "#920A0F",
      marginTop: "3%",
      height: "100%",
    }}
  >
    <div
      className="sectionHeader"
      style={{
        fontWeight: "bold",
        fontSize: "5em",
        marginLeft: "20%",
        width: "60%",
        color: "#F0F0F0",
        lineHeight: "95px",
        paddingTop: "2%",
      }}
    >
      Awards &<br></br>
      recognitions
    </div>
    {/* begin CSS grid */}
    <div
      className="awardsParent"
      style={{
        marginLeft: "20%",
        marginTop: "2%",
        marginRight: "20%",
        width: "60%",
        height: "100%",
      }}
    >
      <div className="Awards2020 inactiveAwardHover">
        <hr
          style={{
            height: "1px",
            color: "white",
            backgroundColor: "white",
          }}
        ></hr>
        <div className="yearHeader" style={{ marginTop: "-2%" }}>
          2020
        </div>
        <ul className="awardsList" style={{ marginTop: "-1%" }}>
          <li>HudsonAlpha Tech Challenge - 1st Place</li>
          <li>Congressional App Challenge - National Finalists</li>
        </ul>
      </div>
      <div className="Awards2019 inactiveAwardHover">
        <hr
          style={{
            height: "1px",
            color: "white",
            backgroundColor: "white",
          }}
        ></hr>
        <div className="yearHeader" style={{ marginTop: "-2%" }}>
          2019
        </div>
        <ul className="awardsList" style={{ marginTop: "-1%" }}>
          <li>NASA Space Apps - 1st Place</li>
          <li>UA Capture the Flag - 2nd Place</li>
          <li>HudsonAlpha Tech Challenge - 1st Place</li>
          <li>BeEntrepreneurial Pitch Competition - 3rd Place</li>
        </ul>
      </div>
      <div className="Awards2018 inactiveAwardHover">
        <hr
          style={{
            height: "1px",
            color: "white",
            backgroundColor: "white",
          }}
        ></hr>
        <div className="yearHeader" style={{ marginTop: "-2%" }}>
          2018
        </div>
        <ul className="awardsList" style={{ marginTop: "-1%" }}>
          <li>Congressional App Challenge - National Finalists</li>
        </ul>
      </div>
      <div className="Awards2017 inactiveAwardHover">
        <hr
          style={{
            height: "1px",
            color: "white",
            backgroundColor: "white",
          }}
        ></hr>
        <div className="yearHeader" style={{ marginTop: "-2%" }}>
          2017
        </div>
        <ul className="awardsList" style={{ marginTop: "-1%" }}>
          <li>HudsonAlpha Tech Challenge - 1st Place</li>
          <li>Magic City Hacks - 1st Place</li>
          <li>UAB Programming Competition - 2nd Place</li>
        </ul>
      </div>
    </div>
  </div>
)
