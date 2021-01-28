import Layout from "../components/layout";
import Head from "next/head";
import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";

export default function Feedback() {
    const [nameValue, setNameValue] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const router = useRouter();

    const handleNameChange = (event) => {
        const fieldName = event.target.getAttribute("name");
        setNameValue({
            ...nameValue,
            [fieldName]: event.target.value
        });
    }

    const handleSubmit = useCallback(
        event => {
            event.preventDefault();

            try {
                fetch('/api/contact-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        fullName: nameValue.fullName,
                        emailAddress: nameValue.emailAddress,
                        message: nameValue.message
                    })
                });
            }
            catch (e) {
                console.error("ERROR", e);
            }
    
            if (nameValue.emailAddress == undefined || nameValue.message  == undefined){
                
            }
            else {
                setIsComplete(true);
                router.push("/feedback");
            }
        },
        [nameValue]
    );

    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>Feedback</title>
                    <link rel="icon" href="/coffeeicon.png" />
                </Head>

                <main>
                    <h1 className="title">
                        LET'S CONNECT
                    </h1>

                    <div className="grid">
                        <p>
                            We would love to hear your thoughts, suggestions, questions or concerns with anything so we can improve!
                        </p>
                    </div>

                    <div className="grid">
                       <form onSubmit={handleSubmit}>
                            <div className="divContent">
                                <input type="text" name="fullName" placeholder="Full Name" className="myInput" value={nameValue.fullName || "" } onChange={handleNameChange} />
                            </div>

                            <div className="divContent">
                                <input type="email" name="emailAddress" placeholder="Email Address" className="myInput" value={nameValue.emailAddress || "" } onChange={handleNameChange} required />
                            </div>

                            <div className="divContent">
                                <textarea name="message" placeholder="Your message" className="myInput" value={nameValue.message || "" } onChange={handleNameChange} required />
                            </div>

                            <input className="btnSubmit" type="submit" value="SUBMIT" />
                            <span className="message" style={{ display: isComplete ? "block": "none" }}>
                                Message successfully sent!
                            </span>
                       </form>
                    </div>

                </main>
                
                <style jsx> {`
                    .message {
                        color: green;
                        font-size: 13px;
                        text-align: default
                    }
                    .btnSubmit {
                        width: 120px;
                        height: 30px;
                        font-weight: 700;
                        color: #FFF;
                        background-color: #404040;
                        font-size: 11px;
                        border-style: none;
                    }
                    .btnSubmit:hover {
                        background-color: #996515;
                        transition: .5s ease;
                    }
                    form {
                        width: 90%;
                    }
                    .myInput {
                        width: 100%;
                        max-width: 600px;
                    }
                    textarea {
                        height: 10rem;
                    }
                    .divContent {
                        margin-bottom: 25px;
                    }
                    .grid { 
                        width: 80%;
                    }
                    p {
                        text-align: justify;
                    }
                    .container {
                        min-height: 100vh;
                        padding: 0 0.5rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    main {
                        padding: 4rem 0;
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .grid {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-wrap: wrap;
        
                        max-width: 800px;
                        margin-top: 1rem;
                    }
                    .title {
                        margin: 0;
                        line-height: 1.15;
                        font-size: 4rem;
                    }
                    @media (max-width: 600px) {
                        .grid {
                            width: 100%;
                            flex-direction: column;
                        }
                        .title {
                            font-size: 2.5rem;
                        }
                    }
                `}
                </style>
            </div>
        </Layout>
    );
}