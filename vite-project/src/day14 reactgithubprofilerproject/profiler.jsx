
import { useState } from "react";
import { GitRepo } from "./newcomp";

export const GetProfile = () => {
  const [inputData, setInputData] = useState(""); //inital box for taking userName
  const [userInfo, setuserInfo] = useState([]); //complete data of api
  const [repoData, setRepoData] = useState([]);
  const findUser = () => {
    console.log("SK@finduser");
    fetch(`https://api.github.com/users/${inputData}/repos`)
      .then((data) => data.json())
      .then((data) => setuserInfo(data));
  };
  const showMeRepo = (repoId) => {
    userInfo.map((item) => {
      if (item.id === repoId) {
        console.log("SK@i am inside");
        console.log("SK@", item);
        setRepoData((pre) => [...pre, item]);
      }
    });
  };
  return (
    <>
      <h3>Enter User Information:</h3>
      <input
        type="text"
        value={inputData}
        placeholder="Enter UserId"
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={findUser}>Find</button>
      
      <ul>
        {userInfo.map((item) => {
          return (
            <span key={item.id}>
              <li onClick={() => showMeRepo(item.id)}>{item.name}</li>
              <li>{item.id}</li>
              <li>{item.description}</li>
              <li>
                <img
                  src={item.owner.avatar_url}
                  alt=""
                  width="150px"
                  height="150px"
                />
              </li>
            </span>
          );
        })}
      </ul>
      <ul>
        {repoData.map((item) => {
          return (
            <>
              <Link key={item.id} to="gitRepo">
                <GitRepo
                  key={item.id}
                  name={item.name}
                  fork={item.fork}
                  visibility={item.fork}
                  default_branch={item.default_branch}
                  description={item.description}
                />
              </Link>
            </>
          );
        })}
      </ul>
    </>
  );
};