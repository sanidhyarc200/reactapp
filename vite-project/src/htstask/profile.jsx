const Profile = ({ email, password }) => {
  return (
    <div className="container">

      <h1>you have logged in!!</h1>
      <div className="a">
      <h2>Email:= {email}</h2>
      </div>
      <div className="a">
      <h2>password:= {password}</h2>
      </div>
      
    </div>
  );
};
export default Profile;
