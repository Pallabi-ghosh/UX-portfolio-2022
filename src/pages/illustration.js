import React from "react";

class Illustration extends React.Component {
  render() {
    return (
      <div>
        <main id="main">
          <section class="section">
            <div class="container">
              <div class="row mb-4 align-items-center">
                <div class="col-md-6" data-aos="fade-up">
                  <h2>Freelancing work</h2>
                  <p>Illustrations</p>
                </div>
              </div>
            </div>

            <section class="section-design-process">
              <div class="container">
                <div class="row align-items-stretch">
                  <div class="interviews" data-aos="fade-up">
                    <img
                      src="assets/img/Frame88.png"
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
                      This picture shows us our life journey. Inspired by some
                      creative works off the internet blogs. Also, I took the
                      inspiration from youtube. A lady with nature. I have used
                      <strong> procreate</strong> as a tool for these
                      illustrations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div class="container">
              <div class="row mb-4 align-items-center">
                <div class="col-md-6" data-aos="fade-up">
                  <h2 class="user-interview-description">Rationale</h2>
                  <p>
                    As a freelancer I have worked on some really good projects
                    including these two illustrations.
                  </p>
                </div>
              </div>
            </div>

            <section class="section-design-process">
              <div class="container">
                <div class="row align-items-stretch">
                  <div class="interviews" data-aos="fade-up">
                    <img
                      src="assets/img/Component116.png"
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

export default Illustration;
