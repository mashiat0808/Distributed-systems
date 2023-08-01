import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Notifications() {
    const [notifications, setNotifications] = useState([]);

    const fetchNotifications = async () => {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
        try {
            const response = await axios.get('http://localhost:3001/notification', config);
            setNotifications(response.data);

        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchNotifications();
    }, []);

    return (
        <div>
            {notifications.length > 0 ? (
                notifications.map((notification) => (
                    <div
                        key={notification.id}
                        style={{
                            backgroundColor: '#FF4500',
                            border: '1px solid black',
                            padding: '10px',
                            margin: '10px 0',
                        }}
                    >
                        <p style={{ color: 'aliceblue' }}>
                            {notification.notification}</p>
                    </div>
                ))
            ) : (
                <p>No notifications available</p>
            )}

        </div>
    );
}

export default Notifications;