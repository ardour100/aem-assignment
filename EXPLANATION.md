# News Event Component

## Approach and Design Decisions

- Built the component in React with Vite for a small, fast project setup.
- Used the provided `data.json` as the source of truth instead of hardcoded event content.
- Treated `isFeatured` as a display rule: the first featured item is rendered as the featured card, and the remaining items render as standard event cards.
- Kept the UI close to the provided desktop and mobile references while prioritising clean structure and maintainable styles.

## Component Structure

- `NewsEventSection` owns the section layout, heading, see-all link, and featured/regular event split.
- `EventCard` renders a standard event item with category, title, and event details.
- `FeaturedCard` renders the featured item with the image and overlaid event details.
- Each component has its own `*.module.scss` file so styles stay scoped to the component that uses them.

## React and Framework Features Used

- Used React props to pass event data into reusable components.
- Used `useMemo` in `NewsEventSection` to derive featured and regular event lists from the input data.
- Used Vite for development, build tooling, asset handling, and CSS Module support.

## Styling Decisions

- Used SCSS Modules to avoid global class name collisions and keep component styles isolated.
- Used CSS Grid for the main desktop layout because the component needs a clear left/right structure.
- Used simple semantic class names inside each module for readability.
- Followed the supplied typography direction: `'Apercu'` as `--usyd-font-primary`, 32px section heading, 22px card titles, and smaller uppercase metadata/category labels.
- Used `currentColor` for the see-all arrow so it automatically matches the link color.

## Responsiveness

- Desktop uses a two-column layout: regular events on the left and the featured card on the right.
- Mobile switches to a single-column layout at `600px`.
- On mobile, the featured card appears directly below the heading, followed by the regular event list and see-all link.
- The featured image uses a wider desktop ratio and a square mobile ratio to better match the supplied references.

## UI Guideline Summary from Corporate CSS

- Typography uses `'Apercu'` as `--usyd-font-primary`, with `Apercu Mono`, `Antwerp`, and `Lyon` available for specialised mono or serif treatments.
- Base body copy is set around `16px` with a `24px` line height; smaller supporting text uses `14px/16px`, and larger content uses `20px/32px`.
- Core colours are charcoal `#141414`, secondary charcoal `#424242`, white `#FFFFFF`, light grey `#F7F7F7`, border grey `#D2D2D2`, and Sydney ochre/red accents `#E64626`, `#C63A1E`, and `#AF2B11`.
- Spacing follows a token scale from `4px` to `80px`: `4`, `8`, `12`, `16`, `24`, `32`, `48`, `64`, and `80`.
- Links use the ochre colour `#C63A1E`, medium weight, and no underline by default; hover and focus keep the same colour while preserving a clear interactive state.
- Headings use the primary font, no letter spacing, and controlled margins through title variables.
- Accessibility patterns include screen-reader-only helpers and explicit focus outlines for keyboard navigation.
