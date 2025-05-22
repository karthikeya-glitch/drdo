import React, { useState } from 'react';
import './sanction.css';
import { Link } from 'react-router-dom';
import Person from '../addperson/person';

export default function Sanction() {
  const [bonusYear, setBonusYear] = useState('');
  const [letterNumber, setLetterNumber] = useState('');
  const [letterData, setLetterData] = useState('');
  const [amount, setAmount] = useState('');
  const [entries, setEntries] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (!bonusYear || !letterNumber || !letterData || !amount) {
      alert("Please fill in all fields");
      return;
    }

    const newEntry = {
      bonusYear,
      letterNumber,
      letterData,
      amount,
    };

    if (editIndex !== null) {
      const updatedEntries = [...entries];
      updatedEntries[editIndex] = newEntry;
      setEntries(updatedEntries);
      setEditIndex(null);
    } else {
      setEntries([...entries, newEntry]);
    }

    setBonusYear('');
    setLetterNumber('');
    setLetterData('');
    setAmount('');
  };

  const handleDelete = (indexToDelete) => {
    const updatedEntries = entries.filter((_, index) => index !== indexToDelete);
    setEntries(updatedEntries);
    if (editIndex === indexToDelete) {
      setEditIndex(null);
      setBonusYear('');
      setLetterNumber('');
      setLetterData('');
      setAmount('');
    }
  };

  const handleEdit = (index) => {
    const entry = entries[index];
    setBonusYear(entry.bonusYear);
    setLetterNumber(entry.letterNumber);
    setLetterData(entry.letterData);
    setAmount(entry.amount);
    setEditIndex(index);
  };

  return (
    <>
      <h1>Add Sanction Letter</h1>

      <div className="nav-bar">
        <Link to="/sanction">Add Sanction Letter</Link>
        <Link to="#">Compute Bonus</Link>
        <Link to="/addperson">Add Person</Link>
        <Link to="#">Add EOL Days</Link>
        <Link to="#">Reports</Link>
        <Link to="#">Modify Reports</Link>
        <Link to="#">Delete/Undelete</Link>
        <Link to="#">Bonus Soft copy Excel</Link>
        <Link to="#">Add Bill Number</Link>
        <Link to="#">Add Division Number</Link>
        <Link to="#">Bank Statement</Link>
        <Link to="#">EOL Details from salary data</Link>
        <Link to="#">Home</Link>
        <Link to="#">Exit</Link>
      </div>

      <div className="main">
        <h2 className='bonus-year'>Bonus Year</h2>
        <input
          placeholder='2025'
          className='year'
          value={bonusYear}
          onChange={(e) => setBonusYear(e.target.value)}
        />

        <h2 className='letter-number'>Letter Number</h2>
        <input
          className='num'
          value={letterNumber}
          onChange={(e) => setLetterNumber(e.target.value)}
        />

        <h2 className='letter-data'>Letter date</h2>
<input
  type="date" // 👈 this enables the calendar popup
  className='data'
  value={letterData}
  onChange={(e) => setLetterData(e.target.value)}
/>


        <h2 className='amount'>Amount</h2>
        <input
          className='amimp'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button className='add' onClick={handleAdd}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>

      <div className="content">
        <div className="entry-row header">
          <h3 className='col col1'>Bonus year</h3>
          <h3 className='col col2'>Letter number</h3>
          <h3 className='col col3'>Letter date</h3>
          <h3 className='col col4'>Amount</h3>
          <h3 className='col col5'>Update/Delete</h3>
        </div>

        {entries.map((entry, index) => (
          <div className="entry-row" key={index}>
            <span className="col col1">{entry.bonusYear}</span>
            <span className="col col2">{entry.letterNumber}</span>
            <span className="col col3">{entry.letterData}</span>
            <span className="col col4">{entry.amount}</span>
            <span className="col col5">
              <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
