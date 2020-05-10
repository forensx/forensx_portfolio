import React from "react"

import FRI_panel from "../images/FRI_panel.png"

export default () => (
  <div
    style={{
      width: "100%",
      margin: 0,
      padding: 0,
      // height: "70vh",
    }}
  >
    <div
      className="sectionHeader"
      style={{
        fontWeight: "bold",
        fontSize: "5em",
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
        marginTop: "2%",
        marginRight: "20%",
        width: "60%",
        // height: "500px",
      }}
    >
      <div className="projectFRI projectCard">
        <div class="container">
          <img src={FRI_panel} alt="Avatar" className="projectImage"></img>
          <div class="overlay">
            <div class="overlayText">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
                href="https://2019.spaceappschallenge.org/challenges/living-our-world/curious-minds-come-helping-hands/teams/forensx/project"
              >
                Famine Risk Index
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projectGViz projectCard">
        <div class="container">
          <img src={FRI_panel} alt="Avatar" className="projectImage"></img>
          <div class="overlay">
            <div class="overlayText">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
                href="https://devpost.com/software/visualizing-overlapping-data-between-bed-files"
              >
                GViz
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projectSciSearch projectCard">
        <div class="container">
          <img src={FRI_panel} alt="Avatar" className="projectImage"></img>
          <div class="overlay">
            <div class="overlayText">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
                href="https://devpost.com/software/sci-search-7s9xqb"
              >
                Sci-Search
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projectTanzania projectCard">
        <div class="container">
          <img src={FRI_panel} alt="Avatar" className="projectImage"></img>
          <div class="overlay">
            <div class="overlayText">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
                href="https://www.congressionalappchallenge.us/2018-al6/"
              >
                Tanzania
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projectNYC projectCard">
        <div class="container">
          <img src={FRI_panel} alt="Avatar" className="projectImage"></img>
          <div class="overlay">
            <div class="overlayText">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
                href="https://2019.spaceappschallenge.org/challenges/living-our-world/curious-minds-come-helping-hands/teams/forensx/project"
              >
                Magic City Hacks
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
