import { app } from "@/app/config/firebaseConfig";
import { useUser } from "@clerk/nextjs";
import {
  collection,
  
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

function StorageInfo() {
  const db = getFirestore(app);
  const { user } = useUser();

  const [totalSizeUsed, setTotalSizeUsed] = useState(0);
  let totalSize = 0;

  useEffect(() => {
    let totalSize = 0;
    getAllfiles();
  }, [user]);

 
  const getAllfiles=async()=>{
    const q=query(collection(db,"files"),
    where("createBy","==", user?.primaryEmailAddress?.emailAddress));
    const querySnapshot = await getDocs(q);
   
    querySnapshot.forEach((doc)=>{
       
        totalSize=totalSize+doc.data()['size'];
        

    })
 
     setTotalSizeUsed((totalSize/1024**2).toFixed(2)+" MB");
 
}
  return (
    <>
      <div className="mt-7">
        <h2
          className="text-[18px] 
       font-bold"
        >
          {totalSizeUsed}
          <span
            className="text-[14px]
        font-semibold"
          >
            {""} used of{""}
          </span>
          500 MB
        </h2>
        <div
          className="w-full
        bg-gray-200  h-2.5 flex"
        >
          <div className="bg-blue-600 h-2.5 w-[25%]"></div>
          <div className="bg-green-600 h-2.5 w-[35%]"></div>
          <div className="bg-yellow-400 h-2.5 w-[15%]"></div>
        </div>
      </div>
    </>
  );
}

export default StorageInfo;
