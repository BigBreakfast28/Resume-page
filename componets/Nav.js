import Link from "next/link"

export default function Nav() {
    return(
           <main class="flex-container">d 
            <h1>Weclome to my Resume page</h1>
                <p>
                    <Link href={'/'}>Education</Link>
                </p>
                    
                <p>
                    <Link href={'/'}>Work Experience</Link>
                </p>

                <p>
                    <Link href={'/'}>Technologies</Link>
                </p>

                <p>
                    <Link href={'/'}>Biography</Link>
                </p>
           </main>
        
    )
}C