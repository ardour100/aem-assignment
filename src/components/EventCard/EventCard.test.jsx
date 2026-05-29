import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { onlineEvent } from '../../test/events.js';
import EventCard from './EventCard.jsx';

describe('EventCard', () => {
  it('renders the category, title, and event details', () => {
    render(<EventCard event={onlineEvent} />);

    expect(screen.getByText('GenAI')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'GenAI 303: Qualitative Analysis' })).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveTextContent('June 16, TUESDAY, 2026, 10 am-12 pm, Online');
  });

  it('renders as a link card', () => {
    render(<EventCard event={onlineEvent} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '#');
  });
});
