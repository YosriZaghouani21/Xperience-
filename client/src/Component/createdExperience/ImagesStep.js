import React, { useState } from "react";

import { Form, Input, Button } from "reactstrap";
const ImagesStep = ({
  match: {
    params: { id },
  },
}) => {
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };
  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "content-type": "application/json" },
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmitFile}>
        <Input
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
        />
        <Button type="submit">Submit</Button>
      </Form>
      {previewSource && (
        <img
          src={previewSource}
          className="rounded"
          alt="chosen"
          style={{ height: "300px", width: "300px" }}
        />
      )}
    </div>
  );
};

export default ImagesStep;
