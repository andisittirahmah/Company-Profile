"use client";

import { useEffect, useState } from "react";

function Teams() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://randomuser.me/api/?results=5");
      const responseFinal = await response.json();

      responseFinal.results[0].expertise = "Spesialis Jantung";
      responseFinal.results[1].expertise = "Spesialis Penyakit Dalam";
      responseFinal.results[2].expertise = "Spesialis Kecantikan";
      responseFinal.results[3].expertise = "Spesialis Anak";
      responseFinal.results[4].expertise = "Spesialis THT";

      setTeam(responseFinal.results);
      console.log(responseFinal.results);
    };

    getData();
  }, []);

  return (
    <div>
      <h2 className="font-bold text-center my-[50px] text-4xl">
        Meet Our Best Doctor
      </h2>
      <ul className="w-[85%] flex-col justify-between m-[20px] mx-auto">
        {team.map((response) => {
          return (
            <li
              className="bg-blue-900 rounded-[50px] mx-0 my-[20px] p-[20px] text-center flex justify-center items-center border-gray-500"
              key={response.id.value}
            >
              <img
                className="w-[130x] h-[130px] rounded-full mb-[10px] object-cover"
                src={response.picture.thumbnail}
                alt=""
              />

              <div>
                <h3 className="text-white text-[30px] mx-[15px] my-0">
                  {response.name.title +
                    " " +
                    response.name.first +
                    " " +
                    response.name.last}
                </h3>
                <p className="text-white text-[18px]">{response.expertise}</p>
                <p className="text-white text-[15px]">{response.email}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Teams;
