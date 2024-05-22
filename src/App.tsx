import React from 'react';
import { useSelector } from 'react-redux';
import RadioSelection from './components/RadioSelection';
import DiscountCodeEntry from './components/DiscountCodeEntry';
import GenerateDiscountCodeButton from './components/GenerateDiscountCodeButton';
import NotesField from './components/NotesField';
import { RootState } from './store';

const App: React.FC = () => {
  const options = useSelector((state: RootState) => state.options);
  const discount = useSelector((state: RootState) => state.discount);
  const notes = useSelector((state: RootState) => state.notes);

  const handlePrintState = () => {
    console.log('Options:', options);
    console.log('Discount Code:', discount);
    console.log('Notes:', notes);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Mini Application</h1>
      <div className="mb-4">
        <RadioSelection />
      </div>
      <div className="mb-4">
        <DiscountCodeEntry />
      </div>
      <div className="mb-4">
        <GenerateDiscountCodeButton />
      </div>
      <div className="mb-4">
        <NotesField />
      </div>
      <button onClick={handlePrintState} className="bg-green-500 text-white p-2 rounded">
        Print State to Console
      </button>
    </div>
  );
};

export default App;
