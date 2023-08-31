import Home from "@/pages";

export default function WorkExperience() {
    <Home>Work Experience</Home>
    return(
    <>
        <div className="bg-red-900 h-screen w-screen">
            <h1 className="text-center items-center">Work Experience</h1>
                <div class="nav-bar">
                <a href="/">Home</a>
                  <a href="/Education">Education</a>
                  <a href="/WorkExperience">Work Experience</a>
                  <a href="/LearnedTechnologies">Learned Technologies</a>
                  <a href="/Background">Background</a>

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
                

    
        </div>
    </>
    )
}