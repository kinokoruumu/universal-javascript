import axios, { AxiosInstance } from "axios";
import { config } from "../config";

class Client {
  public http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: config.API_BASE_URL,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  public getTop() {
    return this.http.get("/top");
  }
}

export default new Client();
