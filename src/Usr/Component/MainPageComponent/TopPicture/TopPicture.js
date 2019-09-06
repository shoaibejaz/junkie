import React, { Component } from "react";
import "./TopPicture.css";
import { Link } from "react-router-dom";
class TopPicture extends Component {
  render() {
    return (
      <React.Fragment class="body">
        <div id="about">
          <div class="jumbotron information">
            <div class="container-fluid">
              <div>
                <center>
                  <h1 style={{ color: "white" }}>
                    On time and error free transcriptions
                  </h1>
                </center>
                <center>
                  <p style={{ marginTop: "5px", fontSize: "50px" }}>
                    Starting at{" "}
                    <label style={{ color: " #FFD700" }}>$0.78</label>/ minute
                  </p>
                </center>
                <center>
                  <Link to={"/OrderNow"}>
                    {" "}
                    <button
                      class="col btn btn-lg btn-dark-blue"
                      style={{
                        width: "200px",
                        alignItems: "center",
                        textAlign: "center"
                      }}
                    >
                      <b>Order Now</b>
                    </button>
                  </Link>
                </center>
              </div>
            </div>
          </div>
        </div>
        {/* Why Junkies */}
        <div class="header-content-inner" style={{ marginTop: "100px" }}>
          <center>
            <h1 style={{ color: "#272727" }}>Why Transcription Junkie?</h1>
          </center>
          <center>
            <p
              style={{
                marginLeft: "10%",
                marginRight: "10%",
                fontSize: "20px"
              }}
            >
              We are highly experienced team of transcribers that satisfy
              customers’ needs. We convert the simplest or difficult speech
              (even live or recorded) files into a electronic text document You
              name it, we will go the extra mile.
            </p>
            <br />
            <p
              style={{
                marginLeft: "10%",
                marginRight: "10%",
                fontSize: "20px"
              }}
            >
              Transcripts are100% manually produced with short turn-around time
              based on your needs
            </p>
          </center>
          <button
            class="col btn btn-lg btn-dark-blue"
            style={{ width: "200px", alignItems: "center" }}
          >
            <b>Read More</b>
          </button>
        </div>
        {/* File Formated*/}
        {/* <div class="fileSupported">
					<div class="container-fluid">
						<div>
							<center>
								{' '}
								<h1 style={{ padding: '5%', color: 'white' }}>Files supported</h1>
								<h3 style={{ color: 'white' }}>
									AIFF/AIF | AMR | AVI | CAF | DSS | DVD | DVF | M4A | MOV
									| MP2 | MP3 | MP4  |<br/><br/> MSV | Quicktime |
								 WAV | Webex | WMA | WMV
								</h3>
							</center>
						</div>
					</div>
				</div> */}
      </React.Fragment>
    );
  }
}
export default TopPicture;
