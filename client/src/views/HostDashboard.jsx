import React, { useState, useEffect } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@mui/material'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import Card from '../components/Card';
import '../styles/hostDashboard.css'

export default () => {
    // const navigate = useNavigate();
    const [host, setHost] = useState()
    const [stays, setStays] = useState([])

    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        console.log("id", id)
        axios.get(`http://localhost:8000/api/stay/${id}`, { withCredentials: true })
            .then(response => {
                console.log("stays", response.data)
                setStays(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/airbnb/host/${id}`, { withCredentials: true })
            .then(response => setHost(response.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = () => { }

    return (
        <div className='Container'>
            <Header />
            {host &&
                <>
                    <h1>Welcome {host.firstName}</h1>
                    {stays &&
                        <>
                            <Button varriant='outlined' onClick={() => navigate(`/create/${id}`)} id="create">Create a Stay</Button>

                            <div className='cardArea'>
                                {stays.map((item, idx) =>
                                    <>
                                        <Card key={idx} stay={item} />
                                        {/* <Button varriant='outlined' onClick={handleDelete} id="delete">Delete</Button> */}
                                    </>
                                )}
                            </div>
                        </>
                    }
                </>
            }
            <Footer />
        </div>
    )

}