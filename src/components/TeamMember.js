import React from 'react';

export class TeamMember extends React.Component{
    render(){
        return(
            <>
                <div className="col-md-4 padding-0">
                    <div className="team-member">
                        <div className="th-mouse-effect">
                            <div className="team-img">
                                <img src={ this.props.member.teamImg } alt="Team img" />
                            </div>
                            <div className="overlay text-center">
                                <div className="content">
                                    <h4>{ this.props.member.name }</h4>
                                    <span>{ this.props.member.title }</span><br /><br />
                                    <span>{ this.props.member.college }</span><br />
                                    <span>{ this.props.member.school }</span><br />
                                    <span>{ this.props.member.graduation }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default TeamMember;