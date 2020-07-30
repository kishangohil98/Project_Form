import axios from "axios";

export const postData = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log("axios submit called");
  try {
    await axios.post("/api/post", formData, config);
    alert("Data submitted successfully!!");
  } catch (error) {
    console.log("Error:" + error);
  }
};
