import React, { ChangeEvent, useState } from "react";
import { Button, Input } from "@mui/material";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";

export default function UploadImage() {
  const [img, setImg] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImg(file);
    }
  };

  const handleUpload = async () => {
    if (img) {
      const imageId = uuidv4();
      const imgRef = ref(storage, `files/${imageId}`);
      await uploadBytes(imgRef, img);
      // console.log("File name:", img.name);
      // console.log("File size:", img.size);
      // console.log("File type:", img.type);
      // window.alert("File uploaded successfully");
      let something = await getDownloadURL(imgRef);
      console.log(something);
    } else {
      console.error("No file selected");
    }
  };

  return (
    <div>
      <Input type="file" onChange={handleFileChange} />
      <Button variant="contained" color="primary" onClick={handleUpload}>
        Upload
      </Button>
    </div>
  );
}
