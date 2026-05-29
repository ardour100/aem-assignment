import { useMemo } from 'react';
import EventCard from '../EventCard/EventCard.jsx';
import FeaturedCard from '../FeaturedCard/FeaturedCard.jsx';
import styles from './NewsEventSection.module.scss';

const NewsEventSection = ({
  events,
  title = "Upcoming events",
  seeAllLink = "#"
}) => {
  const { featuredEvent, regularEvents } = useMemo(() => {
    const featured = events.find((event) => event.isFeatured);
    const regular = events.filter(event => !event.isFeatured);

    return { featuredEvent: featured, regularEvents: regular };
  }, [events]);

  return (
    <section className={styles.section} aria-labelledby="news-event-section-title">
      <div className={styles.layout}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.list}>
          {regularEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className={styles.featuredColumn}>
          {featuredEvent && <FeaturedCard event={featuredEvent} />}
        </div>

        <a className={styles.link} href={seeAllLink}>
          <span className={styles.linkText}>See all events</span>
          <svg
            className={styles.linkIcon}
            aria-hidden="true"
            fill="none"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.004 16 13 8 5.004 0 3.67 1.333 10.335 8 3.67 14.667 5.004 16z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default NewsEventSection;
