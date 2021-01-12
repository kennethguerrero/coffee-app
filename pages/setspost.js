import React from "react";
import Link from "next/link";

const SetsPost = ({ url, id }) => {
    return (
        <div>
            <Link href="/sets/[id]" as={`/sets/${id}`}>
                <img src={url} />
            </Link>
            <style jsx> {`
                img {
                    max-width: 350px;
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

export default SetsPost;