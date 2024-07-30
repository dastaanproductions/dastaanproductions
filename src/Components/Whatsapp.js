import React, { useState } from 'react';
import Draggable from 'react-draggable';
import image from './whatsapp.png'; // Import the image correctly

const WhatsAppButton = () => {
    const whatsappNumber = '923171832625'; // Ensure the number is in the international format
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    const [isDragging, setIsDragging] = useState(false);

    const handleStart = (e) => {
        setIsDragging(false); // Reset the dragging state when starting to drag
        e.preventDefault(); // Prevent default action when starting to drag
    };

    const handleDrag = (e) => {
        setIsDragging(true); // Set dragging state to true when dragging
    };

    const handleStop = (e) => {
        // Logic after stopping drag if needed
    };

    const handleClick = (e) => {
        if (isDragging) {
            e.preventDefault(); // Prevent the link from opening if dragging
        }
    };

    return (
        <div style={styles.container}>
            <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.link} 
                onClick={handleClick}
            >
                <img 
                    src={image} 
                    alt="WhatsApp"
                    style={styles.icon} 
                />
            </a>
        </div>
    );
};

const styles = {
    container: {
        position: 'fixed',
        bottom: '90px', // Adjusted margin from the bottom for better visibility on mobile
        right: '20px',
        zIndex: 1000,
        cursor: 'pointer', // Changed cursor style
    },
    link: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60px',
        height: '60px',
        borderRadius: '50%', // Rounded corners for a circular button
        boxShadow: 'none', // No shadow
        textDecoration: 'none',
    },
    icon: {
        width: '100%',
        height: '100%',
    },
};

export default WhatsAppButton;
