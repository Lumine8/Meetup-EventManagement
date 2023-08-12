import { useContext, useState } from "react";
import { Clock3, MapPin, IndianRupee } from "lucide-react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { Link } from "react-router-dom";

import { DataContext } from "../Context/DataContext";
import NavLink from "../Nav/NavLinks";

export default function EventsPage() {
  const { eventId } = useParams();
  const { data } = useContext(DataContext);
  const [search, setSearch] = useState("");

  const filteredData = data?.meetups.filter((item) =>
    item?.title.toLowerCase().includes(search)
  );

  const eventData = data?.meetups.filter((item) => item.id === eventId);

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
    speakers,
    price,
    additionalInformation
  } = eventData[0];

  const [modalIsOpen, setIsOpen] = useState(false);
  const [rsvp, setRSVP] = useState(false);

  function openModal() {
    setIsOpen(true);
    setRSVP(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };

  return (
    <>
      <NavLink />
      <Link to="/">
        <input
          style={{ float: "right", marginTop: "-3rem" }}
          placeholder="Search by Title or Tags"
          onChange={(e) => {
            searchData(e);
          }}
        />
      </Link>
      <hr />
      <div className="EventsDetails">
        <div className="eventDes">
          <h2>{title}</h2>
          <h3>hosted by: {hostedBy}</h3>
          <img style={{ maxWidth: "500px" }} src={eventThumbnail} alt={title} />
          <h2>Details:</h2>
          <p style={{ textAlign: "left" }}>{eventDescription}</p>

          <div style={{ textAlign: "left" }}>
            <h3>Additional Information</h3>
            <p>
              <span>Dress Code: </span>
              {additionalInformation.dressCode}
            </p>
            <p>
              <span>Age Restrictions: </span>
              {additionalInformation.ageRestrictions}
            </p>
          </div>
          <h2>Event Tags</h2>
          <p>
            {eventTags.map((item) => (
              <button style={{ margin: "0 10px" }}>{item}</button>
            ))}
          </p>
        </div>
        <div className="eventDetails">
          <div className="timeDetails">
            <p>
              <Clock3 size={15} style={{ marginBottom: "-3px" }} /> &nbsp;
              {new Date(eventStartTime).toString().slice(0, 25)} to <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              {new Date(eventEndTime).toString().slice(0, 25)}
            </p>
            <p>
              <MapPin size={15} style={{ marginBottom: "-3px" }} /> {location},{" "}
              {address}
            </p>
            <p>
              <IndianRupee size={15} style={{ marginBottom: "-3px" }} />
              {price === "Free" ? "Free" : ` ${price}`}
            </p>
          </div>
          <div>
            <h2>Speakers</h2>
            <ul className="speakers">
              {speakers.map((item) => {
                const { name, image, designation } = item;
                return (
                  <li>
                    <img src={image} alt={name} />
                    <p>
                      <span style={{ fontWeight: "bolder" }}>{name}</span>
                    </p>
                    <p>{designation}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <button disabled={rsvp} className="RSVP" onClick={openModal}>
            {rsvp ? "Already RSVPed" : "RSVP"}
          </button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <br />
        <h2>Complete your RSVP</h2>
        <div>Fill in your personal details.</div>
        <form>
          <p>Name: </p>
          <input className="ModalInput" />
          <br />
          <p>Email: </p>
          <input className="ModalInput" />
          <br />
          <p>*You have to make the payment at the venue.</p>
          <button className="modalButton" onClick={closeModal}>
            RSVP
          </button>
        </form>
      </Modal>
    </>
  );
}
