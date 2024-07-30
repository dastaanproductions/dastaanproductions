import React, { useState, useEffect, useRef } from 'react';
import './Clients.css';

import client1 from './clientImages/hec.jpeg';
import client2 from './clientImages/cheezious.jpg';
import client3 from './clientImages/cari.png';
import client4 from './clientImages/conceal.jpg';
import client5 from './clientImages/roshni.png';

const clientsData = [
    { id: 1, img: client1, link: 'https://www.hec.gov.pk' },
    { id: 2, img: client2, link: 'https://www.cheezious.com' },
    { id: 3, img: client3, link: 'https://getcari.com' },
    { id: 4, img: client4, link: 'https://conceal.io' },
    { id: 5, img: client5, link: 'https://www.youtube.com/@RoshniCentre/featured' },
];

const Clients = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const intervalRef = useRef(null);
    const touchStartX = useRef(null);
    const mouseStartX = useRef(null);

    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll();
    }, []);

    useEffect(() => {
        if (currentIndex >= clientsData.length + 1) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1);
            }, 500);
        } else {
            setIsTransitioning(true);
        }
    }, [currentIndex]);

    const startAutoScroll = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 3000);
    };

    const stopAutoScroll = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const handleMouseEnter = () => stopAutoScroll();
    const handleMouseLeave = () => startAutoScroll();

    const handleDotClick = (index) => {
        setCurrentIndex(index + 1);
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchStartX.current - touchEndX > 50) {
            handleNextClick();
        } else if (touchStartX.current - touchEndX < -50) {
            handlePrevClick();
        }
    };

    const handleMouseDown = (e) => {
        mouseStartX.current = e.clientX;
    };

    const handleMouseUp = (e) => {
        const mouseEndX = e.clientX;
        if (mouseStartX.current - mouseEndX > 50) {
            handleNextClick();
        } else if (mouseStartX.current - mouseEndX < -50) {
            handlePrevClick();
        }
    };

    const getTransformValue = () => {
        if (isTransitioning) {
            return `translateX(-${currentIndex * (100 / 3)}%)`;
        } else {
            return `translateX(-${(100 / 3)}%)`;
        }
    };

    return (
        <div className="clients-section">
            <h1 className="clients-heading">OUR CLIENTS</h1>
            <div
                className="clients-carousel"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                <div className="clients-wrapper" style={{ transform: getTransformValue(), transition: isTransitioning ? 'transform 0.5s ease' : 'none' }}>
                    <a href={clientsData[clientsData.length - 1].link} target="_blank" rel="noopener noreferrer" className="client">
                        <img src={clientsData[clientsData.length - 1].img} alt={`Client ${clientsData.length}`} />
                    </a>
                    {clientsData.map((client) => (
                        <a href={client.link} target="_blank" rel="noopener noreferrer" key={client.id} className="client">
                            <img src={client.img} alt={`Client ${client.id}`} />
                        </a>
                    ))}
                    <a href={clientsData[0].link} target="_blank" rel="noopener noreferrer" className="client">
                        <img src={clientsData[0].img} alt={`Client 1`} />
                    </a>
                </div>
            </div>
            <div className="dots-container">
                {clientsData.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index + 1 === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Clients;
