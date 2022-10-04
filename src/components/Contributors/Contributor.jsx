import React from 'react';
import './Contributor.css'
import Header from '../Header/Header';
import { contributorData } from './../../assets/ContributorData'
import ContributorCard from './ContributorCard';
import {Link} from 'react-router-dom';

const Contributor = () => {
    return (
        <div className='section-container'>
            <Header heading="Dev Nation"
                details="Open Source Contributors..." />

            <div className="contributor-cards-container">
                {
                    contributorData.map(({
                        contributorName,
                        contributorLinkedIn,
                        contributorGithub,
                        contributorIG,
                        contributorTwitter,
                        contributorImage
                    }) => {
                        return <ContributorCard
                        contributorName={contributorName}
                        contributorLinkedIn={contributorLinkedIn}
                        contributorGithub={contributorGithub}
                        contributorIG={contributorIG}
                        contributorTwitter={contributorTwitter}
                        contributorImage={contributorImage}
                        />
                    })
                }
            </div>

            <button className='back-btn'>
                <Link to='/'>Back to Home</Link>
            </button>

        </div>
    );
}

export default Contributor;