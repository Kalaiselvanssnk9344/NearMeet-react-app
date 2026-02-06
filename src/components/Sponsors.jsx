import React from "react";
import { Link } from "react-router-dom";

function Sponsors() {
  return (
    <div className="common_container">
      <nav>
        <div className="company_title">NEARMEET</div>
        <div className="nav_links">
          {/* <a href="">HOME</a>
          <a href="">EVENTS</a>
          <a href="">SPONSORS</a>
          <a href="">VENUE</a>
          <a href="">AGENDA</a> */}
          <Link to="/">HOME</Link>
          <Link to="/events">EVENTS</Link>
          <Link to="/sponsors">SPONSORS</Link>
          <Link to="/venue">VENUE</Link>
          <Link to="/agenda">AGENDA</Link>
        </div>
        <div className="login_container">
          <a href="">LOGIN</a>
        </div>
      </nav>

      <div className="page_naved_container">
        <div className="page_title">SPONSORS</div>
        <div className="naved_direction_title">
          HOME &gt; <span>SPONSORS</span>
          {/* <i className="fa-solid fa-greater-than greater_than_icon"></i> */}
        </div>
      </div>

      <div className="sponsor_container">
        <div className="speaker_title">
          OUR <span>SPONSORS</span>
        </div>
        <div className="two_lines_and_icon_container">
          <div className="lines_and_icon_holder">
            <div className="line_holder_speaker"></div>
            <div className="icon_speaker_container">
              {/* <i className="fa-brands fa-ethereum calendar_icon"></i> */}
              <i className="fa-solid fa-building calendar_icon"></i>
            </div>
            <div className="line_holder_speaker"></div>
          </div>
        </div>
        <div className="u_might_also_love_content">
          Connecting neighbors and local organizers to create unforgettable
          community events together.
        </div>

        <div className="all_sponsors_holder">
          <div className="sponsor_whole_holder">
            <div className="icon_holder_sponsor">
              {/* <i className="fa-solid fa-house-chimney icon_size_sponsor"></i> */}
              <i className="fa-solid fa-store icon_size_sponsor"></i>
            </div>
            <div className="title_sponsor">SHOPS & RETAILERS</div>
          </div>

          <div className="sponsor_whole_holder">
            <div className="icon_holder_sponsor">
              {/* <i className="fa-solid fa-handshake-angle icon_size_sponsor"></i> */}
              <i className="fa-solid fa-dumbbell icon_size_sponsor"></i>
            </div>
            <div className="title_sponsor">GYMS & FITNESS CENTER</div>
          </div>

          <div className="sponsor_whole_holder">
            <div className="icon_holder_sponsor">
              {/* <i className="fa-solid fa-bullhorn icon_size_sponsor"></i> */}
              <i className="fa-solid fa-building-ngo icon_size_sponsor"></i>
            </div>
            <div className="title_sponsor">GOVERNMENTS & NGO</div>
          </div>
        </div>

        <div className="all_sponsors_holder">
          <div className="sponsor_whole_holder">
            <div className="icon_holder_sponsor">
              <i className="fa-solid fa-mug-saucer icon_size_sponsor"></i>
            </div>
            <div className="title_sponsor">CAFES & RESTAURANTS</div>
          </div>

          <div className="sponsor_whole_holder">
            <div className="icon_holder_sponsor">
              <i className="fa-solid fa-graduation-cap icon_size_sponsor"></i>
            </div>
            <div className="title_sponsor">SCHOOLS & COLLEGES</div>
          </div>

          <div className="sponsor_whole_holder">
            <div className="icon_holder_sponsor">
              <i className="fa-solid fa-music icon_size_sponsor"></i>
            </div>
            <div className="title_sponsor">ARTISTS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
