import React, { useState } from "react";

function Subjects() {
  const d = new Date();
  const [classN, setClassN] = useState("Nursary");
  const [date, setDate] = useState(
    `${d.getDate()} / ${d.getMonth() + 1}/${d.getFullYear()}`,
  );

  return (
    <div>
      <div className="flex justify-between items-center p-2">
        <p>{classN}</p>
        <p>{date}</p>
      </div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Subject</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Subjects;
