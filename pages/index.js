import Education from "@/pages/Education";
import Link from "next/link";



export default function Home() {
  return (
    <main className="text-center items-center bg-purple-900 w-screen h-screen">
      <h1 className="items-center text-white">
        Resume page
      </h1>
      
      <div className="w-screen h-screen flex items-center text-white">
        <div className=" text-center w-full">
        <Link href={'/Education'} className="p-4">
            Education
          </Link>

          <Link href={'/WorkExperience'} className="p-4">
            Work Experience
          </Link>

          <Link href={'/componets/LearnedTechnologies'} className="p-4">
            Learned technologies
          </Link>

          <Link href={'/componets/Background'} className="p-4">
            Background
          </Link>
        </div>
      </div>
      </main>

  )
}
