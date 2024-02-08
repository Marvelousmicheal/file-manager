"use client"

function SubFolderItem({folder}) {
    return (
        <>
        <div
          className=" w-[100px] h-[100px]  flex justify-center items-center flex-col rounded mr-[5px] mb-[1rem] bg-blue-400   hover:scale-105 hover:shadow-md
      cursor-pointer "
        >
          <img src="jpg.png" alt="folder"  />
          <h5 className="text-center font-medium capitalize mt-8  text-gray-900">{folder.name}</h5>
        </div>
      </>
      )
}

export default SubFolderItem