import React, { Component } from "react";
// import './Order.css';
import $ from "jquery";
// import NavBar from '../NavBar/NavBar';

class Calculator extends Component {
  state = {};
  componentDidMount = () => {
    $(document).ready(function() {
      $(".star").on("click", function() {
        $(this).toggleClass("star-checked");
      });

      $(".ckbox label").on("click", function() {
        $(this)
          .parents("tr")
          .toggleClass("selected");
      });

      $(".btn-filter").on("click", function() {
        var $target = $(this).data("target");
        if ($target != "all") {
          $(".table tr").css("display", "none");
          $('.table tr[data-status="' + $target + '"]').fadeIn("slow");
        } else {
          $(".table tr")
            .css("display", "none")
            .fadeIn("slow");
        }
      });
    });
  };
  render() {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        <div class="row">
          <div class="col-md-12 col-md-offset-3">
            <form id="msform">
              <fieldset>
                <h2 class="fs-title">Upload Photo or vedio File(s)</h2>
                {/* <h3 class="fs-subtitle">Tell us something more about you</h3> */}
                <div class="box">
                  <input
                    type="file"
                    name="file-7[]"
                    id="file-7"
                    class="inputfile inputfile-6"
                    data-multiple-caption="{count} files selected"
                    multiple
                  />
                  <label for="file-7">
                    <span />{" "}
                    <strong>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="17"
                        viewBox="0 0 20 17"
                      >
                        <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
                      </svg>{" "}
                      Choose a file &hellip;
                    </strong>
                  </label>
                </div>
                {/* //ProgressBar */}
                <div class="progress">
                  <div
                    class="progress-bar  active"
                    role="progressbar"
                    aria-valuenow="455"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  >
                    <span class="skill-name">
                      <strong>ASD.jpg</strong>
                    </span>
                  </div>
                </div>
                <br />
                {/* Table */}
                <table class="table table-bordered table-sm">
                  <thead class="thead-dark">
                    <tr>
                      <th>File Name</th>
                      <th>File Size</th>
                      <th>File Length (in Minutes)</th>
                      <th>Cost</th>
                    </tr>
                  </thead>
                  <tr>
                    <td>ASD.mp4</td>
                    <td>3000kb</td>
                    <td>0:40</td>
                    <td>$29</td>
                  </tr>
                  <tr>
                    <td class="table-secondary " colspan="4">
                      <b>Sub Total</b>
                    </td>
                  </tr>
                </table>

                {/* <input
                  type="button"
                  name="next"
                  class="next action-button"
                  value="Next"
                /> */}
              </fieldset>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Calculator;
