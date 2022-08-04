import React from "react";

class NikeDailyUI extends React.Component {
  render() {
    return (
      <div>
        <main id="main">
          <section class="section">
            <div class="container">
              <div class="row mb-4 align-items-center">
                <div class="col-md-6" data-aos="fade-up">
                  <h2>Daily UI challange</h2>
                  <p>Nike online page.</p>
                </div>
              </div>
            </div>

            <section class="section-design-process">
              <div class="container">
                <div class="row align-items-stretch">
                  <div class="interviews" data-aos="fade-up">
                    <img
                      src="assets/img/Nike1.png"
                      alt="Image"
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="row mb-4 align-items-center">
                  <div class="col-md-6" data-aos="fade-up">
                    <p class="mb-4">
                      <span class="text-muted">Overview</span>
                    </p>
                    <p>
                      I started the Daily UI Challenge to improve my skills as a
                      designer, have fun and experiment. I gave myself 1 hour to
                      complete the challenge.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div class="container">
              <div class="row mb-4 align-items-center">
                <div class="col-md-6" data-aos="fade-up">
                  <h2 class="user-interview-description">Rationale</h2>
                  <p>I have designed this online web page for Nike.</p>
                </div>
              </div>
            </div>

            <section class="section-design-process">
              <div class="container">
                <div class="row align-items-stretch">
                  <div class="interviews" data-aos="fade-up">
                    <img
                      src="assets/img/Component114.png"
                      alt="Image"
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </section>
          </section>
        </main>
      </div>
    );
  }
}

export default NikeDailyUI;
