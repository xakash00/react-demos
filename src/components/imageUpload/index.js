import React, { useState } from "react";

const ImageUploading = () => {
  const [image, setImage] = useState();

  const handleImage = (e) => {
    e.preventDefault();
    console.log(e.target.files);
  };

  return (
    <div>
      <form onSubmit={handleImage}>
        <input type="file" name="file" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImageUploading;
