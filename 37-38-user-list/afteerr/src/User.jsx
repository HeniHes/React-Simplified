export function User({ name, email, username }) {
  return (
    <li>
      {name}, {username}, {email}
    </li>
  );
}
