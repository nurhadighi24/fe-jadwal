import axiosWithConfig from "../axiosWithConfig";

const BASE_URL = "https://grandprize-admin.my.id/api";

export const getMataKulsList = async () => {
  try {
    const response = await axiosWithConfig.get(`${BASE_URL}/mata-kuliah`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
