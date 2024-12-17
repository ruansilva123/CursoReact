const Container = ({ children, text }) => {
  return (
    <div>
        <h2>It is a container title</h2>
        {children}
        <p>{text}</p>
    </div>
  );
};

export default Container;