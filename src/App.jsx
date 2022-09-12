import useClock from './hooks/useClock';

const App = () => {
  useClock();
  useClock('EST');
  useClock('UTC');
  useClock('UTC', +5);
  useClock('GMT', +6);
  console.log('\n');
  console.log('\n');

  return (
    <div>
      <h1>Event Time Tracker</h1>
    </div>
  );
};

export default App;
