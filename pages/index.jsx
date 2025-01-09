import Head from "next/head";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";

const FeaturedEventsPage = ({ featuredEvents }) => {
  return (
    <div>
      <Head>
        <title>NextEvents App</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve ..."
        />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default FeaturedEventsPage;

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 20000,
  };
}
