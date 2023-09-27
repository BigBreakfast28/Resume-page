import Home from "@/pages";
import Link from "next/link";

export default function Education () {
  <Home>Education Page</Home>
   return(
      <> 
         <div className="bg-yellow-600 h-screen">
            <h1 className="items-center text-center ">Education History</h1>
               <div class="nav-bar">
                  <Link href="/">Home</Link>
                  <Link href="/Education">Education</Link>
                  <Link href="/WorkExperience">Work Experience</Link>
                  <Link href="/LearnedTechnologies">Learned Technologies</Link>
                  <Link href="/Background">Background</Link>
               </div>





               <h2>
                  Rich East Highschool- Graduated 2014
               </h2>

               <h2>
                  Southern Illinois University Edwardsville: Graduated 2020
                  Bachelors of Science in Chemistry
               </h2>
         </div>
      </>
   )

}