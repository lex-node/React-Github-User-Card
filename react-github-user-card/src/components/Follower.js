import React from 'react'

class Follower extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.follower.login}</h1>
                <img src={this.props.follower.avatar_url} alt=""/>
            </div>
        )
    }
}

export default Follower;
