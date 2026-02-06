import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
// import Events from './components/Events';
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate(); // hook for navigation
  return (
    <div className="common_container">
      {/* nav-bar */}
      <nav>
        <div className="company_title">NEARMEET 
          {/* <button onClick={() => window.location.href='/events'}>EVENTS</button> */}
        </div>
        <div className="nav_links">

          <Link to="/">HOME</Link>
          <Link to="/events">EVENTS</Link>
          <Link to="/sponsors">SPONSORS</Link>
          <Link to="/venue">VENUE</Link>
          <Link to="/agenda">AGENDA</Link>

        </div>
        <div className="login_container">
          {/* <a href="">LOGIN</a> */}
          <Link to="/login">LOGIN</Link>
        </div>
      </nav>

      <div className="main_container">
        {/* Home title section */}
        <div className="upcoming_events_title_and_box_colored_container">
          <div className="box_colored_container"></div>
          <div className="upcoming_events_title">HOME</div>
        </div>

        {/* Hero section */}
        <div className="home_page_img_conatiner">
          <div className="img_div_holder">
            <div className="text_bg_container">
              <div className="neighbor_title_container">
                NEIGHBORHOOD{" "}
                <span className="highlighted_title">EVENT</span> MANAGEMENT
                SYSTEM
              </div>
              <div className="neighbor_title_description">
                A smart platform for local gatherings, festivals, and community
                meetups.
              </div>
              <div className="contact_and_signup_container">
                <div className="contact_btn_container">
                  {/* <a href="" className="signup_link"> */}
                    <Link to="/register" className="signup_link">
                      SIGN UP
                    </Link>
                  {/* </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="big_font">
            <marquee behavior="" direction="rtl">
              NEIGHBORHOOD EVENT MANAGEMENT SYSTEM NEIGHBORHOOD EVENT MANAGEMENT
              SYSTEM NEIGHBORHOOD EVENT MANAGEMENT SYSTEM
            </marquee>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="upcoming_events_container">
          <div className="upcoming_events_title_and_box_colored_container">
            <div className="box_colored_container"></div>
            <div className="upcoming_events_title">UPCOMING EVENTS</div>
          </div>
          <div className="events_filters_container">
            <div className="event_img_filter_container event_img_bg_1"></div>
            <div className="event_img_filter_container event_img_bg_2"></div>
            <div className="event_img_filter_container event_img_bg_3"></div>
          </div>
        </div>

        {/* Events of the speaker */}
        <div className="events_conatiner">
          <div className="speaker_title">
            EVENTS <span>OF</span> THE SPEAKER
          </div>
          <div className="two_lines_and_icon_container">
            <div className="lines_and_icon_holder">
              <div className="line_holder_speaker"></div>
              <div className="icon_speaker_container">
                <i className="fa-solid fa-calendar-week calendar_icon"></i>
              </div>
              <div className="line_holder_speaker"></div>
            </div>
          </div>
          <div className="u_might_also_love_content">
            You might also love these events.
          </div>

          <div className="love_events_container_speaker">
            {/* Event 1 */}
            <div className="love_event_container1">
              <div className="love_speaker_img_container">
                <img
                  src="/Images/people-meeting-room-having-conference.jpg"
                  alt="event"
                />
              </div>
              <div className="event_title_and_event_update_love_speaker">
                <div className="event_title_love_speaker_box">
                  Milano 23T Meeting
                </div>
              </div>
              <div className="event_type_and_date_love_speaker">
                <div className="event_type_love_speak_holder">BUSINESS</div>
                <div className="date_love_speak_holder">October 14, 2025</div>
              </div>
              <div className="event_description_love_speaker">
                Join industry leaders at Milano 23T Meeting to explore the
                future of technology. Discover the latest innovations and gain
                valuable insights.
              </div>
            </div>

            {/* Event 2 */}
            <div className="love_event_container1">
              <div className="love_speaker_img_container">
                <img src="/Images/speaker-img-2.jpg" alt="event" />
              </div>
              <div className="event_title_and_event_update_love_speaker">
                <div className="event_title_love_speaker_box">
                  Eventchamp Conference
                </div>
              </div>
              <div className="event_type_and_date_love_speaker">
                <div className="event_type_love_speak_holder">BUSINESS</div>
                <div className="date_love_speak_holder">November 15, 2025</div>
              </div>
              <div className="event_description_love_speaker">
                Eventchamp Conference is an exceptional gathering of event
                professionals from across the globe. Join us for insightful
                discussions, and inspiration!
              </div>
            </div>

            {/* Event 3 */}
            <div className="love_event_container1">
              <div className="love_speaker_img_container">
                <img src="/Images/speaker-img-3.jpg" alt="event" />
              </div>
              <div className="event_title_and_event_update_love_speaker">
                <div className="event_title_love_speaker_box">
                  Fashion Carnival
                </div>
              </div>
              <div className="event_type_and_date_love_speaker">
                <div className="event_type_love_speak_holder">ART</div>
                <div className="date_love_speak_holder">December 16, 2025</div>
              </div>
              <div className="event_description_love_speaker">
                Experience the ultimate fashion extravaganza at the Fashion
                Carnival! Join us for a day of runway shows, pop-up shops, and
                live entertainment.
              </div>
            </div>
          </div>
        </div>

        {/* Why choose NearMeet */}
        <div className="choose_nearmeet_container">
          <div className="speaker_title">
            WHY <span>CHOOSE</span> NEARMEET?
          </div>
          <div className="two_lines_and_icon_container">
            <div className="lines_and_icon_holder">
              <div className="line_holder_speaker"></div>
              <div className="icon_speaker_container">
                <i className="fa-brands fa-ethereum calendar_icon"></i>
              </div>
              <div className="line_holder_speaker"></div>
            </div>
          </div>
          <div className="u_might_also_love_content">
            We simplify planning, boost engagement, and create unforgettable
            experiences.
          </div>

          <div className="all_sponsors_holder">
            <div className="sponsor_whole_holder">
              <div className="icon_holder_sponsor">
                <i className="fa-solid fa-house-chimney icon_size_sponsor"></i>
              </div>
              <div className="title_sponsor">EVENT MANAGEMENT</div>
              <div className="title_description_sponsor">
                Host community gatherings effortlessly with our platform—
                festivals, meetups, celebrations, and more. Bring your
                neighborhood together today!
              </div>
            </div>

            <div className="sponsor_whole_holder">
              <div className="icon_holder_sponsor">
                <i className="fa-solid fa-handshake-angle icon_size_sponsor"></i>
              </div>
              <div className="title_sponsor">COMMUNITY MEETUPS</div>
              <div className="title_description_sponsor">
                Connect neighbors through hobby clubs, volunteer drives, and
                workshops. Build stronger bonds right where you live!
              </div>
            </div>

            <div className="sponsor_whole_holder">
              <div className="icon_holder_sponsor">
                <i className="fa-solid fa-bullhorn icon_size_sponsor"></i>
              </div>
              <div className="title_sponsor">EASY COORDINATION</div>
              <div className="title_description_sponsor">
                Forget the confusion of posters and group chats. Share updates
                instantly and keep everyone informed in one place!
              </div>
            </div>
          </div>
        </div>

        {/* Sponsors */}
        <div className="sponsor_container">
          <div className="speaker_title">
            OUR <span>SPONSORS</span>
          </div>
          <div className="two_lines_and_icon_container">
            <div className="lines_and_icon_holder">
              <div className="line_holder_speaker"></div>
              <div className="icon_speaker_container">
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
                <i className="fa-solid fa-store icon_size_sponsor"></i>
              </div>
              <div className="title_sponsor">SHOPS & RETAILERS</div>
            </div>

            <div className="sponsor_whole_holder">
              <div className="icon_holder_sponsor">
                <i className="fa-solid fa-dumbbell icon_size_sponsor"></i>
              </div>
              <div className="title_sponsor">GYMS & FITNESS CENTER</div>
            </div>

            <div className="sponsor_whole_holder">
              <div className="icon_holder_sponsor">
                <i className="fa-solid fa-building-ngo icon_size_sponsor"></i>
              </div>
              <div className="title_sponsor">GOVERNMENTS & NGO</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer_content">
          Copyright © 2025 NearMeet - All rights reserved.
        </div>
      </footer>
    </div>
  );
}
