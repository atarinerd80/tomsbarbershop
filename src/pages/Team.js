import React from 'react';
import TeamMember from '../components/TeamMember';
import TeamMemberList from '../data/TeamMemberList';

export class Team extends React.Component {
    render() {
        return (
            <>
                <section className="team">
                    <div className="container-fluid team-container">
                        <div className="title text-center">
                            <h2>Our Specialized Team</h2>
                        </div>
                        <div className="container">
                            <div className="row padding-0">
                            {TeamMemberList.teamMembers.map((member, i) => (
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