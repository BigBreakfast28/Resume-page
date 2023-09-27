import Home from "@/pages";
import Link from "next/link";

export default function WorkExperience() {
    <Home>Work Experience</Home>
    return(
    <>
        <div className="bg-red-900 h-screen w-screen">
            <h1 className="text-center items-center text-white">Work Experience</h1>
                <div class="nav-bar">
                    <Link href="/">Home</Link>
                    <Link href="/Education">Education</Link>
                    <Link href="/WorkExperience">Work Experience</Link>
                    <Link href="/LearnedTechnologies">Learned Technologies</Link>
                    <Link href="/Background">Background</Link>

                </div>
    
            <h2 className="text-white">Sto Corp: Research&Development Chemist- December 2022 through present</h2>
                <div className="text-white text-center">Cementitious product formulation</div>
                <div className="text-white text-center">SAP Logon navigation/data input-LIMS System</div>
                <div className="text-white text-center">Revision of formulated products for imporvement (cost, strength, ect.)</div>
                <div className="text-white text-center">Writting conclusive reports about formulations/product investigations.</div>
                <div className="text-white text-center">Present reports to Director of R&D.</div>

            <h2 className="text-white">Materials Analytical Services: Analytical Chemist - June 2021 through September 2022</h2>
                <div className="text-white text-center">
                    Assure sample tracking, disposal, and archiving are performed in accordance with established
                    procedures including use of Laboratory Information Maintenance System (LIMS). 
                </div>
                <div className="text-white text-center">
                    Primary operator for ICP-OES; responsibilities included: preparing/ordering all standards needed,
                    troubleshooting instruments and software, requesting maintenance from engineers through
                    manufacturer
                </div>
                
                <h2 className="text-white">Anheuser Busch: Analyst-September 2020 through May 2021</h2>
                    <div className="text-white text-center">
                        Quality control department with unfinished and finished product samples. Analysis consisted of
                        sample preparation, instrumentation, data entry, and clean up. 
                    </div>
                    <div className="text-white text-center">
                        Sample preparation includes weighing out samples, filtering/centrifuging samples, placing
                        samples in a bath overnight, mobile phase preparation, and standard curve preparation.  
                    </div>
        </div>
    </>
    )
}