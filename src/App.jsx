import eventData from '../data.json';
import NewsEventSection from './components/NewsEventSection/NewsEventSection.jsx';

export default function App() {
  return (
    <main className="page-wrapper">
      <NewsEventSection events={eventData} title="Upcoming events" />
    </main>
  );
}
