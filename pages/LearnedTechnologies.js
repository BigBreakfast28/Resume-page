import Home from "@/pages";
import Link from "next/link";

export default function LearnedTechnologies() {
    <Home>Technologies Page </Home>
    return(
        <>
            <div className="bg-blue-900 h-screen">
                <h1 className="text-white text-center">Learned Technologies</h1>

                <div class="nav-bar">
                  <Link href="/">Home</Link>
                  <Link href="/Education">Education</Link>
                  <Link href="/WorkExperience">Work Experience</Link>
                  <Link href="/LearnedTechnologies">Learned Technologies</Link>
                  <Link href="/Background">Background</Link>
               </div>


                <h2 className="text-white">Python</h2>
                <h2 className="text-white">HTML</h2>
                <h2 className="text-white">PostgreSQL</h2>
                <h2 className="text-white"> Javascript</h2>
                <h2 className="text-white">MongoDB</h2>
                <h2 className="text-white">Tailwind</h2>
                <h2 className="text-white">Typescript</h2>
                <h2 className="text-white">CSS</h2>

                
            </div>
        </>    
    )

}
