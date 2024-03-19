import React, { useState, useEffect } from "react";
import { database } from "FirebaseConfig";
import { ref, onValue, push, set } from "firebase/database";
import { TextField } from "@mui/material";
import CustomButton from "components/customButton/CustomButton";
import "./Comments.scss";

function Comments() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [userName, setUserName] = useState("");
    const [commentOn, setCommentOn] = useState("");

    useEffect(() => {
        const commentsRef = ref(database, "comments");
        onValue(commentsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setComments(Object.values(data));
            }
        });
    }, []);

    const handleCommentSubmit = () => {
        if (newComment.trim() !== "" && userName.trim() !== "") {
            const newCommentRef = push(ref(database, "comments"));
            set(newCommentRef, {
                text: newComment,
                name: userName,
                createdAt: Date.now(),
            });
            setNewComment("");
            setUserName("");
        }
    };

    return (
        <div className="comments-wrapper">
            <div
                className="comment-toggle"
                onClick={() => setCommentOn(!commentOn)}
            >
                > Feel free to leave the comment...
            </div>
            <div className="comment-text-input">
                {comments.map((comment, index) => (
                    <div
                        key={index}
                        className="comments-content"
                    >
                        <div className="comment-text">{comment.text}</div> <div className="comment-name">{comment.name}</div>
                        <p className="comment-date">Date: {new Date(comment.createdAt).toLocaleString()}</p>
                    </div>
                ))}
                {commentOn && (
                    <div className="comment-inputs-wrapper">
                        <div className="comment-name-input">
                            <TextField
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="Enter your name..."
                                required
                            />
                        </div>
                        <div className="comment-text-input">
                            <TextField
                                type="text"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Leave your comment..."
                                multiline
                                fullWidth
                            />
                        </div>
                        <CustomButton
                            className="comment-send"
                            title="Send"
                            onClick={handleCommentSubmit}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Comments;
