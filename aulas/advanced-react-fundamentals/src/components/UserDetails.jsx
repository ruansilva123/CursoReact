const UserDetails = ({ name, age, job }) => {
  return (
    <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>job: {job}</p>

        {age >= 18 ? (
            <p>This person can drive</p>
        ) : (
            <p>This person can not drive</p>
        )}
    </div>
  );
};

export default UserDetails;