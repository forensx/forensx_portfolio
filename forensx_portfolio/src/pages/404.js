import React from "react"
import "../styles/global.css"

import Header from "../components/Header"

export default () => (
  <div style={{ width: "100%" }}>
    <Header />
    <div
      className="sectionHeader"
      style={{
        fontWeight: "bold",
        fontSize: "8.5em",
        marginLeft: "20%",
        width: "60%",
      }}
    >
      Page not found
    </div>
    <div
      className="sectionText"
      style={{
        fontWeight: "regular",
        fontSize: "2.5em",
        marginLeft: "20%",
        width: "50%",
        marginTop: "5%",
      }}
    >
      The link is broken or the page has been moved.
    </div>
  </div>
)
