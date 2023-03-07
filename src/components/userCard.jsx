export default function UserCard({ user }) {
  return (
    <figure>
      <img src={user.picture?.large} alt="{user.name.first}" />
      <figcaption>
        <p>
          {user.name.title} {user.name.first} {user.name.last}
        </p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </figcaption>
    </figure>
  );
}
