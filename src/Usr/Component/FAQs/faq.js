import React, { Component } from "react";

class Faq extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          class="container"
          id="faq"
          style={{ marginTop: "4%", marginBottom: "4%" }}
        >
          <h1 class="container-h1">FAQ</h1>
          <div class="row">
            <div class="col-12 col-md-12 col-sm-12">
              <div id="accordion" role="tablist" aria-multiselectable="true">
                <div class="card" style={{ borderRadius: 10 }}>
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="card-header" role="tab" id="headingOne">
                      <h5 class="mb-0">What is Transcription?</h5>
                    </div>
                  </a>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div class="card-block" style={{ padding: "2%" }}>
                      To covert any type of media in text form or words
                    </div>
                  </div>
                </div>

                <div class="card" style={{ borderRadius: 10 }}>
                  <a
                    class="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="card-header" role="tab" id="headingTwo">
                      <h5 class="mb-0">How Transcription is done?</h5>
                    </div>
                  </a>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div class="card-block" style={{ padding: "2%" }}>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div class="card" style={{ borderRadius: 10 }}>
                  <a
                    class="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="card-header" role="tab" id="headingThree">
                      <h5 class="mb-0">Why Transcription is done?</h5>
                    </div>
                  </a>
                  <div
                    id="collapseThree"
                    class="collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div class="card-block" style={{ padding: "2%" }}>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Faq;
