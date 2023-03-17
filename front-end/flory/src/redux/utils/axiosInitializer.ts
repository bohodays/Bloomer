import axios from "axios";

export function axiosInitializer() {
  let instance = axios.create({
    baseURL: "http://localhost:8080",
    // 기본 주소 넣기
  });
  return instance;
}
