import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

  const data = useLoaderData();

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/aakashy5990")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);
  return (
    <>
      <div className="text-center my-4 bg-gray-600 text-white p-4 text-3xl">
        Github Details
      </div>

      <div className="flex items-start gap-10 px-4">
        <img src={data.avatar_url} alt="Git Picture" width={300} />

        <ul className="space-y-2 text-lg text-left">
          <li>
            <span className="font-bold">Github Name:</span> {data.name}
          </li>
          <li>
            <span className="font-bold">Github Bio:</span> {data.bio}
          </li>
          <li>
            <span className="font-bold">Github Followers:</span>{" "}
            {data.followers}
          </li>
          <li>
            <span className="font-bold">Github Following:</span>{" "}
            {data.following}
          </li>
          <li>
            <span className="font-bold">Github Profile URL:</span>{" "}
            {data.html_url}
          </li>
          <li>
            <span className="font-bold">Github Blog:</span> {data.blog}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Github;


export const githubInfoLoader = async () =>{
  const response = await fetch('https://api.github.com/users/aakashy5990');
  return response.json();
}