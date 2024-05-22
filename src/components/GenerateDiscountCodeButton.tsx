import React, { useState } from 'react';

const generateDiscountCode = (): string => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789';
  const getRandomCharacters = (chars: string, length: number): string => {
    return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
  };

  const letterPart = getRandomCharacters(letters, Math.floor(Math.random() * 3) + 6); // 6-8 letters
  const digitPart = getRandomCharacters(digits, Math.floor(Math.random() * 3) + 2); // 2-4 digits

  return `${letterPart}${digitPart}`;
};

const GenerateDiscountCodeButton: React.FC = () => {
  const [generatedCode, setGeneratedCode] = useState<string>('');

  const handleClick = () => {
    const newCode = generateDiscountCode();
    setGeneratedCode(newCode);
  };

  return (
    <div className="mb-6">
      <button onClick={handleClick} className="bg-blue-500 text-white p-2 rounded w-full">
        Generate Discount Code
      </button>
      {generatedCode && <p className="mt-2 text-green-600">Generated Code: {generatedCode}</p>}
    </div>
  );
};

export default GenerateDiscountCodeButton;
