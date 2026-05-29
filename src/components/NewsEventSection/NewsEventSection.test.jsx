import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { featuredEvent, inPersonEvent, onlineEvent } from '../../test/events.js';
import NewsEventSection from './NewsEventSection.jsx';

describe('NewsEventSection', () => {
  it('renders the section title, regular events, featured event, and see-all link', () => {
    render(
      <NewsEventSection
        events={[onlineEvent, inPersonEvent, featuredEvent]}
        seeAllLink="/events"
      />,
    );

    expect(screen.getByRole('heading', { name: 'Upcoming events' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: onlineEvent.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: inPersonEvent.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: featuredEvent.title })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /see all events/i })).toHaveAttribute('href', '/events');
  });

  it('renders only the first featured event as the featured card', () => {
    const secondFeaturedEvent = {
      ...featuredEvent,
      id: 4,
      title: 'Second Featured Event',
      isFeatured: true,
    };

    const { container } = render(
      <NewsEventSection events={[featuredEvent, secondFeaturedEvent, onlineEvent]} />,
    );

    const featuredColumn = container.querySelector('[class*="featuredColumn"]');

    expect(within(featuredColumn).getByRole('heading', { name: featuredEvent.title })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: secondFeaturedEvent.title })).not.toBeInTheDocument();
  });
});
