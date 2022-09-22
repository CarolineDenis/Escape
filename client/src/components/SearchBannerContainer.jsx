import React, {useState, useContext, useRef} from 'react'
import '../styles/searchBannerContainer.css'
import SearchIcon from '@mui/icons-material/Search';
import  DatePicker  from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default (props) => {
    const {setNewEndDate, setNewStartDate} = props

    const navigate = useNavigate()
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        setNewStartDate(startDate)
        setNewEndDate(endDate)
        navigate('/search')
    }

    return (
        <div className="search">
            <div className="search__container">
                <div className="search__form">
                    <div className="search__form-input search__form-element">
                        <p>Location</p>
                        <input type="text" placeholder="Where will you go?" />
                    </div>
                    <div className="search__form-start-date search__form-element">
                        <p>Start Date</p>

                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat='yyyy-MM-dd' />

                    </div>
                    <div className="search__form-end-date search__form-element">
                        <p>End Date</p>
                        <DatePicker selected={endDate} onChange={(date) => {
                            setEndDate(date)
                        }} id="endDate"/>
                    </div>
                    <Button type="submit" onClick={handleSearchSubmit}><SearchIcon sx={{ color: "#972e79"}} className="searchIcon"/></Button>
                    
                </div>
            </div>
        </div>
    );
};


