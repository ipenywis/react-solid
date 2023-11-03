import axios from "axios";

export async function updateUserProfile(data) {
  try {
    const response = await axios.post(
      "http://localhost:9000/user/update",
      data
    );

    return response.data;
  } catch (err) {
    throw new Error(
      "Error occurred when trying to save your profile changes!"
    );
  }
}
