import axiosWithConfig from "../axiosWithConfig";

const BASE_URL = "https://grandprize-admin.my.id/api";

export const getDayList = async () => {
  try {
    const response = await axiosWithConfig.get(`${BASE_URL}/day`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
