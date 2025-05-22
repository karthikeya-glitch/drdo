import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
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
  );
}
