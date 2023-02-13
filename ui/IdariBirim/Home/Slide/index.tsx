import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { generateSlides } from "@/utils";
import "@splidejs/react-splide/css";

export const Slide: React.VoidFunctionComponent = () => {
  return (
    <header className="header" id="page">
      <Splide
        options={{
          perPage: 1,
          height: "30rem",
          rewind: true,
          gap: "1rem",
        }}
        aria-labelledby="basic-example-heading"
        onMoved={(splide, newIndex) => {
          // eslint-disable-next-line
          console.log("moved", newIndex);

          // eslint-disable-next-line
          console.log("length", splide.length);
        }}
      >
        {generateSlides().map((slide) => (
          <SplideSlide key={slide.src}>
            <div className="header-owl owl-carousel owl-theme">
              <div
                className="sec-hero display-table"
                style={{ backgroundImage: `url(${slide.src})` }}
              >
                <div
                  className="table-cell"
                  style={{ padding: "10vw", verticalAlign: "top" }}
                >
                  <div className="overlay" />
                  <div className="container position-absolute">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="banner">
                          <h1 className="handline">
                            Mobil Uygulamamız <br />
                            Yayınlanmıştır
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </header>
  );
};
