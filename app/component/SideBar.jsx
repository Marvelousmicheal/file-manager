"use client"
import { useState } from "react";
import { list } from "../assest/menu";
import CreateFolder from "./CreateFolder";
import Uploadfile from "./files/Uploadfile";
function SideBar() {
    const [active, setactive] = useState(0)
  return (
    <>
    <div className="w-[150px] lg:w-[250px] px-4 bg-[#fcfdff] h-full sticky  flex flex-col items-center justify-between">
    
<div>

      <button className="bg-blue-500 flex justify-center items-center gap-3 w-full px-5 py-3 rounded text-white text-lg mt-3 hover:scale-105 transition-all"   onClick={()=>window.upload_file.showModal()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Create File
      </button>
      <button
        className="bg-blue-700 flex justify-center items-center gap-3 w-full px-5 py-3 rounded text-white text-lg mt-3 hover:scale-105 transition-all"
        onClick={()=>document.getElementById('my_modal_3').showModal()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Create Folder
      </button>
</div>

      <ul className=" w-full flex flex-col mt-3 ">
        {list.map((item, index) => (
          <li className=" w-full" key={item.id}>
            <button
              className={` gap-3 mb-2 text-base font-medium text-gray-400 w-full  flex  items-center pb-2 pt-2 capitalize hover:tex  transition-all ease-out rounded  
             `}
              onClick={() => setactive(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="gray"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={item.icon}
                />
              </svg>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
      {/* You can open the modal using ID.showModal() method */}
  <CreateFolder/> 
  <dialog id="upload_file" className="modal">
  <Uploadfile closeModal={()=>window.upload_file.close()}/>
    </dialog>   
    </div>
  

  </>
  )
}

export default SideBar