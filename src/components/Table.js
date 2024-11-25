import React from 'react'
import '../css/Table.css'

export const Table = () => {
    const cur_user = localStorage.getItem('role');

    const data = [
        {
          "id": 1,
          "name": "Rajwada Palace",
          "address": "Rajwada, Indore, Madhya Pradesh 452002",
          "entryFee": "₹10 for Indians, ₹250 for Foreigners"
        },
        {
          "id": 2,
          "name": "Sarafa Bazaar",
          "address": "Sarafa Bazaar, Indore, Madhya Pradesh 452001",
          "entryFee": "Free"
        },
        {
          "id": 3,
          "name": "Lal Bagh Palace",
          "address": "Nayapura, Indore, Madhya Pradesh 452007",
          "entryFee": "₹20 for Adults, ₹10 for Children"
        },
        {
          "id": 4,
          "name": "Patalpani Waterfall",
          "address": "Patalpani, Near Mhow, Indore, Madhya Pradesh",
          "entryFee": "Free"
        },
        {
          "id": 5,
          "name": "Indore Museum",
          "address": "Agra-Bombay Road, Near GPO Square, Indore, Madhya Pradesh 452001",
          "entryFee": "₹10 for Adults, ₹5 for Children"
        },
        {
          "id": 6,
          "name": "Chappan Dukan",
          "address": "New Palasia, Indore, Madhya Pradesh 452001",
          "entryFee": "Free"
        },
        {
          "id": 7,
          "name": "Ralamandal Wildlife Sanctuary",
          "address": "Ralamandal, Indore, Madhya Pradesh 452020",
          "entryFee": "₹60 for Adults, ₹30 for Children"
        },
        {
          "id": 8,
          "name": "Kanch Mandir",
          "address": "Jawahar Marg, Indore, Madhya Pradesh 452004",
          "entryFee": "Free"
        },
        {
          "id": 9,
          "name": "Pipliyapala Regional Park",
          "address": "Pipliyapala, Indore, Madhya Pradesh 452009",
          "entryFee": "₹20 for Adults, ₹10 for Children"
        },
        {
          "id": 10,
          "name": "Bijasen Tekri",
          "address": "Airport Road, Indore, Madhya Pradesh 452005",
          "entryFee": "Free"
        }
      ]
      
  return (
    <div className='table-main'>
        <h2 className='table-heading'>Best tourist destinations to visit in Indore</h2>
        <table>
            <tr>
                <th>Tourist Place Name</th>
                <th>Address</th>
                <th>Entry Fee</th>
            </tr>
            {data.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.name}</td>
                        <td>{val.address}</td>
                        <td>{val.entryFee}</td>
                    </tr>
                )
            })}
        </table>
        {cur_user === 'admin' ? <button className='add-button'>Add Place</button> : null}
        
    </div>
  )
}
