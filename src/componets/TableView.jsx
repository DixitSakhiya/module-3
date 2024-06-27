import React from 'react';

const TableView = ({ students }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.percentage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;