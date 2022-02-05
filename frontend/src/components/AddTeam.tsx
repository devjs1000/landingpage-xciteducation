import { useState, useContext } from "react";
import { Upload } from "react-bootstrap-icons";
import { context } from "../context/mainContext";
import { uploadImageToFirebase, uploadToFirestore } from "../firebase/fire";

const AdminAccess = () => {
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const ctx = useContext(context);
  const [uploaded, setUploaded] = useState(true);
  const [img, setImg] = useState({} as any);
  const uploadData = () => {
    let dataToUpload = {
      name,
      quote,
      img,
    };
    uploadToFirestore("team", dataToUpload);
    ctx.setTeam([...ctx.team, dataToUpload]);
    setName('')
    setQuote('')
    setImg('')
  };
  const handleFileUpload = (e: any) => {
    setUploaded(false);
    let file = e.target.files[0];
    setSelectedFile(file);
    uploadImageToFirebase(file, (imgData: any) => {
      setUploaded(true);
      setImg(imgData);
    });
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div className="bg-white rounded-md flex flex-wrap justify-center items-center p-2  w-[20rem] h-[20rem]">
        <h1 className="text-slate-700 text-xl w-full mx-4 text-center ">
          add team member
        </h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" w-full py-2 rounded-md mx-1 px-2 bg-slate-100"
          placeholder="name"
        />
        <input
          type="text"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          className="w-full py-2 rounded-md mx-1 px-2 bg-slate-100"
          placeholder="quote"
        />
        <div className="flex w-full justify-between items-around">
          <label
            htmlFor="file"
            className="w-auto py-2 px-4 rounded-md mx-1 inline-block bg-white "
          >
            <Upload />
          </label>
          <img
            src={img.url}
            className="rounded-full  w-full object-cover  bg-blue-500 h-12 w-12 "
          />
        </div>

        <input
          onChange={handleFileUpload}
          type="file"
          id="file"
          className="hidden"
        />
        <button
          onClick={uploadData}
          className="bg-white px-4 font-semibold py-2 bg-blue-500 text-white w-full mx-1 rounded-md "
        >
          add member
        </button>
      </div>
    </div>
  );
};

export default AdminAccess;
