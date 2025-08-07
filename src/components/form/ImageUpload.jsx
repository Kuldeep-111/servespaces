import React, { useState, useEffect, useRef } from 'react';
import Label from './Label';
import { FaUpload } from 'react-icons/fa';

const ImageUpload = ({ label, name, value, onChange, required = false, reset }) => {
  const [preview, setPreview] = useState(value || '');
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null); // ✅ to reset the file input element

  // ✅ Reset preview, fileName, and file input on `reset` change
  useEffect(() => {
    setPreview('');
    setFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // clear file input
    }
  }, [reset]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      setFileName(file.name);
      onChange(name, file); // Send back to parent
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="">
      {/* Label */}
      {label && <Label name={name} label={label} required={required} />}

      {/* Upload Button */}
      <label
        htmlFor={name}
        className="flex items-center gap-3 cursor-pointer w-full h-[50px] px-4 py-2 border border-[#45464f] rounded-[10px] bg-transparent text-[#eee] text-[12px] hover:border-[#666]"
      >
        <FaUpload className="text-[#ccc] font-[13px]" />
        <span className='block text-[15px] text-primary tracking-[0.8px] font-roboto'>
          {fileName || 'Upload File'}
        </span>
        <input
          type="file"
          accept="image/*"
          id={name}
          name={name}
          required={required}
          onChange={handleFileChange}
          ref={fileInputRef} // ✅ assign the ref here
          className="hidden"
        />
      </label>

      {/* Image Preview */}
      {preview && (
        <div className="mt-2">
          <img
            src={typeof preview === 'string' ? preview : URL.createObjectURL(preview)}
            alt="Preview"
            className="w-32 h-32 object-cover border border-gray-500 rounded"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
