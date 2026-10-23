import type { UserProfileCardProps } from '../../types';
function UserProfileCard({ user, showEmail = true, showRole = true, onEdit, children }: UserProfileCardProps) {
  return <div className="profile-card">{user.avatarUrl && <img src={user.avatarUrl} alt={user.name} width="80" />}<h2>{user.name}</h2>{showEmail && <p>Email: {user.email}</p>}{showRole && <p>Role: {user.role}</p>}{children}{onEdit && <button onClick={() => onEdit(user.id)}>Edit Profile</button>}</div>;
}
export default UserProfileCard;
