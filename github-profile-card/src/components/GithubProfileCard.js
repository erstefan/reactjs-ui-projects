import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fontFamily from './styles-utility';

const CardHeader = styled.div`
   max-width: 400px;
   padding: 35px;
   text-align: center;
   img {
    max-width: 90px;
    width: 90px;
    border-radius: 3px;
   }
`;


class GithubProfileCard extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: []
		};

		this.fetchUser = this.fetchUser.bind(this);
	}

	fetchUser() {
		let user = this.props.user;

		axios
			.get(`https://api.github.com/users/${user}`)
			.then((res) =>  {
				console.log(res);
				localStorage.setItem('github_profile', JSON.stringify(res.data));
				this.setState({
					data: res.data
				});
			});
	}

	componentDidMount() {
		// if localStorage is empty
		// fetch user from Github
		if (!localStorage.getItem('github_profile')) {
            this.fetchUser();
		} else {
			let parsed_user = JSON.parse(localStorage.getItem('github_profile'));
			this.setState({
				data: parsed_user
			});
		}
	}

	render() {
		const { name, avatar_url, location, hireable, bio, followers, following, url, followers_url, following_url } = this.state.data;

		return (
            <div className="github-card">

				<CardHeader>
					<img src={avatar_url} alt={name} />

					<h3 className="user__name">{name}</h3>
					<span className="user__location">{location}</span>

					<a href="#" className="follow-user-btn">Follow</a>

					<div className="user__bio">
						{bio}
					</div>
				</CardHeader>


				<p>{followers}</p>
				<p>{following}</p>
				<p>{url}</p>
            </div>
		);
	}
}

GithubProfileCard.propTypes = {
	user: PropTypes.string.isRequired
};

export default GithubProfileCard;