
import React, { useState } from 'react';
import './person.css';
import NavBar from '../Navbar';

const dummyData = [
  { id: '101', name: 'John Doe', designation: 'Manager' },
  { id: '102', name: 'Jane Smith', designation: 'Developer' },
  { id: '103', name: 'Alice Johnson', designation: 'Designer' }
];

function Person() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [months, setMonths] = useState('');
  const [entries, setEntries] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const results = dummyData.filter(
      person =>
        person.name.toLowerCase().includes(value.toLowerCase()) ||
        person.id.includes(value)
    );
    setSearchResults(results);
  };

  const handleSelect = (person) => {
    setSelectedPerson(person);
    setMonths('');
    setEditIndex(null);
  };

  const handleAddOrUpdate = () => {
    if (!selectedPerson || !months) return alert("Please complete all fields.");

    const newEntry = {
      ...selectedPerson,
      months,
      year: '2025'
    };

    if (editIndex !== null) {
      const updated = [...entries];
      updated[editIndex] = newEntry;
      setEntries(updated);
      setEditIndex(null);
    } else {
      setEntries([...entries, newEntry]);
    }

    setSelectedPerson(null);
    setMonths('');
    setSearchTerm('');
    setSearchResults([]);
  };

  const handleEdit = (index) => {
    const person = entries[index];
    setSelectedPerson({ id: person.id, name: person.name, designation: person.designation });
    setMonths(person.months);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
    setSelectedPerson(null);
    setMonths('');
    setEditIndex(null);
  };

  return (
    <div>
      <NavBar />
      <div className="person-container">
        <h1>Add Person</h1>
        <input
          type="text"
          placeholder="Search by name or ID"
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        

        <div className="search-results">
          {searchResults.map(person => (
            <div
              key={person.id}
              className="search-result-item"
              onClick={() => handleSelect(person)}
            >
              {person.name} ({person.id})
            </div>
          ))}
        </div>

        {selectedPerson && (
          <div className="person-details">
            <p><strong>ID:</strong> {selectedPerson.id}</p>
            <p><strong>Name:</strong> {selectedPerson.name}</p>
            <p><strong>Designation:</strong> {selectedPerson.designation}</p>
            <input
              type="number"
              placeholder="No. of months"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
            />
            <button onClick={handleAddOrUpdate}>
              {editIndex !== null ? 'Update' : 'Add'}
            </button>
          </div>
        )}
    
     <div className="entries-table">
          {/* <h2>Person Entries</h2> */}
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Months</th>
                <th>Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.id}</td>
                  <td>{entry.name}</td>
                  <td>{entry.designation}</td>
                  <td>{entry.months}</td>
                  <td>{entry.year}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Person;
1