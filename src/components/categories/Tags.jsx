const Tags = ({ icon, text, css }) => {
  return (
    <button className={css}>
      <img className="p-1 pt-2" src={icon} alt="icon" />
      <h3>{text}</h3>
    </button>
  );
};

export default Tags;
