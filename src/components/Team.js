import React from 'react';
import TeamMember from './TeamMember';

export class Team extends React.Component {
    render() {
        const team = [
            {
                name: 'Thomas Slagle',
                title: 'Owner / Master Barber',
                college: 'Campbellsville University',
                school: 'School of Barbering',
                graduation: '2019',
                teamImg: '/img/team/thomas.jpg'
            },
            {
                name: 'Zach Richardson',
                title: 'Master Barber',
                college: 'Campbellsville University',
                school: 'School of Barbering',
                graduation: '2020',
                teamImg: '/img/team/zach.jpg'
            },
            {
                name: 'Sheralee Warinner',
                title: 'Cosmetologist',
                college: 'Somerset Community College',
                school: 'School of Cosmetology',
                graduation: '2019',
                teamImg: '/img/team/sheralee.jpg'
            },
            {
                name: 'Chelsea Strunk',
                title: 'Cosmetologist',
                college: 'Somerset Community College',
                school: 'School of Cosmetology',
                graduation: '2019',
                teamImg: '/img/team/chelsea.jpg'
            },
            {
                name: 'Mistaya Watson',
                title: 'Lash Technician',
                college: 'Somerset Community College',
                school: 'School of Cosmetology',
                graduation: '2022',
                teamImg: '/img/team/mistaya.jpg'
            },
            {
                name: 'Kasey Slagle',
                title: 'Medical Massage Therapist',
                college: 'Medical Career & Technical College',
                school: 'School of Medical Massage Therapy',
                graduation: '2022',
                teamImg: '/img/team/kasey.jpg'
            }
        ];
        return (
            <>
            <section className="team">
                <div className="container-fluid team-container">
                    <div className="title text-center">
                        <h2>Our Specialized Team</h2>
                    </div>
                    <div className="container">
                        <div className="row padding-0">
                        {team.map((member, i) => (
                            <TeamMember key={'team_' + i} member={member} />
                        ))}
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default Team;