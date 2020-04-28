import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(url);
    // above can be further destructured
    const modifiedData = {
      confirmed,
      deaths,
      recovered,
      lastUpdate,
    };

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
