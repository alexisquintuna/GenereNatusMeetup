import Head from 'next/head';
import { MongoClient } from 'mongodb';
import { Fragment } from 'react';
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
    return (
    <Fragment>
      <Head>
        <title>Genere Natus</title>
        <meta name='description' content='Browse a list of locations where the next meetups will be held at'/>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
    );
}


export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://alexisiquintuna:Emilyd120599@cluster0.j7ogy.mongodb.net/meetups?retryWrites=true&w=majority'
    );
  const db = client.db();
  
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 1
  };
}

export default HomePage;
