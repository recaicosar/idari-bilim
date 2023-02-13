import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="logo">
              <img className="img-fluid" src="assets/images/L1-b.png" alt="" />
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-2">
            <ul className="links">
              <li>
                <a href="">Bilgi Yönetim Sistemi (BYS)</a>
              </li>
              <li>
                <a href="">Aday Öğrenci Portalı</a>
              </li>
              <li>
                <a href="">Case Studies</a>
              </li>
              <li>
                <a href="">Akademik E-Posta</a>
              </li>
              <li>
                <a href="">Öğrenci E-Posta</a>
              </li>
              <li>
                <a href="">E-Rehber</a>
              </li>
              <li>
                <a href="">Kütüphane</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-2">
            <ul className="links">
              <li>
                <a href="">MUSEM</a>
              </li>
              <li>
                <a href="">Kurumsal</a>
              </li>
              <li>
                <a href="">Sayılarla SBU</a>
              </li>
              <li>
                <a href="">Arge</a>
              </li>
              <li>
                <a href="">Proje</a>
              </li>
              <li>
                <a href="">Toplumsal Sorumluluk</a>
              </li>
              <li>
                <a href="">Kariyer</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <ul className="links">
              <li>
                <a href="">Öğrenci Merkezi : 0216 000 00 00</a>
              </li>
              <li>
                <a href="">Öğrenci İşleri : 0216 000 00 00</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>Sağlık Bilimleri Üniversitesi Bilgi işlem Daire Başkanlığı</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
