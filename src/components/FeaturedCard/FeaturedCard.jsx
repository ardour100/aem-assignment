import heroImage from '../../assets/hero.jpg';
import styles from './FeaturedCard.module.scss';

const imageMap = {
  'hero.jpg': heroImage,
};

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

const FeaturedCard = ({ event }) => {
  const eventDate = [event.date, event.day, event.year].filter(Boolean).join(', ');
  const eventDetails = [event.time, event.type].filter(Boolean).join(', ');
  const imageSrc = imageMap[event.image];
  const dateTime = toDateTime(event.date, event.year);
  const imageAlt = `${event.title} event image`;

  return (
    <article>
      <a href="/events" className={styles.link}>
        {imageSrc ? <img src={imageSrc} alt={imageAlt} className={styles.image} /> : null}
        <div className={styles.content}>
          <span className={styles.category}>{event.category}</span>
          <h3 className={styles.title}>{event.title}</h3>
          <div className={styles.details}>
            <time dateTime={dateTime}>{eventDate}</time>
            {eventDetails ? `, ${eventDetails}` : ''}
          </div>
        </div>
      </a>
    </article>
  );
};
  
export default FeaturedCard;
