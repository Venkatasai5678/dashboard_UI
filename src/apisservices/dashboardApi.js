import axios from "axios";
import api from "./axios"

 

export const fetchChartData = async (filters) => {
  const response = await api.get("/dashboard/chart-data",
    {
      params: filters,

    }
  );
  return response.data;
};
