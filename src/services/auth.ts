import http from "./http";

const baseUrl = "/users";
export const authService = {
  async login(email: string, password: string) {
    const response = await http.post(`${baseUrl}/auth`, { email, password });
    console.log(response);
    return response.data;
  },
  async logout() {
    await http.post("/logout");
  },
};
