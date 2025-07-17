import React, { useEffect, useState } from "react";

export const FetchingApi = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const dataFetch = await fetch(
                "https://jsonplaceholder.typicode.com/posts/"
            );
            const res = await dataFetch.json();
            setData(res);
            console.log(res);
        }
        getData();
    }, []);
    return (
        <div>
            FetchingApi
            {data.map((element) => {
                return (
                    <div key={element.id} className="blog-container">
                        <h1>{element.title}</h1>
                        <p>{element.body}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default FetchingApi;