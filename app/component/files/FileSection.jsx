import FileItems from "./FileItems";

function FileSection({file}) {
  // const file = [
  //   {
  //     id: 1,
  //     name: "Data structure.pdf",
  //     type: "pdf",
  //     size: "675 kB",
  //     moadifiedAt: "23 Nov 2024",
  //     Image:"/public/pdf.png"
  //   },
  //   {
  //     id: 2,
  //     name: "Data Structure.pdf",
  //     type: "pdf",
  //     size: "672 kB",
  //     modifiedAt: "Nov 23,2022",
  //     Image:"/public/pdf.png"
  //   },
  //   {
  //     id: 3,
  //     name: "smaple Image.png",
  //     type: "image",
  //     size: "400 kB",
  //     modifiedAt: "Nov 23,2023",
  //     Image:"/public/pdf.png"
  //   },
  //   {
  //     id: 4,
  //     name: "React Principal.docx",
  //     type: "doc",
  //     size: "6272 kB",
  //     modifiedAt: "Nov 23,2020",
  //     Image:"/public/pdf.png"
  //   },
  // ];
  return(
    <>
     <div className='bg-white mt-5 p-5
    rounded-lg'>
        <h2 className='text-[18px] font-bold'>Recent Files</h2>
        <div className='grid grid-cols-1
        md:grid-cols-2 
        text-[13px] 
        font-semibold
        border-b-[1px]
        pb-2 mt-3
        border-gray-300
         text-gray-400'>
            <h2>Name</h2>
            <div className='grid grid-cols-3'>
            <h2>Modified</h2>
            <h2>Size</h2>
            <h2></h2>
            
            </div>
        </div>
        {file && file.map((item,index)=>(
            <div key={index} >
           {
            <FileItems file={item} key={index}/>
           }
           
            </div>  
             
        ))}
    </div>
    </>
  );
}

export default FileSection;
