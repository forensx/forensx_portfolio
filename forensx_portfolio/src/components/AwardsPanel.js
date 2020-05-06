import React, { useState } from "react"

// https://github.com/gatsbyjs/gatsby/issues/10415

// 1st, you will use state 1-4 (integer) to decide which panel is hovered
// 2nd, you will check each div if the state matches the respective div, and change the opacity given this value
// 3rd, remove the opacity class from the respective CSS

const AwardsPanel = () => {
  const [hovered, setHovered] = useState(1); // 1 because 2020 selected by default
  console.log("Hover: ", hovered)
  return (
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
      <div className="Awards2020 inactiveAwardHover"
        style={ { opacity: (hovered === 1) ? '100%' : '50%' } }
        onMouseOver = {() => {
          setHovered(1);
          console.log("Just hovered on 2020")
        }}  >
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
      <div className="Awards2019 inactiveAwardHover" 
              style={ { opacity: (hovered === 2) ? '100%' : '50%' } }
              onMouseOver = {() => {
                setHovered(2);
                console.log("Just hovered on 2019")
              }} >
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
      <div className="Awards2018 inactiveAwardHover" 
              style={ { opacity: (hovered === 3) ? '100%' : '50%' } }
              onMouseOver = {() => {
                setHovered(3);
                console.log("Just hovered on 2019")
              }} >
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
      <div className="Awards2017 inactiveAwardHover" 
            style={ { opacity: (hovered === 4) ? '100%' : '50%' } }
            onMouseOver = {() => {
              setHovered(4);
              console.log("Just hovered on 2019")
            }} >
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
}

export default AwardsPanel;