import React, { Component } from "react";

import "./header.css";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header class="masthead masthead-stacked" role="banner">
          <div class="x-logobar">
            <div class="x-logobar-inner">
              <div class="x-container max width">
                <a href="/" class="x-brand img">
                  <img
                    style={{ width: "180px" }}
                    src={require("../../../../image//Logo.png")}
                    alt="Agency"
                  />
                </a>
              </div>
            </div>
          </div>

          <div class="x-navbar-wrap">
            <div class="x-navbar">
              <div class="x-navbar-inner">
                <div class="x-container max width">
                  <a
                    href="#"
                    id="x-btn-navbar"
                    class="x-btn-navbar collapsed"
                    data-x-toggle="collapse-b"
                    data-x-toggleable="x-nav-wrap-mobile"
                    aria-expanded="false"
                    aria-controls="x-nav-wrap-mobile"
                    role="button"
                  >
                    <i class="fa fa-bars" data-x-icon-s="&#xf0c9;" />
                    <span class="visually-hidden">Navigation</span>
                  </a>

                  <nav class="x-nav-wrap desktop" role="navigation">
                    <ul id="menu-primary-menu" class="x-nav">
                      <li
                        id="menu-item-570"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-570"
                      >
                        <a href="/About">
                          <span>About</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-567"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-567"
                      >
                        <a href="/Calculator">
                          <span>Calculator</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-571"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-571"
                      >
                        <a href="/OrderNow">
                          <span>Order Now</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-568"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568"
                      >
                        <a href="/Testmonials">
                          <span>Testimonials</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-568"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568"
                      >
                        <a href="/FAQ">
                          <span>FAQ</span>
                        </a>
                      </li>

                      <li
                        id="menu-item-568"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568"
                      >
                        <a href="/ContactUs">
                          <span>ContactUS</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-568"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568"
                      >
                        <a href="/SignUp">
                          <span>Signup</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-569"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-569"
                      >
                        <a href="/Login">
                          <span>Login</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  {/* <div
                    id="x-nav-wrap-mobile"
                    class="x-nav-wrap mobile x-collapsed"
                    data-x-toggleable="x-nav-wrap-mobile"
                    data-x-toggle-collapse="1"
                    aria-hidden="true"
                    aria-labelledby="x-btn-navbar"
                  ></div> */}

                  <div
                    id="x-nav-wrap-mobile"
                    class="x-nav-wrap mobile x-collapsed"
                    data-x-toggleable="x-nav-wrap-mobile"
                    data-x-toggle-collapse="1"
                    aria-hidden="true"
                    aria-labelledby="x-btn-navbar"
                  >
                    <ul id="menu-primary-menu-1" class="x-nav">
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-570">
                        <a href="/About">
                          <span>About</span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-567">
                        <a href="/Calculator">
                          <span>Calculator</span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-571">
                        <a href="/OrderNow">
                          <span>Order now</span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568">
                        <a href="/Testmonials">
                          <span>Testmonials</span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568">
                        <a href="/FAQ">
                          <span>FAQ</span>
                        </a>
                      </li>

                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568">
                        <a href="/ContactUs">
                          <span>Contact Us</span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568">
                        <a href="/SignUp">
                          <span>Signup</span>
                        </a>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568">
                        <a href="/Login">
                          <span>Login</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
export default Header;
