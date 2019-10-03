import React, { Component } from "react";

class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          class="testimonial-area"
          id="testimonials"
          style={{ marginTop: "0%", marginBottom: "0%" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="sec-title pull-left">
                  <h1>Successful Stories</h1>
                </div>
                {/* <div class="more-button pull-right">
                  <a href="#">More Stories</a>
                </div> */}
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <div class="single-testimonial-item text-center">
                  <div class="img-holder">
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="Awesome Image"
                    />
                  </div>
                  <div class="text-holder">
                    <h3>Lost 80 Pounds and 4 Sizes</h3>
                    <p>
                      Ladies, meet your new hero. Men, prepare to be humbled. My
                      friend Staci, or Spezzy as she’s known health Coach.
                    </p>
                  </div>
                  <span class="border"></span>
                  <div class="name">
                    <h3>Steve Bairstow</h3>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="single-testimonial-item text-center">
                  <div class="img-holder">
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src="https://images.unsplash.com/photo-1528661291869-eab41a2c6544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="Awesome Image"
                    />
                  </div>
                  <div class="text-holder">
                    <h3>Lost 146 Pounds and 5 Sizes</h3>
                    <p>
                      In 10 months of following Health Coach, Joe has lost 128
                      pounds. If you are overweight, out of shape, and worried
                      that.
                    </p>
                  </div>
                  <span class="border"></span>
                  <div class="name">
                    <h3>Don Fletcher</h3>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="single-testimonial-item text-center">
                  <div class="img-holder">
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="Awesome Image"
                    />
                  </div>
                  <div class="text-holder">
                    <h3>Got Herself into the Shape</h3>
                    <p>
                      When it comes to weight loss, exercise is your best
                      friend. If you haven’t exercised for a long time and are
                      very out.
                    </p>
                  </div>
                  <span class="border"></span>
                  <div class="name">
                    <h3>Jessica Jung</h3>
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
export default Testimonial;
