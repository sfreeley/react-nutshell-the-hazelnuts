import React from "react";

const FriendCard = (props) => {
  
    return (
        <>
        <div className="singleFriend">
        <div className="friend__userDetails">
            {/* <img class="friend__userImage" src="/images/userIcon.png"> */}
            <div className="friend__name">
            {/* what should this be? */}
            User: {props.friend.user.username}
                Friend: {props.friend.followingId}
            </div>
        </div>
        <div className="friendsList__deleteBtn">
            <button  className="deleteBtn" type="button">&times;</button>
        </div>
    </div>
    </>
    )
}

export default FriendCard;



