"use client"



function FolderItem({folder}) {

  return (
    <>
    <div
      className=" w-[200px] h-[200px]  flex justify-center items-center flex-col rounded mr-[5px] mb-[1rem] bg-blue-100   hover:scale-105 hover:shadow-md
  cursor-pointer "
    >
      <img src="folder.png" alt="folder" className="w-[90px] " />
  <div className="flex justify-center items-center">
  <h5 className="text-center font-semibold capitalize mt-8  text-gray-600">{folder.name}</h5>
   
  </div>

    </div>
  </>
  )
}

export default FolderItem