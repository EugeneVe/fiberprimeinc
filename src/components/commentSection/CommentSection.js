import React, { useState, useEffect } from "react";
import { database } from "FirebaseConfig";
import { ref, onValue, push, set } from "firebase/database";
import { TextField } from "@mui/material";
import "./CommentSection.scss";

function CommentSection() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [userName, setUserName] = useState("");

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
            <h3>Comments:</h3>
            <div className="comments-content">
                {comments.map((comment, index) => (
                    <div key={index}>
                        <div className="comment-text">{comment.text}</div> <div className="comment-name">{comment.name}</div>
                        <p className="comment-date">Date: {new Date(comment.createdAt).toLocaleString()}</p>
                    </div>
                ))}
            </div>
            <TextField
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name..."
                required
            />
            <TextField
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Leave your comment..."
                multiline
                fullWidth
            />
            <button
                className="comment-send"
                onClick={handleCommentSubmit}
            >
                Send
            </button>
        </div>
    );
}

export default CommentSection;
