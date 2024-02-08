"use client"
import SideBar from "@/app/component/SideBar"
import FileSection from "@/app/component/files/FileSection";
import SubFolderSection from "@/app/component/folder/SubFolderSection";

import { app } from "@/app/config/firebaseConfig";
import { ParentFolderContext } from "@/app/context/ParentFolderContext";
import { useUser } from "@clerk/nextjs";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


// ... (other imports)

function FolderDetails({ params }) {
  const { parentFolderid, setParentFolderid } = useContext(ParentFolderContext);
  const [, numberPart, stringPart] = params.folderId.match(/(\d+)(\w+)/);
  const transformedObject = {
    folderId: Number(numberPart),
    folderName: stringPart,
  };

  const [folder, setFolder] = useState([]);
  const [file, setfile] = useState([]);
  const { user } = useUser();
  const db = getFirestore(app);


  

  useEffect(() => {
    getsubfolderList();
    getfileList()
    setParentFolderid(transformedObject.folderId);
  }, [user, transformedObject.folderId,]);

  async function getsubfolderList(){
    const q = query(
      collection(db, "Folder"),
      where("createdBy", "==",  user?.primaryEmailAddress?.emailAddress),
      where("parentFolderid","==",transformedObject.folderId)
    )
    const querySnapshot = await getDocs(q);
      const folderData = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        folderData.push(doc.data());
      });
  
      setFolder(folderData);
  }
  // Function to trigger reload of folders
  async function getfileList(){
    setfile([]);
    const q = query(
      collection(db, "files"),
      where("createBy", "==",  user?.primaryEmailAddress?.emailAddress),  
       where("parentFolderid",'==',transformedObject.folderId),
    )
    const querySnapshot = await getDocs(q);
    
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setfile(file=>([...file,doc.data()]));
      });
  
     
  }

  return (
    <div className=" w-full flex h-[91vh]  ">
      <div>
        <SideBar />
      </div>
      <div className=" w-full">
        <h5 className="text-center font-semibold  text-gray-400"> You are in the subfolder of <span className="uppercase">{transformedObject.folderName}</span></h5>
      <SubFolderSection folder={folder}/>
      <div>
  <FileSection file={file}/>
</div>
      </div>
    </div>
  );
}

export default FolderDetails;


