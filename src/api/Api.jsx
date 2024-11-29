import axios from "axios";

export const API = axios.create({ baseURL: import.meta.env.VITE_SERVER_API });

const apiCall = async (url, method = "get", data = null) => {
  // url : 엔드포인드(url) baseURL에 이어지는 경로
  // method : HTTP 메서드 : get, post, put, delete 등
  // data : 요청에 포함할 데이터 (post, put, patch 에서 사용)
  try {
    // 기본 헤더 설정
    const headers = {
      "Content-Type": "application/json", // json 형식의 데이터 전송
    };

    // 요청 설정
    const config = {
      url, // 요청할 API 경로
      method, // 요청 메서드 (GET, POST 등)
      headers, // 요청 헤더
    };

    // 요청 데이터 추가
    if (method.toLowerCase() === "get") {
      // GET 요청 : 데이터를 params로 설정하여 쿼리 문자열로 전달
      config.params = data;
    } else {
      // POST, PATCH, PUT 등의 요청 : 데이터를 data로 설정하여 요청 본문에 포함
      config.data = data;
    }

    // 요청 보내기 (axios를 사용해 response 반환)
    const response = await API(config);
    return response;
  } catch (error) {
    // 에러처리
    console.error("API call error:", error);
    throw error;
  }
};

export default apiCall;
