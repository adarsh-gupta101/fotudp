import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import newr from "../newudpc.png";
import firebase from "firebase";
import { useSelector } from "react-redux";

function Contestdetail() {
  const [posts, setposts] = useState();
  const [value, setvalue] = useState();

  const [contest, setcontest] = useState();
  const [preview, setPreview] = useState();
  const [ImageURL, setImageURL] = useState();
  const userid=useSelector(state=>state.user.userid)

  let params = useParams();
  console.log(value);


  useEffect(() => {
    axios
      .get(`https://qwertyuiqwertyui.herokuapp.com/posts/${params.contestId}`)
      .then((set) => {
        setposts(set.data);
        // console.log(set.data);
      });
  }, [params]);
  useEffect(() => {
    axios
      .get(
        `https://qwertyuiqwertyui.herokuapp.com/contests/getcontestbyid/${params.contestId}`
      )
      .then((set) => {
        setcontest(set.data);
        // console.log(set.data);
      })
      .catch((err) => console.log(err));
  }, [params]);
  //   useEffect(() => {
  //     // create the preview
  //     const objectUrl = URL.createObjectURL(value)
  //     setPreview(objectUrl)
  //     console.log(objectUrl)

  //     // free memory when ever this component is unmounted
  //     return () => URL.revokeObjectURL(objectUrl)
  //  }, [])
  const selectfile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setvalue(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setvalue(e.target.files[0]);

    var objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(objectUrl);
    console.log(ImageURL,objectUrl);

    uploadImageAsync(preview)
      .then((res) => {
        setImageURL(res);
      })
      .catch((err) => console.log(err));
    console.log(ImageURL);
  };
  async function uploadImageAsync(uri) {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const ref =  firebase.storage().ref().child(new Date().toISOString());
    const snapshot = await ref.put(blob);
    console.log(snapshot.ref.getDownloadURL())

    // We're done with the blob, close and release it
    //  blob.close();
    // console.log(await snapshot.ref.getDownloadURL())
    //snapshot.ref.getDownloadURL().then((add)=>{setImageURL(add);
    //  PostUpload();
    // })
    return await snapshot.ref.getDownloadURL();
  }
  useEffect(() => {});

  const likefunction = async (postid) => {
    // PostlikearrayIndex = Post.findIndex((obj) => obj._id == postid);
    // Post[PostlikearrayIndex].Postlike.push(useridnumber);
    console.log(posts);

    await axios
      .post(`https://qwertyuiqwertyui.herokuapp.com/posts/like/${postid}`, {
        userid: userid,
        // contestid: contest_id,
      })
      .then((res) => {
        // console.log(" friommmmm lllllllllllllllllllllllllll", Post);
        //  console.log("objecfffffffffffffft", res.data);
        // console.log("res.dauuuuuuuuuuuuuuta", res.data);
        setposts(res.data);
      })
      .catch((err) => {
        alert("err", err);
      });
  };
  const PostUpload = async () => {
    await axios
      .post("https://qwertyuiqwertyui.herokuapp.com/newposts", {
        PostImage: ImageURL,
        PostingUserId: userid,
        contestPostId: params.contestId,
      })
      .then((res) => {
        console.log("from post", res);
      })
      .then(() => {
       // setUploaded(true);
       window.location.reload()
      })

      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
      });
  };


  return (
    <div
      className='flex flex-row flex-wrap w-full  m-auto'
      style={{ backgroundColor: "#2C3546" }}>
      {/* {contest?.map((data) => {
        return(
            <div>
                <img src={data.ContestImage} className="w-full"/>
                </div>
        );
      })} */}

      <div
        style={{
          backgroundImage: `url(${contest?.ContestImage})`,
          minHeight: "40vh",
          width: "100vw",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>

      {/* {value ? <img src={value?URL.createObjectURL(value):undefined}></img> : undefined} */}
      {/* <span className='w-full '> */}
      <label
        htmlFor='files'
        className='  bg-white rounded-2xl  shadow-2xl p-2 m-2'
        style={{ marginLeft: "70%" }}>
        Participate
      </label>

      <input
        type='file'
        id='files'
        accept='image/png ,image/jpg'
        placeholder='Participate'
        className='bg-white rounded-2xl  shadow-2xl p-2 m-2'
        onChange={selectfile}
        style={{
          marginLeft: "70%",
          visibility: "hidden",
          display: "none",
        }}></input>
      {/* / */}
      {value ? (
        <img
          src={value ? URL.createObjectURL(value) : undefined}
          style={{ width: "70vw", margin: "auto" }}></img>
      ) : undefined}
      {ImageURL ? (
        <p className='w-full  bg-white text-2xl text-center m-2 rounded' onClick={()=>PostUpload()}>
          Upload
        </p>
      ) : null}

      {/* <img
        src={contest?.ContestImage}
        className='w-full rounded'
        style={{ backgroundAttachment: "fixed" }}
      /> */}

      {posts?.map((res) => {
        return (
          <div className='' key={res._id} style={{ width: "" }}>
            <img
              src={res.PostImage}
              className='h-auto  m-4 rounded-2xl'
              style={{ width: "40vw" }}
            />
<button onClick={()=>likefunction( res._id)}>
            <img src={newr} className='w-12 m-auto' />
            </button>
            <p className='text-center text-white font-bold'>
              {res.Postlike.length}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Contestdetail;
