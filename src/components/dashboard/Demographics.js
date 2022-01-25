import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const API = 'http://localhost:1337/api/demographics';


export default function Demographics() {

    const [demographics, setDemographics] = useState({data: []});

    useEffect(() => {
        getDemographicsWithFetch();
    }, []);

    const getDemographicsWithFetch = async () => {
        const response = await fetch(API);
        const jsonData = await response.json({});
        setDemographics(jsonData);
        console.log(jsonData);
    };

    

    return (
        <>
        <Container className='showDemographics mt-4'>
            <h4>Conference Demographic List</h4>
            {/* <h3>This will show the raw data for all demographics - curly brace JSON.stringify(demographics.data) curly brace and use API = http://localhost:1337/api/demographics</h3>
            <p>{JSON.stringify(demographics.data)}</p> */}
            <ul>
            {demographics.data.map((demographic) => 
            <li key={demographic.id}>Attendee Id#{demographic.id}: {demographic.attributes.address}, {demographic.attributes.city}, {demographic.attributes.state}  {demographic.attributes.zip}</li>)}
            </ul>
        </Container >
        </>

    );
}