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
                teamImg: 'https://via.placeholder.com/500'
            },
            {
                name: 'Zach Richardson',
                title: 'Master Barber',
                college: 'Campbellsville University',
                school: 'School of Barbering',
                graduation: '2020',
                teamImg: 'https://via.placeholder.com/500'
            },
            {
                name: 'Sheralee Warinner',
                title: 'Cosmetologist',
                college: 'Somerset Community College',
                school: 'School of Cosmetology',
                graduation: '2019',
                teamImg: 'https://via.placeholder.com/500'
            },
            {
                name: 'Chelsea Strunk',
                title: 'Cosmetologist',
                college: 'Somerset Community College',
                school: 'School of Cosmetology',
                graduation: '2019',
                teamImg: 'https://via.placeholder.com/500'
            },
            {
                name: 'Mistaya Watson',
                title: 'Lash Technician',
                college: 'Somerset Community College',
                school: 'School of Cosmetology',
                graduation: '2022',
                teamImg: 'https://via.placeholder.com/500'
            },
            {
                name: 'Kasey Slagle',
                title: 'Medical Massage Therapist',
                college: 'Medical Career & Technical College',
                school: 'School of Medical Massage Therapy',
                graduation: '2022',
                teamImg: 'https://via.placeholder.com/500'
            }
        ];
        return (
            <>
            <section className='team'>
                <div className='container-fluid padding-0'>
                    <div className='title text-center'>
                        <h2>Our Specialized Team</h2>
                    </div>
                    <div class="container">
                        <div class="row padding-0">
                        {team.map((member) => (
                            <TeamMember member={member} />
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