import React from "react";

export const News = () => {
  return (
    <section className="blog py-70-70">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="blog-item">
              <div className="img-box">
                <a href="" className="open-post">
                  <img
                    className="img-fluid"
                    src="assets/images/blog/sbu-mob.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="text-box">
                <span className="blog-date">20 Ekim, 2020</span>
                <a href="" className="title-blog">
                  <h5>Üniversitemiz şimdi cebinizde.</h5>
                </a>
                <p>
                  Üniverstemizde planlanan etkinliklerden ve fırsatlardan sende
                  haberdar ol...
                </p>
                <a href="" className="link">
                  <span className="fas fa-arrow-right" /> Detay
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="blog-item">
              <div className="img-box">
                <a href="" className="open-post">
                  <img
                    className="img-fluid"
                    src="assets/images/blog/afiif.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="text-box">
                <span className="blog-date">20 Ekim, 2020</span>
                <a href="" className="title-blog">
                  <h5>Kampüsümüzde WİFİ Heyecanı.</h5>
                </a>
                <p>
                  Üniversite kampüsümüz içinde ve çevresinde sınırsız Wi-Fİ
                  heyecanı yakında...
                </p>
                <a href="" className="link">
                  <span className="fas fa-arrow-right" /> Detay
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="blog-item">
              <div className="img-box">
                <a href="" className="open-post">
                  <img
                    className="img-fluid"
                    src="assets/images/blog/kutuphane.jpg"
                    alt="03 Blog"
                  />
                </a>
              </div>
              <div className="text-box">
                <span className="blog-date">20 Ekim, 2020</span>
                <a href="" className="title-blog">
                  <h5>Yenilenen yüzüyle kütüphanemiz.</h5>
                </a>
                <p>
                  Akademik ve bir çok tür barındıran kütüphanemiz siz değerli
                  öğrencilerimizi bekliyor...
                </p>
                <a href="" className="link">
                  <span className="fas fa-arrow-right" /> Detay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
