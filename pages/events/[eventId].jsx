import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import Comments from "../../components/input/comments";

import { getAllEvents, getEventById } from "../../helpers/api-utils";
import Head from "next/head";

const EventDetailPage = ({ event }) => {
  if (!event) {
    return (
      <div className="center">
        <h2>Loading .....</h2>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </Fragment>
  );
};

export default EventDetailPage;

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;
  const selectedEvent = await getEventById(eventId);
  if (!selectedEvent) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      event: selectedEvent,
    },
    revalidate: 100,
  };
};

export const getStaticPaths = async () => {
  const allEvents = await getAllEvents();
  const paths = allEvents.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths,
    fallback: true,
    // fallback: "blocking",
  };
};
