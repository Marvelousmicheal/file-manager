"use client"
import { useContext, useEffect, useState } from "react"
import SideBar from "../component/SideBar"
import FileSection from "../component/files/fileSection"
import Foldersection from "../component/folder/Foldersection"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { app } from "../config/firebaseConfig"
import { useUser } from "@clerk/nextjs"
import  { ParentFolderContext } from "../context/ParentFolderContext"
import Storage from "../component/storage/Storage"




function Dashboard() {
  const db = getFirestore(app)
  const {user} = useUser()
  const [folder, setfolder] = useState([]);
  const [file, setfile] = useState([]);
  const { parentFolderid,setParentFolderid} = useContext(ParentFolderContext)
  const {RefreshUseEffect} = useContext(ParentFolderContext)


async function getfolderList(){
  setfolder([]);
  const q = query(
    collection(db, "Folder"),where("createdBy", "==",  user?.primaryEmailAddress?.emailAddress),   where("parentFolderid",'==', parentFolderid !== undefined ? parentFolderid : 0),
  )
  const querySnapshot = await getDocs(q);
  
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setfolder(folder=>([...folder,doc.data()]));
    });

   
}
async function getfileList(){
  setfile([]);
  const q = query(
    collection(db, "files"),where("createBy", "==", user?.primaryEmailAddress?.emailAddress),   where("parentFolderid",'==', parentFolderid !== undefined ? parentFolderid : 0),
  )
  const querySnapshot = await getDocs(q);
  
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setfile(file=>([...file,doc.data()]));
    });

   
}
useEffect(() => {
  getfolderList();
  getfileList();
  setParentFolderid(0)
}, [user, RefreshUseEffect ])
console.log(RefreshUseEffect)
  return (
   
  <div className=" w-full flex h-[90vh]  ">
<div>
    <SideBar/>
</div>
<div className="  mr-4 w-[80%]">
<Foldersection folder={folder}/>
<div>
  <FileSection file={file}/>
</div>
</div>
<div className=" w-[20%] pr-4">
  <Storage/>
</div>

  </div>

  )
}

export default Dashboard