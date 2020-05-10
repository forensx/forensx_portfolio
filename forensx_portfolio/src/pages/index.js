import React from "react"
import { Helmet } from "react-helmet"
import "../styles/global.css"

import Header from "../components/Header"
import AboutPanel from "../components/AboutPanel"
import AwardsPanel from "../components/AwardsPanel"
import ProjectShowcase from "../components/ProjectShowcase"
import TeamPanel from "../components/TeamPanel"
import ClosingPanel from "../components/ClosingPanel"

export default () => (
  <div style={{ width: "100%" }}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>ForensX</title>
      <link
        rel="canonical"
        href="https://forensx.github.io/forensx_portfolio/"
      />
    </Helmet>
    <Header />
    <AboutPanel />
    <AwardsPanel />
    <ProjectShowcase />
    <TeamPanel />
    <ClosingPanel />
  </div>
)
