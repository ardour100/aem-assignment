import heroImage from '../../assets/hero.jpg';
import styles from './FeaturedCard.module.scss';

const imageMap = {
  'hero.jpg': heroImage,
};

const FeaturedCard = ({ event }) => {
  const eventDate = [event.date, event.day, event.year].filter(Boolean).join(', ');
  const eventDetails = [event.time, event.type].filter(Boolean).join(', ');
  const imageSrc = imageMap[event.image];

  return (
    <article>
      <a href="#" className={styles.link}>
        {imageSrc ? <img src={imageSrc} alt="" className={styles.image} /> : null}
        <div className={styles.content}>
          <span className={styles.category}>{event.category}</span>
          <h3 className={styles.title}>{event.title}</h3>
          <div className={styles.details}>
            <time>{eventDate}</time>
            {eventDetails ? `, ${eventDetails}` : ''}
          </div>
        </div>
      </a>
    </article>
  );
};
  
export default FeaturedCard;
