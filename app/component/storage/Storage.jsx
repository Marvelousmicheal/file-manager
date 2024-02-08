import { useUser } from "@clerk/nextjs"
import StorageInfo from "./StorageInfo"
import StorageDetailSection from "./StorageDetailSection"



function Storage() {
    const {user} =  useUser()
  return (
  <>
 <div className="">
        <h2 className="text-[15px] font-bold">{user?.fullName}</h2>
        <h2
          className="text-[13px] text-gray-400
        mt-[-4px]"
        >
          {user?.primaryEmailAddress?.emailAddress}
        </h2>
      </div>
  <StorageInfo/>
  <StorageDetailSection/>

        <div className='p-3 bg-blue-50 
        rounded-lg text-center mt-5 bottom-0'>
            <h2 className='font-semibold text-[17px]'>Need More Space?</h2>
            <h2 className='text-[13px]'>Get more space my upgrading the plan</h2>
            <button className='bg-blue-500 p-2 px-4
            text-[14px] rounded-lg text-white mt-3'>Upgrade Plan</button>
        </div>

  </>
  )
}

export default Storage