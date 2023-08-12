import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../Context/DataContext";
import NavLink from "../Nav/NavLinks";
import EventCard from "./EventCards";

export default function HomePage() {
  const { data } = useContext(DataContext);
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("");

  const optionEvents =
    data?.meetups?.filter((item) => item.eventType === option).length === 0
      ? data?.meetups
      : data?.meetups?.filter((item) => item.eventType === option);

  const filteredData = optionEvents.filter((item) =>
    item?.title.toLowerCase().includes(search)
  );

  const selectedOptions = (e) => {
    setOption(e.target.value);
  };

  const searchData = (e) => {
    setSearch(e.target.value);
  };

  console.log(filteredData);

  return (
    <div>
      <div className="navHeader">
        <NavLink />
        <input
          style={{ float: "right", marginTop: "-3rem" }}
          placeholder="Search by Title or Tags"
          onChange={(e) => {
            searchData(e);
          }}
        />
      </div>
      <br />
      <hr />
      <div className="homeAndSearch">
        <h1 style={{ textAlign: "center" }}>Meetup Events</h1>
        <div>
          <select
            onChange={(e) => {
              selectedOptions(e);
            }}
          >
            <option>Select Event Type</option>
            <option>Online</option>
            <option>Offline</option>
          </select>
        </div>
      </div>
      <div>
        <ul className="eventsUl">
          {filteredData.map((item) => {
            const {
              id,
              title,
              eventStartTime,
              eventEndTime,
              location,
              address,
              eventThumbnail,
              eventDescription,
              hostedBy,
              eventType,
              eventTags,
              speakers
            } = item;
            return (
              <li key={id}>
                <Link
                  to={`/events/${id}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <EventCard
                    props={{
                      id,
                      title,
                      eventStartTime,
                      eventEndTime,
                      location,
                      address,
                      eventThumbnail,
                      eventDescription,
                      hostedBy,
                      eventType,
                      eventTags,
                      speakers
                    }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
