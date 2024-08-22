import React from 'react';
import { useHistory } from 'react-router-dom';

const services = [
    { id: 1, name: 'Teeth Whitening' },
    { id: 2, name: 'Root Canal' },
    { id: 3, name: 'Braces' },
];

const ServicesPage = () => {
    const history = useHistory();

    const handleServiceClick = (serviceId) => {
        // Route to the Dentist page with the selected service ID
        history.push(`/dentists/${serviceId}`);
    };

    return (
        <div>
            <h1>Select a Service</h1>
            <ul>
                {services.map((service) => (
                    <li key={service.id} onClick={() => handleServiceClick(service.id)}>
                        {service.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServicesPage;
