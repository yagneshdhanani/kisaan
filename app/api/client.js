import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.63.90:9000/api/",
});

export default apiClient;
