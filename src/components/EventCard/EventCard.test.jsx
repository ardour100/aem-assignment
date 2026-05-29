import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { formatEventDetails, onlineEvent } from '../../test/events.js';
import EventCard from './EventCard.jsx';

describe('EventCard', () => {
  it('renders the category, title, and event details', () => {
    render(<EventCard event={onlineEvent} />);

    expect(screen.getByText(onlineEvent.category)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: onlineEvent.title })).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveTextContent(formatEventDetails(onlineEvent));
  });

  it('renders as a link card', () => {
    render(<EventCard event={onlineEvent} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/events');
  });
});
