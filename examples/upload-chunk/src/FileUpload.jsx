import React, { useState } from "react";
//import Progress from "../../components/progress";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    // fileSize = 272,629,760 bytes
    const chunkSize = 5 * 1024 * 1024; // 5MB (adjust based on your requirements)
    const totalChunks = Math.ceil(selectedFile.size / chunkSize); // 52.6 => 53
    const chunkProgress = 100 / totalChunks;  // 100/53 = 1.8867
    let chunkNumber = 0;// 0 ; 
    let start = 0;      // 0 ; 
    let end = 0;        // 0 ; (0+)

    const uploadNextChunk = async () => {
      if (end <= selectedFile.size) { // 0 < 260*1024*1024 ; 
        const chunk = selectedFile.slice(start, end);
        const formData = new FormData();
        formData.append("file", chunk);
        formData.append("chunkNumber", chunkNumber);
        formData.append("totalChunks", totalChunks);
        formData.append("originalname", selectedFile.name);

        fetch("http://localhost:8000/upload", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log({ data });
            const temp = `Chunk ${
              chunkNumber + 1
            }/${totalChunks} uploaded successfully`;
            setStatus(temp);
            setProgress(Number((chunkNumber + 1) * chunkProgress));//   (0+1)*1.8867
            console.log(temp);
            chunkNumber++;// 0++
            start = end;
            end = start + chunkSize;
            uploadNextChunk();
          })
          .catch((error) => {
            console.error("Error uploading chunk:", error);
          });
      } else {
        setProgress(100);
        setSelectedFile(null);
        setStatus("File upload completed");
      }
    };

    uploadNextChunk();
  };

  return (
    <div>
      <h2>Resumable File Upload</h2>
      <h3>{status}</h3>
      {progress > 0 && <p>{progress + "%"}</p>}
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
};

export default FileUpload;
