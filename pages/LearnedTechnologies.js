import Home from "@/pages";

export default function LearnedTechnologies() {
    <Home>Technologies Page </Home>
    return(
        <>
            <div className="bg-blue-900 ">
                <h1 className="text-white text-center">Learned Technologies</h1>

                <div class="nav-bar">
                  <a href="/">Home</a>
                  <a href="/Education">Education</a>
                  <a href="/WorkExperience">Work Experience</a>
                  <a href="/LearnedTechnologies">Learned Technologies</a>
                  <a href="/Background">Background</a>
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