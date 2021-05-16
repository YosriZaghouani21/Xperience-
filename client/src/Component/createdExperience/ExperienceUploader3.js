import React, {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addImageToExperience3} from '../../JS/actions/index';
import {Button} from 'react-bootstrap';

export default function ExperienceUploader3({image3, setImage3, id, exp}) {
  const dispatch = useDispatch();
  const fileSelect = useRef(null);
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);
  async function handleImageUpload() {
    if (fileSelect) {
      fileSelect.current.click();
    }
  }
  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
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
    });

    xhr.onreadystatechange = e => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);

        setImage3(response.secure_url);
        setShow(true);

        console.log(response.secure_url);
      }
    };

    fd.append('upload_preset', process.env.REACT_APP_UNSIGNED_UPLOAD_PRESET);
    fd.append('tags', 'browser_upload');
    fd.append('file', file);
    xhr.send(fd);
  }

  function handleCancel() {
    if (exp && exp.photo3) {
      setImage3(exp.photo3);
    } else {
      setImage3(null);
    }
    setShow(false);
  }

  function handleSave() {
    setImage3(image3);
    dispatch(addImageToExperience3(image3));
    setShow(false);
  }
  return (
    <>
      {image3 && show ? (
        <>
          <div className="flex justify-between items-center mt-2">
            <Button className="btn-danger" onClick={handleCancel} size="sm">
              Annuler
            </Button>
            <Button className="btn-success" onClick={handleSave} type="button" size="sm">
              Enregistrer
            </Button>
          </div>
        </>
      ) : (
        <div className="bg-gray-200 border-4 border-dashed border-gray-400 rounded-lg">
          <form className="flex justify-center items-center h-full">
            <Button className="btn-info " onClick={handleImageUpload} size="sm">
              Changer
            </Button>
            {progress !== 0 ? <span className="text-gray-700">{progress}%</span> : <p></p>}

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
