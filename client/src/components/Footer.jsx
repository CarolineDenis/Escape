import React from 'react'
import '../styles/footer.css'
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="footer">
            <p>© 2022 Airbnb Clone</p>
            <Link to="/chatHome" id='chat'>CHAT</Link>
        </div>
    )
}

