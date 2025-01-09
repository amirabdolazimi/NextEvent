import Head from "next/head";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { Fragment } from "react";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../helpers/api-utils";

const FilteredEventsPage = (props) => {
  const { filteredEvents, hasError, date } = props;
  const numMonth = +date.month;
  const numYear = +date.year;
  const pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`All Events For ${numMonth}/${numYear}.`}
      />
    </Head>
  );

  if (hasError) {
    return (
      <Fragment>
        {pageHeadData}
        <ErrorAlert>
          <p> Invalid Filter, Please Adjust Your Values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  if (!filteredEvents || filteredEvents.length == 0) {
    return (
      <Fragment>
        {pageHeadData}
        <ErrorAlert>
          <p>No Events found for the chosen Filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  const eventDate = new Date(date.year, date.month - 1);

  return (
    <Fragment>
      {pageHeadData}
      <ResultsTitle date={eventDate} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEventsPage;

export async function getServerSideProps(context) {
  const filterData = context.params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1 ||
    filterData[2]
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }
  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      filteredEvents,
      date: { year: numYear, month: numMonth },
    },
  };
}
