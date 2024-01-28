import { useState, useEffect } from 'react';
import axios from 'axios';

const PostAxios = () => {
    const [postData, setPostData] = useState({
        id: 0, userId: 0, title: "", body: ""
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('https://example.com/api/endpoint', postData);

                console.log('Response:', response.data);
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        if (postData.id && postData.userId && postData.title && postData.body) {
            fetchData();
        }
    }, [postData]);

    return (
        <div>
            <input
                type="number"
                value={postData.id}
                onChange={(e) => setPostData({ ...postData, id: e.target.value })}
            />
            <input
                type="number"
                value={postData.userId}
                onChange={(e) => setPostData({ ...postData, userId: e.target.value })}
            />
            <input
                type="text"
                value={postData.title}
                onChange={(e) => setPostData({ ...postData, title: e.target.value })}
            />
            <textarea
                value={postData.body}
                onChange={(e) => setPostData({ ...postData, body: e.target.value })}
            />

        </div>
    );
};

export default PostAxios;
