// src/components/Profile.tsx
import { profileData } from "../data/profile";

export const Profile = () => {
  return (
    <section className="profile-card">
      <h2>Profile</h2>
      <h3>{profileData.name}</h3>
      <div className="links"></div>
    </section>
  );
};
