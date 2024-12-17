import './MyForm.css';

const MyForm = () => {
  return (
    <div>
        {/* 1 - form creation */}
        <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" placeholder="Write your name" />
            </div>
            <input type="submit" value="Send" />
        </form>
    </div>
  );
};

export default MyForm;