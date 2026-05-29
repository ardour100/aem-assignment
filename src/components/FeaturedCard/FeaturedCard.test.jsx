import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { featuredEvent, onlineEvent } from '../../test/events.js';
import FeaturedCard from './FeaturedCard.jsx';

describe('FeaturedCard', () => {
  it('renders featured event content', () => {
    render(<FeaturedCard event={featuredEvent} />);

    expect(screen.getByText('Publishing')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Nature Masterclass' })).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveTextContent('June 2, TUESDAY, 2026, 9 am-5 pm, In person');
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
