import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김효진",
        comment: "안녕하세요, 김효진입니다."
    },
    {
        name: "신석우",
        comment: "리액트 재미있어요~!!!"
    },
    {
        name: "우왁굳",
        comment: "알잘딱깔센~~!!!"
    }
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;