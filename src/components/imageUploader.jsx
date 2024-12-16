import React, { forwardRef } from "react";

const CLOUD_NAME = "dsccvgunt"; // Tu Cloud Name
const UPLOAD_PRESET = "cencosudsignage"; // Tu Upload Preset

export const ImageUploader = forwardRef(({ onUpload }, ref) => {
  const handleChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="hidden">
      <input ref={ref} type="file" className="hidden" accept="image/*" onChange={handleChange} />
    </div>
  );
});
