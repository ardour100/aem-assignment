import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { featuredEvent, formatEventDetails, onlineEvent } from '../../test/events.js';
import FeaturedCard from './FeaturedCard.jsx';

describe('FeaturedCard', () => {
  it('renders featured event content', () => {
    render(<FeaturedCard event={featuredEvent} />);

    expect(screen.getByText(featuredEvent.category)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: featuredEvent.title })).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveTextContent(formatEventDetails(featuredEvent));
  });

  it('renders an image when the event has a known image', () => {
    const { container } = render(<FeaturedCard event={featuredEvent} />);

    expect(container.querySelector('img')).toBeInTheDocument();
  });

  it('does not render an image when the event has no image', () => {
    const { container } = render(<FeaturedCard event={onlineEvent} />);

    expect(container.querySelector('img')).not.toBeInTheDocument();
  });
});
