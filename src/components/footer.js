import React from "react";

class Footer extends React.Component {
  render() {
    return <div>
        <footer class="footer" role="contentinfo">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-1">
                  &copy; Copyright MyPortfolio. Pallabi Ghosh Das 2022
                </p>
              </div>
              <div class="col-sm-6 social text-md-end" >
                <a href="https://github.com/Pallabi-ghosh">
                  <span class="bi bi-github"></span>
                </a>
                <a href="https://dribbble.com/Pallabi_Ghosh_Das">
                  <span class="bi bi-dribbble"></span>
                </a>
                <a href="https://www.linkedin.com/in/contactpallabi/">
                  <span class="bi bi-linkedin"></span>
                </a>
                <a href="https://twitter.com/PallabiGhoshDas">
                  <span class="bi bi-twitter"></span>
                </a>
              </div>
            </div>
          </div>
        </footer>

        <a
          href="#"
          class="back-to-top d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-arrow-up-short"></i>
        </a>

        <script src="assets/vendor/aos/aos.js"></script>
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script>

        <script src="assets/js/main.js"></script>
    </div>;
  }
}

export default Footer;
