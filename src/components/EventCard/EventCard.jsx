import styles from './EventCard.module.scss';

const monthToNumber = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12',
};

function toDateTime(date, year) {
  const [month, day] = date.split(' ');
  return `${year}-${monthToNumber[month]}-${day.padStart(2, '0')}`;
}

const EventCard = ({ event }) => {
  const eventDate = [event.date, event.day, event.year].filter(Boolean).join(', ');
  const eventDetails = [event.time, event.type].filter(Boolean).join(', ');
  const dateTime = toDateTime(event.date, event.year);

  return (
    <article className={styles.card}>
      <a href="/events" className={styles.link}>
        <span className={styles.category}>{event.category}</span>
        <h3 className={styles.title}>{event.title}</h3>
        <div className={styles.details}>
          <time dateTime={dateTime}>{eventDate}</time>
          {eventDetails ? `, ${eventDetails}` : ''}
        </div>
      </a>
    </article>
  );
};
    
export default EventCard;
