import React from "react";
import Link from "next/link";

const Post = ({ url, id }) => {
    return (
        <div>
            <Link href="/post/[id]" as={`/post/${id}`}>
                <img src={url} />
            </Link>
            <style jsx> {`
                img { 
                    max-width: 360px;
                    opacity: 1;
                    backface-visibility: hidden;
                }
                img:hover {
                    opacity: 0.3;
                    transition: 1 ease;
                }
                div {text-align: center;}
            `}
            </style>
        </div>
    )
}

export default Post;