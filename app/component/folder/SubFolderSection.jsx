"use client"
import { useRouter } from "next/navigation"

import { useState } from "react"
import SubFolderItem from "./SubFolderItem"


function SubFolderSection({folder}) {
    const [activeFolder, setActiveFolder] = useState()
    const router = useRouter()
  const handleClick = (index,folderid,foldername) =>{
    setActiveFolder(index)
  router.push("/folder/" + folderid + foldername)
  }
  
  
    return (
     <>
       <div className=" pt-2 flex justify-between font-semibold">
          <h2 className="text-[18px] font-bold">SubFolder</h2>
          <p className="text-blue-500 mr-4"> Hide</p>
        </div>
        <div className=" w-[1242px] gap-4  p-6 flex">
          {folder.map((folder, index) => (
            <div onClick={() => handleClick(index, folder.id, folder.name)} key={index} >
           <SubFolderItem folder={folder} activeFolder={activeFolder == index}/>
  
            </div>
          ))}
        </div>
     </>
    )
}

export default SubFolderSection