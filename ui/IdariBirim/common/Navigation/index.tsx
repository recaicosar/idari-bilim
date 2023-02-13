import React from "react";

export const Navigation = () => {
  return (
    <nav className="nav-bar">
      <div className="container">
        <div className="box-content d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="#" className="logo-nav">
              <img className="img-fluid" src="assets/images/L1.png" alt="" />
            </a>
            <a href="#open-nav-bar-menu" className="open-nav-bar">
              <span />
              <span />
              <span />
            </a>
          </div>
          <div className="nav-bar-link" id="open-nav-bar-menu">
            <ul className="level-1">
              <li className="has-menu">
                <a href="#" className="color-active">
                  Başkanlık
                </a>
                <ul className="level-2">
                  <li>
                    <a href="#">Başkanın Mesajı</a>
                  </li>
                  <li>
                    <a href="#">Genel Bilgiler</a>
                  </li>
                  <li>
                    <a href="#">Tarihçe</a>
                  </li>
                  <li>
                    <a href="#">Kurumsal</a>
                  </li>
                  <li>
                    <a href="#">Organizasyon Şeması</a>
                  </li>
                  <li>
                    <a href="#">İdari Birimler ve Personel</a>
                  </li>
                  <li>
                    <a href="#">Faaliyet Raporları</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Birimlerimiz</a>
              </li>
              <li className="has-menu">
                <a href="#">Hizmetler</a>
                <ul className="level-2">
                  <li>
                    <a href="#">Hizmetler 1</a>
                  </li>
                  <li>
                    <a href="#">Hizmetler 2</a>
                  </li>
                  <li>
                    <a href="#">Hizmetler 3</a>
                  </li>
                  <li>
                    <a href="#">Hizmetler 4</a>
                  </li>
                </ul>
              </li>
              <li className="has-menu">
                <a href="#">Bilgi ve Dökümanlar</a>
                <ul className="level-2">
                  <li>
                    <a href="#">Bilgi ve Dökümanlar 1</a>
                  </li>
                  <li>
                    <a href="#">Bilgi ve Dökümanlar 2</a>
                  </li>
                  <li>
                    <a href="#">Bilgi ve Dökümanlar 3</a>
                  </li>
                  <li>
                    <a href="#">Bilgi ve Dökümanlar 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">İletişim</a>
              </li>
            </ul>
          </div>
          <ul className="icon">
            <li>
              <a href="#" className="icon-item open-search-box">
                <i className="fas fa-search" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
