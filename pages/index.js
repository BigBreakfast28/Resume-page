import Education from "@/pages/Education";
import Link from "next/link";



export default function Home() {
  return (
    <main className="text-center items-center bg-purple-900 w-screen h-screen-max">
        <h1 className="items-center text-white">
          Cameron D.
        </h1>
        <h1 className="text-white">Aspiring Developer</h1>
          <h1 className="text-white">Your Scientist!</h1>
            <h2 className="text-white p-0">Take a browse through each page and I hope to hear from you soon!</h2>

        
          <div className="w-screen h-screen flex items-center text-white">
            <div className="text-center w-full">
              <Link href={'/Education'} className="p-4">
                    Education
                </Link>

                <Link href={'/WorkExperience'} className="p-4">
                  Work Experience
                </Link>

                <Link href={'/LearnedTechnologies'} className="p-4">
                  Learned Technologies
                </Link>

                <Link href={'/Background'} className="p-4">
                  Background
                </Link>
            </div>
        </div>
      </main>

  )
}
