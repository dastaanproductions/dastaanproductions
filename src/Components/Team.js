import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Team.css';

import member1 from './teamImages/member1.jpg';
import member2 from './teamImages/member2.jpg';
import member3 from './teamImages/member3.jpg';
import member4 from './teamImages/member4.jpg';
import member5 from './teamImages/member5.jpg';



const TeamSection = () => {
    const members = [
        { id: 1, name: 'Syed Ali Gilani', image: member1, intro: 'CEO at Dastaan Productions', instagram: 'https://www.instagram.com/gilani.jpg/' },
        { id: 2, name: 'Hashim Ali', image: member2, intro: 'Managing Director', instagram: 'https://www.instagram.com/thisishashimali/' },
        { id: 3, name: 'Ahmad Khattak', image: member3, intro: 'cinematographer ', instagram: 'https://www.instagram.com/thisiskhattak/' },
        { id: 4, name: 'Syed Athar Abbas Gilani', image: member4, intro: 'Senior Editor', instagram: 'https://www.instagram.com/its_syed_athar_bbas/' },
        { id: 5, name: 'Qasim Ali', image: member5, intro: 'Senior Editor', instagram: 'https://www.instagram.com/_qasim_ali_56?igsh=ZWc2c2owbWt5ZHV6' }
    ];

    const [index, setIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrev = () => {
        if (index > 0) {
            setIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleNext = () => {
        if (index < members.length - getVisibleCards()) {
            setIndex(prevIndex => prevIndex + 1);
        }
    };
    const handleCardClick = (instagramUrl) => {
        window.open(instagramUrl, '_blank');
    };

    const getVisibleCards = () => (windowWidth <= 768 ? 2 : 3);

    return (
        <div className="team-section">
    <h1 className="main-heading">OUR TEAM</h1>
    <div className="carousel-container">
                <Button variant="dark" className={`carousel-control-prev ${index === 0 ? 'disabled' : ''}`} onClick={handlePrev} disabled={index === 0}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Button>
                <div className="carousel-inner">
                    {members.slice(index, index + getVisibleCards()).map((member) => (
                        <Card className="team-card" key={member.id} onClick={() => handleCardClick(member.instagram)}>
                            <div className="card-content">
                                <Card.Img variant="top" src={member.image} alt={member.name} />
                                <div className="member-info">
                                    <h3>{member.name}</h3>
                                    <p>{member.intro}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                <Button variant="dark" className={`carousel-control-next ${index === members.length - getVisibleCards() ? 'disabled' : ''}`} onClick={handleNext} disabled={index === members.length - getVisibleCards()}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Button>
            </div>
        </div>
    );
};

export default TeamSection;

