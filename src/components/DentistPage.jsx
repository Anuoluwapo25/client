import React from 'react';
import { useParams } from 'react-router-dom';

const dentists = [
    { id: 1, serviceId: 1, name: 'Dr. Kobby' },
    { id: 2, serviceId: 1, name: 'Dr. Smith' },
    { id: 3, serviceId: 2, name: 'Dr. Johnson' },
];

const DentistPage = () => {
    const { serviceId } = useParams();

    const filteredDentists = dentists.filter(dentist => dentist.serviceId === parseInt(serviceId));

    return (
        <div>
            <h1>Select a Dentist</h1>
            <ul>
                {filteredDentists.map((dentist) => (
                    <li key={dentist.id}>
                        {dentist.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DentistPage;
