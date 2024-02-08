"use client"

import { useRouter } from "next/navigation"
import FolderItem from "./FolderItem"
import { useEffect, useState } from "react"
import { deleteDoc, doc, getFirestore } from "firebase/firestore"
import { app } from "@/app/config/firebaseConfig"
import { toast } from "react-toastify"



function Foldersection({folder}) {
  const [activeFolder, setActiveFolder] = useState()
  const db =  getFirestore(app)
  const router = useRouter()
const handleClick = (index,folderid,foldername) =>{
  setActiveFolder(index)
router.push("/folder/" + folderid + foldername)
}

const deleteFile =  async(folder)=>{
  await deleteDoc(doc(db, "Folder", folder.id.toString())).then(resp =>{
    toast("folder deleted successfully")
    

  })
}


  return (
   <>
     <div className=" pt-2 flex justify-between font-semibold">
        <h2 className="text-[18px] font-bold">Quick access</h2>
        <p className="text-blue-500 mr-4"> Hide</p>
      </div>
      <div className="flex flex-1  overflow-hidden flex-wrap w-full gap-4  p-6">
        {folder.map((folder, index) => (
          <div className="flex flex-col justify-center items-center">
          <div onClick={() => handleClick(index, folder.id, folder.name)} key={index} >
          <FolderItem folder={folder} activeFolder={activeFolder == index}/>

          </div>
         <h2 onClick={()=>deleteFile(folder)} className="text-blue-500 font-semibold">Delete</h2>         
          
          </div>
        ))}
      </div>
   </>
  )
}

export default Foldersection