export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li id={id} key={id}>
          <span>{name}</span> {number}
          <button
            type="button"
            style={{ marginLeft: 20 }}
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
