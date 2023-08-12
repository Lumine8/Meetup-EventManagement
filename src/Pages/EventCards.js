export default function EventCard({ props }) {
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
  } = props;
  return (
    <div className="eventCard">
      <div>
        <p className="type">{eventType}</p>
        <img src={eventThumbnail} alt={title} />
        <div style={{ textAlign: "left" }}>
          <p>
            {new Date(eventStartTime).toString().slice(0, 16)} {"○"}{" "}
            {new Date(eventStartTime).toString().slice(16, 25)}
          </p>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
}
