import React from 'react';
import './Contributor.css'

const ContributorCard = ({
    contributorName,
                        contributorLinkedIn,
                        contributorGithub,
                        contributorIG,
                        contributorTwitter,
                        contributorImage
}) => {
    return (
        <div className="contributor-card">
            <div className="image-container">
            <img src={contributorImage} alt="contributorImage" className="contributor-img" />
            
                
            </div>

            <div className="contributor-details-container">
                <h2 className="contributor-heading">{contributorName}</h2>
                <a href={contributorLinkedIn} className="check-it-out">LinkedIn</a>
                <a href={contributorGithub} className="check-it-out">Github</a>
                <a href={contributorIG} className="check-it-out">Instagram</a>
                <a href={contributorTwitter} className="check-it-out">Twitter</a>
            </div>
        </div>
    );
}

export default ContributorCard