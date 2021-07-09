import React from 'react';

const Create = () => {
    async function handleSubmit(e) {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const body = document.getElementById("content").value;
        const authors = document.getElementById("authors").value;
        const date = new Date();
        const postedBy = authors;
        const data = {
            title,
            body,
            authors,
            date,
            postedBy,
        }
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await fetch("http://localhost:2345/articles/create", options);
            const data = await res.json();
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title"/>

            <label htmlFor="content">Content</label>
            <input type="text" id="content" name="content"/>

            <label htmlFor="authors">Authors</label>
            <input type="text" id="authors" name="authors"/>

            <input type="submit"/>
        </form>
    )
}

export default Create;