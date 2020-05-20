import React from 'react';

class UserCard extends React.Component {
    render() {
        return (
            <div>
                <h1>all about {this.props.userData.name}</h1>
                <img src={this.props.userData.avatar_url} alt=""/>
                <p>bio: {this.props.userData.bio}</p>
                <p>Company: {this.props.userData.company}</p>
            </div>
        )
    }
}

export default UserCard;
