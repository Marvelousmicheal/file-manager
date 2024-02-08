"use client"

import {  useContext, useState } from "react"
import { app } from "../config/firebaseConfig"
import {doc, getFirestore, setDoc} from "firebase/firestore"
import {  useUser } from "@clerk/nextjs";

import { toast } from "react-toastify";
import { ParentFolderContext } from "../context/ParentFolderContext";


function CreateFolder() {



  const db = getFirestore(app);



  const [foldername, setfoldername]=useState()
  const {parentFolderid} = useContext(ParentFolderContext)
  const{refreshUseEffect,setRefreshUseEffect} = useContext(ParentFolderContext)
 
  const Dataid = Date.now().toString()
  const {user} = useUser()

   
  
async function create(){

   try {
    await setDoc(doc(db, "Folder", Dataid), {
      name: foldername,
      id: Dataid,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      parentFolderid:parentFolderid
    
    });
    toast.success('Folder has been successfully created');
    setRefreshUseEffect((prev) => !prev);
     console.log("Folder created successfully");
   } catch (error) {
    toast.error("folder has been unsuccessfully created")
    console.error("Error creating folder:", error);
   }
 }



  return (
    <>
    <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg text-gray-500">Create A New Folder</h3>

          <div className="flex flex-col w-full justify-center items-center mt-6">
            <img src="/folder.png" alt="folder icon" width="140px" />
            <input
              type="text"
              placeholder="Folder Name"
              className="border-blue-300 placeholder:text-base placeholder:font-semibold border w-full rounded py-2 my-4 pl-3"
              onChange={(e) => {
                setfoldername(e.target.value);
              }}
      
            />
            <button
              className="bg-blue-500 w-full rounded py-2 text-white text-xl font-bold transition-all hover:bg-blue-800"
             onClick={create}
          
            >
              create Folder
            </button>
          </div>
        </form>
      </dialog>
  </>
  )
}

export default CreateFolder