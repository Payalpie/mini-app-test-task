import React, { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOption } from '../features/optionsSlice';
import { RootState } from '../store';

const RadioSelection: React.FC = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state: RootState) => state.options);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setOption(event.target.value));
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Select an Option</h2>
      <div className="flex space-x-4">
        {['Option A', 'Option B', 'Option C'].map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleChange}
              className="form-radio text-blue-600"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioSelection;
