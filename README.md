# NextEvent - Event Management Application

**NextEvent** is a feature-rich event management app built using Next.js. This project was developed during a Next.js course with a Page Router approach, offering a comprehensive learning experience. The application allows users to explore and interact with events, view event details, and post comments, all with dynamic and static rendering using Next.js features like Static Site Generation (SSG), Incremental Static Regeneration (ISR), and API routes.

## Features

- **Featured Events**: Displays a list of featured events with Static Site Generation (SSG) and Incremental Static Regeneration (ISR), re-generating every 20,000 seconds.
- **All Events**: Lists all events with SSG and ISR, re-generating every 1,000 seconds.
- **Event Details**: Each event has a dedicated page with its own details, using dynamic routing with `getStaticProps` and `getStaticPaths`.
- **Comment System**: Users can submit comments on event detail pages. Each comment includes the username and is dynamically rendered on the page.
- **Search by Date**: Events can be filtered by a specific date (day and month) using URL query parameters.
- **Catch-All Route**: Supports a dynamic catch-all route (`[...slug]`) to filter and render events based on selected date from the URL.

## Tech Stack

- **Next.js**: For routing, SSR/SSG/ISR, and API routes.
- **React**: For component-based architecture.
- **Firebase**: For storing and serving data (events and comments).
- **CSS/SCSS**: For styling.

## Pages

1. **Featured Events**: Static Site Generation (SSG) with ISR, regenerates every 20,000 seconds.
2. **All Events**: SSG with ISR, regenerates every 1,000 seconds.
3. **Event Detail Pages**: Dynamic route pages for individual event details with `getStaticProps` and `getStaticPaths`.
4. **Filtered Events**: Supports event search by specific date from URL query parameters.
5. **Catch-All Route**: Dynamically renders events based on the URL path (`[...slug]`).

## How the Project Works

- **Static Site Generation (SSG)**: Used to generate static pages for featured and all events.
- **Incremental Static Regeneration (ISR)**: Pages are re-generated at defined intervals to ensure the app's content stays up-to-date.
- **API Routes**: Used for fetching and submitting comments. The `[commentId]` API route interacts with Firebase to fetch and store comments.
- **Dynamic Routes**: `getStaticProps` and `getStaticPaths` are used to generate dynamic event detail pages.
- **Client-Side Comments**: Comments are fetched and rendered using `useEffect` on the client side, and new comments are added without authentication or authorization.

## Folder Structure

/public
/images
/helpers
api-utils.js (utility functions for fetching events)
/components
/event-detail
Event details components
/events
Components for events and featured events page
/icons
Custom icons used across the app
/input
Comment input components
/layout
Layout and header components
/ui
Utility components (buttons, modals, etc.)
/pages
index.js (Featured Events page)
events.js (All Events page)
[slug].js (Event Detail page)
[...slug].js (Catch-All Route for filtered events)
/styles
Global styles and component-specific styling

## API Routes

- **`/api/comments/[commentId]`**: Handles fetching and submitting comments for each event detail page, interacting with Firebase as the backend.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

- **Node.js** (>= 14.x)
- **npm** or **yarn**
- Firebase account and configuration (for storing event data and comments)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/NextEvent.git
   ```