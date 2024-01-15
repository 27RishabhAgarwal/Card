import React from 'react';
import ProfileHeader from './ProfileHeader';
import NavLinks from './NavLinks';

const CardHeader = () => {
  return (
    <div className="card-header">
      <ProfileHeader 
        image="./profile/profile_photo.png"
        name="Rishabh Agarwal"
        title="Dealer"
      />
      <NavLinks
        phone="+91 1234567890"
        email="example.in@gmail.com"
        directions="https://www.google.com/maps?daddr=Kedarnath-Filling-Station,Hardoi-Road,-Kachhauna,Hardoi,-Uttar-Pradesh,241126,"
      />
    </div>
  );
}

export default CardHeader;