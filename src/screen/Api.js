import React, { useEffect, useState } from "react";
import axios from "axios";
import Data from "../components/Data";

const URL = "/movieList";
const Register = ({history}) => {
  const [info, setInfo] = useState([]);

  //@dec post API 
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.post(URL, {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      });
      setInfo(data.result);
      //console.log(data.result);
    }
    fetchData();
  }, []);

  var obj = JSON.parse(localStorage.getItem("userInfo"));
 // var size = Object.keys(obj).length;

  return (
    <>
      {obj===null? history.push('/login') : info.map((infos, index) => (
        <Data key={index} infos={infos} />
      ))}
      
    </>
  );
};

export default Register;
