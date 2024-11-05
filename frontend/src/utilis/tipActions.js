"use client";
import { useDispatch, useSelector } from "react-redux";
import { likeTip, dislikeTip } from "../redux/features/tipSlice";
import { MDBBtn } from "mdb-react-ui-kit";
import Image from "next/image";
import Like from "../public/Like.svg" ;
import Dislike from "../public/dislike.svg" ;
const useTipActions = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLike = (tipId) => {
    dispatch(likeTip({ id: tipId }));
  };

  const handleDislike = (tipId) => {
    dispatch(dislikeTip({ id: tipId }));
  };

  const likeButton = (likeCount, tipId) => (
    <div>
      {!user && (
        <p className="flex likeCount">
         <Image src={Like} alt="Like icon" />{likeCount}
        </p>
      )}
      {user?.result?.role === "admin" && (
        <p className="flex likeCount">
          <Image src={Like} alt="Like icon" /> {likeCount}
        </p>
      )}
      {user?.result?.role === "user" && (
        <div className="flex">
          <MDBBtn
            onClick={() => handleLike(tipId)}
            style={{
              background: "transparent",
              boxShadow: "none",
              padding: "0px",
            }}
          >
            <Image src={Like} alt="Like icon" />{" "}
          </MDBBtn>
          <p className="likeCount">{likeCount}</p>
        </div>
      )}
    </div>
  );

  const dislikeButton = (dislikeCount, tipId) => (
    <div>
      {!user && (
        <p className="flex likeCount">
          <Image src={Dislike} alt="Dislike icon" /> {dislikeCount}
        </p>
      )}
      {user?.result?.role === "admin" && (
        <p className="flex likeCount">
         <Image src={Dislike} alt="Dislike icon" /> {dislikeCount}
        </p>
      )}
      {user?.result?.role === "user" && (
        <div className="flex">
          <MDBBtn
            onClick={() => handleDislike(tipId)}
            style={{
              background: "transparent",
              boxShadow: "none",
              padding: "0px",
            }}
          >
            <Image src={Dislike} alt="Dislike icon" /> {" "}
          </MDBBtn>
          <p className="likeCount">{dislikeCount}</p>
        </div>
      )}
    </div>
  );

  return { handleLike, handleDislike, likeButton, dislikeButton };
};

export default useTipActions;
