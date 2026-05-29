import events from '../data.json';
import { NewsEvents } from './components/NewsEventSection/NewsEvents.jsx';

export default function App() {
  return (
    <>
        <NewsEvents events={events} />
    </>
  );
}
