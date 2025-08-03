import React, { useRef } from 'react';
import { FaLock } from "react-icons/fa6";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setErrorThrowerOptions } from '@clerk/clerk-react/internal';
const Upload = () => {
  const fileInput = useRef(null);
  const [err,setErr] = useState("");
  const navigate = useNavigate();
  const handleButtonClick = () => {
    fileInput.current.click();
  };

  const handleChange = async(e)=>{
    const file = e.target.files[0];
    if(!file){setErr("No file was uploaded");return;}
    setErr("fetching");
    const formData = new FormData();
    formData.append("resume",file);
    try{
      const response = await fetch("http://localhost:3000/api/resume-checker",{
        method : 'POST',
        body : formData
      });
      const data = await response.json();
      console.log(data);
      navigate("/results", { state: { data: data} });
    }
    catch(error){
      console.log(error);
      setErr("Failed to request/fetch the response from api");
    }
  }

  return (
    <div className='mx-[200px]'>
    <div
      className="border-2 border-dashed border-indigo-300 rounded-xl bg-gradient-to-br from-green-50 to-white 
        max-w-md mt-24 p-8 flex flex-col items-center shadow">
      <p className="text-gray-800 text-center mb-2">
        Drop your resume here or choose a file.<br />
      </p>
      <input type="file" accept=".pdf,.doc,.docx" className="hidden" ref={fileInput} onChange={handleChange}/>
      <button className="mt-3 mb-2 px-6 py-2 bg-green-500 hover:bg-green-600 text-white text-lg font-bold rounded-md transition" onClick={handleButtonClick}>
        Upload Your Resume
      </button>
      <div className="flex items-center mt-3">
        <FaLock className="text-gray-500 mr-1" />
        <span className="text-sm text-gray-500 font-medium">Privacy guaranteed</span>
      </div>
    </div>
        <p className='font-bold text-2xl mx-[30px] my-[5vh]'>Upload Your Resume Confidentially</p>
      <div className='content w-[30vw]'>
        <p className='text-[18px]'>We invite you to upload your resume to instantly check its compatibility and get valuable feedback.</p>
        <p className='text-[18px] my-[10px]'>Uploading your document allows our AI-powered tool to provide personalized, actionable insights that can significantly boost your chances in today’s market.</p>
      </div>
    {err=="fetching" && <div className='text-green-700 text-2xl my-[5vh]'>Parsing resume please wait...</div>}
    {(err!="" && err!="fetching") && <div className='text-red-700 text-2xl my-[5vh]'>{err}</div>}
    </div>
  );
};

export default Upload;
