import React from "react"
import "../styles/global.css"

import Header from "../components/Header"
import AboutPanel from "../components/AboutPanel"
import AwardsPanel from "../components/AwardsPanel"
import ProjectShowcase from "../components/ProjectShowcase"
import TeamPanel from "../components/TeamPanel"
import ClosingPanel from "../components/ClosingPanel"

export default () => (
  <div style={{ width: "100%" }}>
    <Header />
    <AboutPanel />
    <AwardsPanel />
    <ProjectShowcase />
    <TeamPanel />
    <ClosingPanel />
  </div>
)
