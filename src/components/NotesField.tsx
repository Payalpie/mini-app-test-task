import React, { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNotes } from '../features/notesSlice';
import { RootState } from '../store';

const NotesField: React.FC = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notes);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setNotes(event.target.value));
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Notes</h2>
      <textarea
        value={notes}
        onChange={handleChange}
        placeholder="Enter your notes here"
        className="border p-2 rounded w-full h-32 resize-none"
      />
    </div>
  );
};

export default NotesField;
