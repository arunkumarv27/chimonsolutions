/* eslint-disable */
import React from 'react';

const FeatrueSectionAnother = () => {
  return (
    <>
      <section className="feature-section">
        <div className="background-div home-tech-bg"></div>
        <div className="background-div green-side"></div>

        <div className="container w-container">
          <div className="w-layout-grid two-col-grid-full">
            <div>
              <h2 className="heading_caps-md">Next-generation small molecule therapeutics</h2>
              <p className="p-large-ovp">
                <strong>Drugging the cellular mechanisms that cause disease</strong>
              </p>
              <p>
                Most drug programs focus on binding molecules to a purified “target” protein, hoping
                that binding will drive a desired downstream function. Octant engineers biology and
                chemistry at massive scales to modulate the function itself, targeting complex
                cellular mechanisms that drive disease. We've focused these efforts internally on
                correcting diseases of protein misfolding and mistrafficking.
                <br />
              </p>
              <a href="/pipeline" className="button-2 w-button">
                Pipeline
              </a>
            </div>

            <div
              id="w-node-cdb4a8ba-1dfb-1fa1-fefb-6d8b7df3427e-1245167e"
              className="feature-image-mask img-right"
            >
              {/* <img
                                src="https://cdn.prod.website-files.com/6137ced70371b3cf7b45167d/65bd11ae191679f59ed99073_pipeline-cta-graphic.webp"
                                sizes="100vw"
                                srcSet="
                  https://cdn.prod.website-files.com/6137ced70371b3cf7b45167d/65bd11ae191679f59ed99073_pipeline-cta-graphic-p-500.webp  500w,
                  https://cdn.prod.website-files.com/6137ced70371b3cf7b45167d/65bd11ae191679f59ed99073_pipeline-cta-graphic-p-800.webp  800w,
                  https://cdn.prod.website-files.com/6137ced70371b3cf7b45167d/65bd11ae191679f59ed99073_pipeline-cta-graphic-p-1080.webp 1080w,
                  https://cdn.prod.website-files.com/6137ced70371b3cf7b45167d/65bd11ae191679f59ed99073_pipeline-cta-graphic.webp          1116w
                "
                                alt=""
                                className="feature-image"
                            /> */}
            </div>
          </div>
        </div>

        <div className="container w-container">
          <div className="w-layout-grid two-x-two-grid">
            <div>
              <h3 className="heading_caps-sm">High-throughput synthetic biology</h3>
              <p>
                We build custom sensors in human cells to disentangle and model the cellular
                mechanisms driving disease, for example, how a drug candidate interacting with a
                misfolded protein is affecting cellular function.
              </p>
            </div>
            <div>
              <h3 className="heading_caps-sm">High-throughput chemistry</h3>
              <p>
                Engineering small molecules to modulate biological mechanisms requires
                high-throughput explorations of local chemical diversity in living cells.
              </p>
            </div>
            <div>
              <h3 className="heading_caps-sm">Barcoded Multiplexing</h3>
              <p>
                Barcoded sensors quantify subtle effect sizes across thousands of experiments,
                critical for powering direct-to-biology chemistry and large AI/ML datasets.
              </p>
            </div>
            <div>
              <h3 className="heading_caps-sm">Big Data for Drug discovery</h3>
              <p>
                The Octant platform is enabled, processed, and accelerated by our advanced AI/ML
                pipelines and tools. Our proprietary chemical biology datasets generate unique
                insights from millions of data points to advance drug programs.
              </p>
            </div>
            <div className="spacer grid-holder"></div>
            <div>
              <a href="/technology" className="button-2 w-button">
                The Octant Navigator
              </a>
            </div>
          </div>
        </div>
      </section>

      
      <style jsx global>{`
        /* --- Base Resets / Global Styles --- */
        * {
          box-sizing: border-box;
        }

        html {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          font-family: sans-serif;
        }

        body {
          color: var(--midnight-blue);
          font-family: Avenir, sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 28px;
          background-color: #fff;
          margin: 0;
          min-height: 100%;
        }

        :root {
          --midnight-blue: #0e1c3d;
          --royal-blue: #1d65bf;
          --green-medium: #007d47;
          --green-light: #31bc7c;
          --light-slate-grey: #7b8394;
        }

        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        main,
        menu,
        nav,
        section,
        summary {
          display: block;
        }

        section {
          display: block;
          unicode-bidi: isolate;
        }

        img {
          max-width: 100%;
          display: inline-block;
          vertical-align: middle;
        }

        /* --- Feature Section Styles --- */
        .feature-section {
          padding-top: 100px;
          padding-bottom: 60px;
          position: relative;
        }

        .background-div {
          z-index: -50;
          position: absolute;
          inset: -2px 0%;
        }

        .background-div.home-tech-bg {
          background-color: #eff7f3;
          background-image: url('https://cdn.prod.website-files.com/6137ced…/613a4b2…_jagged-negative-white-bottom.svg'),
            url('https://cdn.prod.website-files.com/6137ced…/613a4b2…_jagged-negative-white-top.svg');
          background-position: 50% 100%, 50% 0;
          background-repeat: no-repeat, no-repeat;
          background-size: 101%, 101%;
          width: 60%;
          inset: 0% auto 0% 0%;
        }

        .background-div.green-side {
          background-image: url('https://cdn.prod.website-files.com/6137ced…/6139322…_side-graphic-green.svg');
          background-position: 0 150px;
          background-repeat: no-repeat;
          background-size: contain;
          width: 5%;
          inset: 0% auto 0% 0%;
        }

        .container {
          width: 84%;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 60px;
          position: relative;
        }

        .w-container {
          max-width: 940px;
          margin-left: auto;
          margin-right: auto;
        }

        .w-layout-grid {
          display: grid;
          grid-row-gap: 16px;
          grid-column-gap: 16px;
          grid-template-rows: auto auto;
          grid-template-columns: 1fr 1fr;
          grid-auto-columns: 1fr;
        }

        .two-col-grid-full {
          grid-column-gap: 16px;
          grid-row-gap: 16px;
          grid-template-rows: auto;
          grid-template-columns: 1fr 1fr;
        }

        .feature-image-mask {
          width: 90%;
        }

        .feature-image-mask.img-right {
          margin-left: auto;
        }

        .feature-image {
          object-fit: contain;
          object-position: 50% 0%;
          margin-left: auto;
          margin-right: auto;
          display: block;
        }

        .two-x-two-grid {
          grid-column-gap: 40px;
          grid-row-gap: 40px;
          grid-template-rows: auto auto auto;
          width: 84%;
          margin-left: auto;
          margin-right: auto;
        }

        .heading_caps-sm {
          letter-spacing: 0;
          text-transform: uppercase;
          margin-top: 0.5em;
          margin-bottom: 0.5em;
          font-family: Overpass, sans-serif;
          font-size: 28px;
          font-weight: 600;
          line-height: 1.2em;
        }

        .heading_caps-md {
          font-family: Overpass, sans-serif;
          font-size: 36px;
          font-weight: 600;
          text-transform: uppercase;
          margin-top: 0.5em;
          margin-bottom: 0.5em;
        }

        .p-large-ovp {
          font-size: 20px;
          line-height: 1.4em;
        }

        .button-2 {
          display: inline-block;
          padding: 12px 24px;
          background-color: var(--green-medium);
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }

        .button-2:hover {
          background-color: var(--green-light);
        }

        .spacer.grid-holder {
          min-height: 1px;
        }
      `}</style>
    </>
  );
};

export default FeatrueSectionAnother;
