import React, { useEffect, useState } from "react";
import "./pages.css";
import Post from "../components/Post";
import PageTitle from "../components/PageTitle";
import API from "../utils/API";

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        API.getPosts()
            .then(res => setPosts(res))
            .catch(err => console.log(err));
    })

    return (
        <div className="container">
            <div className="posts-wrapper">
                <PageTitle text="Posts" color="light" />
                <div 
                    className="uk-flex uk-flex-column uk-flex-middle"
                    uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300"
                >
                    {
                        posts.map(post => (
                            <Post
                                key={post.id}
                                id={post.id}
                                date={post.date}
                                title={post.title}
                                copy={post.copy}
                                image={post.image}
                                gif={post.gif}
                                video={post.video}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Posts;