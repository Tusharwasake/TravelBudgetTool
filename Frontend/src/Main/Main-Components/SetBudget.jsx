import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import './App.css';

function Test() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    option: '',
    budget: '',
    threshold: ''
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(`Option: ${formData.option}, Budget: ${formData.budget}, Threshold: ${formData.threshold}`);
    setIsOpen(false);
  };

  return (
    <div className="App flex justify-end p-4">
      <button onClick={togglePopup} className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Set Budget</button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-10 rounded-lg shadow-lg w-[500px]">
            <h2 className="text-2xl font-bold mb-6">Set Budget</h2>
            <form onSubmit={handleSubmit}>
              <label className="block mb-4">
                Category:
                <select name="option" value={formData.option} onChange={handleChange} required className="w-full p-3 mt-2 border rounded">
                  <option value="">Accomdation</option>
                  <option value="Option 1">Food</option>
                  <option value="Option 2">Transport</option>
                  <option value="Option 3">Activities</option>
                </select>
              </label>
              <label className="block mb-4">
                Enter Budget Amount:
                <input type="number" name="budget" value={formData.budget} onChange={handleChange} required className="w-full p-3 mt-2 border rounded" />
              </label>
              <label className="block mb-6">
                Alert Threshold:
                <input type="number" name="threshold" value={formData.threshold} onChange={handleChange} required className="w-full p-3 mt-2 border rounded" />
              </label>
              <div className="flex justify-between">
                <button type="submit" className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded">Set Budget</button>
                <button type="button" onClick={togglePopup} className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Test;
