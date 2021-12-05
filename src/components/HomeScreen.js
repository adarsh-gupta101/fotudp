import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import man from "../man.png";
import fot from "../fot.png";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { userid ,username} from "../slice";
function HomeScreen() {
  let navigate = useNavigate();

  const [contest, setcontest] = useState();

  const [post, setpost] = useState();
  const useriddb = useSelector((state) => state.user.value);
  const usernamex=useSelector((state)=>state.user.username)
  const [userdetails, setuserdetails] = useState();
  console.log(userdetails);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`https://qwertyuiqwertyui.herokuapp.com/allusers/${useriddb}`)
      .then((set) => {
        setuserdetails(set);
        dispatch(userid(set.data[0]._id));
dispatch(username(set.data[0].username))      });
  },[useriddb,dispatch]);
//user searcing



  useEffect(() => {
    axios
      .get("https://qwertyuiqwertyui.herokuapp.com/contests", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: "key",
          withCredentials: true,
          mode: "no-cors",
        },
      })
      .then((res) => {
        setcontest(res.data);
        console.log(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://qwertyuiqwertyui.herokuapp.com/posts", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: "key",
          withCredentials: true,
          mode: "no-cors",
        },
      })
      .then((res) => {
        setpost(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <div style={{ background: "#2C3546", minHeight: "100%" }}>
      <img src={fot} alt=""/>
      {/* <p>{userdetails?.data[0].username}</p> */}
      <p>{usernamex}</p>
      <Post post={post} />
      <p className='text-white text-xl font-bold'>Competation</p>
      <div className='flex flex-row rounded ' style={{ overflowX: "scroll" }}>
        {contest?.map((contests) => {
          return (
            <img alt=""
              key={contests._id}
              src={contests.ContestImage}
              className='w-3/5 rounded-3xl p-2 m-2'
              onClick={() => navigate(`contest/${contests._id}`)}
            />
          );
        })}
      </div>
      <img src={man} className='w-4/5 m-auto' alt=""/>
    </div>
  );
}

export default HomeScreen;
