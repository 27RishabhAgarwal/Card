const ProfileHeader = ({ image, name, title }) => {
    return (
        <div className="card-header-profile">
            <img className="profile-photo" src={image} alt="profile" />
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}

export default ProfileHeader;