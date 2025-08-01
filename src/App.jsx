import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcept/CoreConcepts.jsx';
import Examples from './Examples.jsx';

function App() {
  

  return (
    <>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
