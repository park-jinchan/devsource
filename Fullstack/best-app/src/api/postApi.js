//postApi.js
import axios from 'axios';
let baseUrl = `http://localhost:7777/api`;

//---post 글쓰기 (파일업로드 x)---------------
export const apiCreatePost = async (data) => {
    // 백엔드 /api/posts 로 post방식으로 요청 보내서 응답 받기
    const response = await axios.post(`${baseUrl}/posts`, data, {
        headers: {
            'Content-Type': 'application/json', //파일업로드시 multipart/form-data로 전송해야 함
        },
    });
    return response.data;
};
//--- post 글쓰기 (파일 업로드하는 경우) method:post, enctype="multipart/form-data"---------------
export const apiCreatePostFileUp = async (data) => {
    const response = await axios.post(`${baseUrl}/posts`, data, {
        headers: {
            'Content-Type': 'multipart/form-data', //파일업로드시 multipart/form-data로 전송해야 함
        },
    });
    return response.data;
};
// ---post 목록 가져오기
export const apiFetchPostList = async () => {
    const response = await axios.get(`${baseUrl}/posts`);
    return response.data;
};

// ---post 상세 가져오기---
export const apiFetchPostById = async (id) => {
    const response = await axios.get(`${baseUrl}/posts/${id}`);
    return response.data;
};
