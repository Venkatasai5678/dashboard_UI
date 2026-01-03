import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5067/api",
});

export const fetchChartData = async (filters) => {
  const response = await api.get("/dashboard/chart-data",
    {
      params: filters,
    }
  );
  return response.data;
};
