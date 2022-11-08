import { useState, createContext } from "react";

export const NotificationContext = createContext();
const Notification = ({message, severity}) => {
    const notificationStyles = {
        position: 'absolute',
        top: 20,
        right: 20,
        borderRadius: '5px',
        width: 'auto',
        height: 'auto',
        backgroundColor: severity === 'success' ? '#3b6' : '#b33',
        color: 'black',
        padding: '10px 20px 10px 20px',
        zIndex: 10
    }

    if (message === '') return
    
    return(
        <div style={notificationStyles}>
            <span> { message }'</span>
        </div>
    )
}
export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (severity, message) => {
        setSeverity(severity)
        setMessage(message)

        setTimeout(() => {
            setMessage('')
        }, 2500)
    }

    return(
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification severity={severity} message={message} />
            {children}
        </NotificationContext.Provider>
    )
}