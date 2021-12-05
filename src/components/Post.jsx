import React from 'react'
import new0mon from "../newudpc.png";
function Post({post}) {
    console.log(post,"post")
    return (
        <div className="flex flex-row   "  style={{overflowX:"scroll",height:"50vh"}}>
            {post?.map((res=>{
                return(
                //     <span>
                //    <img key={res?._id} src= {res?.PostImage} className=" rounded-2xl mx-2 " style={{width:"50vw",height:"40vh"}}/>
                //    <img src={new0mon}/>
                //    </span>
                <div key={res._id}className=" m-2 w-3/5" style={{width:"100%"}}> <p className="" style={{color:"#2C3546"}}>wserdtfvygbvyftdrsexrdctfvg</p>
                             <img key={res?._id} src= {res?.PostImage} className=" rounded-2xl mx-2 " style={{width:"50vw",height:"30vh"}}/>

                               <img src={new0mon} className="w-2/5 m-auto"/>
                               <p className=" text-white text-center">{res?.Postlike.length}</p>

                
                </div>
                )
            }))}
            
        </div>
    )
}

export default Post
