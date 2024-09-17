import React from "react";
import { months } from "../variables";

const ProfileCard = ({ userData }) => {
  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr.split("T")[0].split("-");
    return `${day} ${months[month - 1]} ${year}`;
  };

  const checkNull = (data, fallback) => (data ? data : fallback);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={userData.avatar_url} alt="avatar" id="avatar" />
        <div className="profile-info-wrapper">
          <h2 id="name">{userData.name || userData.login}</h2>
          <a href={userData.html_url} id="user" target="_blank" rel="noopener noreferrer">
            @{userData.login}
          </a>
          <p id="date">Joined {formatDate(userData.created_at)}</p>
        </div>
      </div>
      <p id="bio">{checkNull(userData.bio, "This profile has no bio")}</p>

      <div className="profile-stats-wrapper">
        <div className="profile-stat">
          <p className="stat-title">Repos</p>
          <p id="repos" className="stat-value">{userData.public_repos}</p>
        </div>
        <div className="profile-stat">
          <p className="stat-title">Followers</p>
          <p id="followers" className="stat-value">{userData.followers}</p>
        </div>
        <div className="profile-stat">
          <p className="stat-title">Following</p>
          <p id="following" className="stat-value">{userData.following}</p>
        </div>
      </div>

      <div className="profile-bottom-wrapper">
        <div className="profile-info">
          <img src={`${process.env.PUBLIC_URL}/assets/images/location-icon.svg`} alt="location" />
          <p id="location">{checkNull(userData.location, "Not Available")}</p>
        </div>
        <div className="profile-info">
          <img src={`${process.env.PUBLIC_URL}/assets/images/website-icon.svg`} alt="website" />
          <a href={userData.blog || "#"} id="page">
            {checkNull(userData.blog, "Not Available")}
          </a>
        </div>
        <div className="profile-info">
          <img src={`${process.env.PUBLIC_URL}/assets/images/twitter-icon.svg`} alt="twitter" />
          <a href={userData.twitter_username ? `https://twitter.com/${userData.twitter_username}` : "#"} id="twitter">
            {checkNull(userData.twitter_username, "Not Available")}
          </a>
        </div>
        <div className="profile-info">
          <img src={`${process.env.PUBLIC_URL}/assets/images/company-icon.svg`} alt="company" />
          <p id="company">{checkNull(userData.company, "Not Available")}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
