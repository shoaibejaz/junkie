import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <footer class="x-colophon bottom" role="contentinfo">
          <div class="x-container max width">
            {/* <div class="x-colophon-content">
              <p>
                POWERED BY THE{" "}
                <a
                  target="http://niofox.herokuapp.com/"
                  href="http://niofox.herokuapp.com/"
                  title=""
                >
                  Niofox
                </a>
              </p>{" "}
            </div> */}

            <ul id="menu-primary-menu-2" class="x-nav">
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-7 current_page_item menu-item-569">
                <a href="/" aria-current="page">
                  Home
                </a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-570">
                <a href="/About">About</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-567">
                <a href="">Calculator</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-571">
                <a href="">OrderNow</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568">
                <a href="/Testmonials">Testmonials</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568">
                <a href="/FAQ">FAQ</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568">
                <a href="/ContactUs">Contact US</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568">
                <a href="SignUp">Signup</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-568">
                <a href="Login">Login</a>
              </li>
            </ul>
            {/* <div class="x-social-global"><a href="#" class="facebook" title="Facebook" target="blank" rel="noopener noreferrer"><i class="fa fa-facebook" data-x-icon-b="&#xf082;" aria-hidden="true"></i></a><a href="#" class="twitter" title="Twitter" target="blank" rel="noopener noreferrer"><i class="x-icon-twitter-square" data-x-icon-b="&#xf081;" aria-hidden="true"></i></a><a href="#" class="linkedin" title="LinkedIn" target="blank" rel="noopener noreferrer"><i class="x-icon-linkedin-square" data-x-icon-b="&#xf08c;" aria-hidden="true"></i></a><a href="#" class="instagram" title="Instagram" target="blank" rel="noopener noreferrer"><i class="x-icon-instagram" data-x-icon-b="&#xf16d;" aria-hidden="true"></i></a></div>         */}
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Header;
