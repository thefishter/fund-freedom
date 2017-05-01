import React from 'react';

const DataTable = (props) => {

  const inmates = props.inmates

  return (
    <div className="DataTable">
      <table>
      
        <thead>
          <tr>
            <th>Downloaded</th>
            <th>Identifier</th>
            <th>Gender</th>
            <th>Race</th>
            <th>Age</th>
            <th>Bail</th>
            <th>Offense</th>
            <th>Latest Admission</th>
            <th>Facility</th>
          </tr>
        </thead>
      
        <tbody>
        {
          inmates.map(inmate => (
            <tr>
              <td>{inmate.download_date.slice(0, 10)}</td>
              <td>{inmate.identifier}</td>
              <td>{inmate.gender}</td>
              <td>{inmate.race}</td>
              <td>{inmate.age}</td>
              <td>{ Math.floor(inmate.bond_amount / 1000)
                    ? Math.floor(inmate.bond_amount / 1000000)
                      ? '$' + inmate.bond_amount.slice(0, -6) + ',' 
                            + inmate.bond_amount.slice(-6, -3) + ','
                            + inmate.bond_amount.slice(-3)
                      : '$' + inmate.bond_amount.slice(0, -3) + ','
                            + inmate.bond_amount.slice(-3)
                    : '$' + inmate.bond_amount }</td>
              <td>{inmate.offense}</td>
              <td>{inmate.latest_admission_date.slice(0, 10)}</td>
              <td>{inmate.facility}</td>
            </tr>
          ))
        }
        </tbody>
      
      </table>
    </div>
  )
}
export default DataTable
