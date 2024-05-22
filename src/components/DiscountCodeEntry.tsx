import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDiscount } from '../features/discountSlice';

const DiscountCodeEntry: React.FC = () => {
  const [code, setCode] = useState('');
  const dispatch = useDispatch();

  const isValidCode = (code: string) => /^[A-Z]{6,8}\d{2,4}$/.test(code);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCode(value);
    if (isValidCode(value)) {
      dispatch(setDiscount(value));
    } else {
      dispatch(setDiscount(''));
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Enter Discount Code</h2>
      <input
        type="text"
        value={code}
        onChange={handleChange}
        placeholder="Enter discount code"
        className="border p-2 rounded w-full"
      />
      {!isValidCode(code) && code !== '' && (
        <p className="text-red-500 mt-2">Invalid discount code</p>
      )}
    </div>
  );
};

export default DiscountCodeEntry;
