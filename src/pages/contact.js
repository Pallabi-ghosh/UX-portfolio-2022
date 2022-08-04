import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <main id="main">
          <section class="section pb-5">
            <div class="container">
              <div class="row mb-5 align-items-end">
                <div class="col-md-6" data-aos="fade-up">
                  <h2>Contact</h2>
                  <p class="mb-0">Let's talk design!</p>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4 ml-auto order-2" data-aos="fade-up">
                  <ul class="list-unstyled">
                    <li class="mb-3">
                      <strong class="d-block mb-1">Address</strong>
                      <span>Valby, Denmark 2500 </span>
                    </li>
                    <li class="mb-3">
                      <strong class="d-block mb-1">Phone</strong>
                      <span>+45 71861426</span>
                    </li>
                    <li class="mb-3">
                      <strong class="d-block mb-1">Email</strong>
                      <span>pallabighosh3100@gmail.com</span>
                    </li>
                  </ul>
                  <div class="col-md-6 mt-0 form-group">
                    <div class="hiring">
                      <a
                        href="mailto:pallabighoshdas@gmail.com"
                        class="readmore d-block w-100"
                      >
                        Hire me!<span></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Contact;
