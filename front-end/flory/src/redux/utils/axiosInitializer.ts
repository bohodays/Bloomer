import axios from "axios";

export function axiosInitializer() {
  let instance = axios.create({
    baseURL: "http://j8a205.p.ssafy.io:8080",
    // 기본 주소 넣기
  });
  return instance;
}
