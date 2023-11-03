import axios from "axios";
import { useState } from "react";

export function ProfilePictureUploader() {
  const [imageData, setImageData] = useState(null);

  const uploadImageToServer = async (image) => {
    await axios.post("http://localhost:9000/image/upload", { image });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setImageData(file);
    await uploadImageToServer(file);
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="font-bold text-left">Profile Picture:</label>
      {imageData && (
        <div className="mt-2 mb-2">
          <img
            src={URL.createObjectURL(imageData)}
            alt="Profile Preview"
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        name="image"
        onChange={handleImageChange}
        className="text-xs"
      />
    </div>
  );
}
