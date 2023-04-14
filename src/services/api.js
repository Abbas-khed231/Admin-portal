import axios from "axios";
import constant from "../constants";

const getExchangeList = async () => {
  try {
    const response = await axios.get(
      `${constant.domainName}/exchanges?format=json`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
        },
      }
    );
    console.log({response});
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};

const apis = {
  getExchangeList,
};

export { apis };
