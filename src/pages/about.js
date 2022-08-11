import React from "react";
import pdf from "./resume.pdf";

class About extends React.Component {
  render() {
    return (
      <div>
        <main id="main">
          <section class="section pb-5">
            <div class="container">
              <div class="row mb-5 align-items-end">
                <div class="col-md-6" data-aos="fade-up">
                  <h2>Hi, I'm Pallabi Ghosh Das</h2>
                  <p class="mb-0">
                    I’m a UX/UI Designer with a passion for user research,
                    prototyping. My goal as a designer is to fuse creativity
                    with analytical thinking to deliver intuitive solutions for
                    all users. My experience has taught me how to identify
                    customer pain points and present solutions that work for
                    clients.
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4 ml-auto order-2" data-aos="fade-up">
                  <h3 class="h3 mb-4">Skills</h3>
                  <p class="h3 mb-4">UX/UI</p>
                  <ul class="list-unstyled">
                    <li class="mb-3">
                      <div class="d-flex mb-1">
                        <strong>User Research</strong>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div class="d-flex mb-1">
                        <strong>UI Design</strong>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div class="d-flex mb-1">
                        <strong>Wireframing</strong>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div class="d-flex mb-1">
                        <strong>Prototyping</strong>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div class="d-flex mb-1">
                        <strong>Usability Testing</strong>
                      </div>
                    </li>
                  </ul>
                  <p class="h3 mb-4">Tools</p>
                  <ul class="list-unstyled">
                    <li class="mb-3">
                      <div class="d-flex mb-1">
                        <strong>Figma</strong>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div class="d-flex mb-1">
                        <strong>Sketch</strong>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div class="d-flex mb-1">
                        <strong>Adobe Illustrator</strong>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div class="d-flex mb-1">
                        <strong>Blender</strong>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div class="d-flex mb-1">
                        <strong>Procreate</strong>
                      </div>
                    </li>
                  </ul>
                  <p class="h3 mb-4">Visual</p>
                  <ul class="list-unstyled">
                    <li class="mb-3">
                      <div class="d-flex mb-1">
                        <strong>Layout &amp; Grid</strong>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div class="d-flex mb-1">
                        <strong>Typography</strong>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div class="d-flex mb-1">
                        <strong>Style Guides</strong>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div class="d-flex mb-1">
                        <strong>User persona</strong>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="col-md-7 mb-5 mb-md-0" data-aos="fade-up">
                  <p>
                    <img
                      src="assets/img/person4.jpg"
                      alt="Image"
                      class="img-fluid"
                    />
                  </p>
                  <h2 class="career-class">My career so far</h2>
                  <p>
                    I am working with web app development and UX design for one
                    year. After, I relocated to Denmark from India, I changed my
                    profession from school teacher to IT developer.
                  </p>
                  <p>
                    I'm also skilled in various design tools, performing
                    different roles, using clear communication, and
                    collaborating across multiple teams to meet deadlines.
                  </p>
                  <p>
                    I am closely working with the interaction design as well as
                    the frontend team. I specialize in multiple programming
                    languages and frameworks.
                  </p>
                  <p>
                    I aspire to work on impactful projects and contribute with
                    all my skills as well as learn continually.
                  </p>
                  <p>
                    <a href={pdf} class="readmore" style={{ textDecoration: 'none' }} target="_blank">
                      Download my CV
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default About;
