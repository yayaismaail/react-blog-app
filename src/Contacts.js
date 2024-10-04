import './Contacts.css';

const Contacts = () => {
  const link = 'https://github.com/yayaismaail';

  return (
    <div className="contact">
      <a href={link} target="_blank" rel="noopener noreferrer">
        Go to My GitHub
      </a>
    </div>
  );
}

export default Contacts;
