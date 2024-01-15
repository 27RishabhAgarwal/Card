const NavLinks = ({ phone, email, directions }) => {
    return (
        <div className="card-header-nav-links">
            <a href={`tel:${phone}`}>
                <span class="material-symbols-outlined">call</span>
                <p>Call</p>
            </a>
            <a href={`mailto:${email}`}>
                <span class="material-symbols-outlined">email</span>
                <p>Email</p>
            </a>
            <a href={directions} target="_blank" rel="noopener noreferrer">
                <span class="material-symbols-outlined">location_on</span>
                <p>Directions</p>
            </a>
        </div>
    );
}

export default NavLinks;