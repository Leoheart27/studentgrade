import { StudentTable } from "@/components/StudentTable";
import { students } from "@/data/students";

const Page = () => {
  return(
    <div className="w-screen h-screen flex bg-gradient-to-b from-[#000000] to-[#1a003e]  justify-center">
    <StudentTable students={students}/>
    </div>
  )
}

export default Page;