import React, {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addImageToProfile} from '../JS/actions';

export default function ImageUploader({image, setImage}) {
  const dispatch = useDispatch();
  const fileSelect = useRef(null);
  //   const [image, setImage] = useState('');
  const [progress, setProgress] = useState(0);

  async function handleImageUpload() {
    if (fileSelect) {
      fileSelect.current.click();
    }
  }

  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      uploadFile(files[i]);
    }
  }

  function uploadFile(file) {
    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}/upload`;
    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener('progress', e => {
      setProgress(Math.round((e.loaded * 100.0) / e.total));
      console.log(Math.round((e.loaded * 100.0) / e.total));
    });

    xhr.onreadystatechange = e => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const response = JSON.parse(xhr.responseText);

        setImage(response.secure_url);
        console.log(response.secure_url);
      }
    };

    fd.append('upload_preset', process.env.REACT_APP_UNSIGNED_UPLOAD_PRESET);
    fd.append('tags', 'browser_upload');
    fd.append('file', file);
    xhr.send(fd);
  }

  function handleCancel() {
    setImage(null);
  }

  function handleSave() {
    setImage(image);
    // dispatch(addImageToProfile(image));
  }
  return (
    <>
      {image ? (
        <>
          <img
            className="object-contain rounded-lg"
            src={image.replace('upload/', 'upload/w_600/')}
            style={{height: 400, width: 600}}
            alt="..."
          />
          <div className="flex justify-between items-center mt-2">
            <button
              className="text-gray-700 hover:text-gray-500 border-2 border-gray-300 px-4 py-2 rounded w-1/2"
              onClick={handleCancel}
              type="button"
            >
              Cancel
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-800 border-2 border-blue-600 text-white px-4 py-2 rounded ml-2 w-1/2"
              onClick={handleSave}
              type="button"
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <div
          className="bg-gray-200 border-4 border-dashed border-gray-400 rounded-lg"
          style={{height: 400, width: 600}}
        >
          <form className="flex justify-center items-center h-full">
            {progress === 0 ? (
              <div className="text-gray-700 text-center">
                <button
                  className="bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded block m-auto"
                  onClick={handleImageUpload}
                  type="button"
                >
                  Browse
                </button>
              </div>
            ) : (
              <span className="text-gray-700">{progress}%</span>
            )}

            <input
              ref={fileSelect}
              type="file"
              accept="image/*"
              style={{display: 'none'}}
              onChange={e => handleFiles(e.target.files)}
            />
          </form>
        </div>
      )}
    </>
  );
}
