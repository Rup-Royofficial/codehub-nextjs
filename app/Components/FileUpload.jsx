import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import  axios  from 'axios'

const FileUpload = () => {
    const onDrop = useCallback(async acceptedFiles => {
        try {
          // Create a FormData object to send the files
          const formData = new FormData()
          acceptedFiles.forEach(file => {
            formData.append('files', file)
          })
      
          // Send the files to the server-side endpoint
         await axios.post('/authenticated/homepage/api/fileUpload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
      
          .then((response) => {
            console.log(response.data.uploads);
          })
        } catch (error) {
          console.error('Error uploading files:', error)
        }
      }, [])

      
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag and drop some files here, or click to select files</p>
      )}
    </div>
  )
}

export default FileUpload