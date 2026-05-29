import styles from './EventCard.module.scss';

const EventCard = ({ event }) => {
  const eventDate = [event.date, event.day, event.year].filter(Boolean).join(', ');
  const eventDetails = [event.time, event.type].filter(Boolean).join(', ');

  return (
    <article className={styles.card}>
      <a href="#" className={styles.link}>
        <span className={styles.category}>{event.category}</span>
        <h3 className={styles.title}>{event.title}</h3>
        <div className={styles.details}>
          <time>{eventDate}</time>
          {eventDetails ? `, ${eventDetails}` : ''}
        </div>
      </a>
    </article>
  );
};
    
export default EventCard;
