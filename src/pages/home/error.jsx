import { Link } from "react-router-dom";

export default function ErrorNotFound(){
    return(
        <div>
            <h1>404 Error: page not found</h1>
            <Link className="bg-[#efac38] p-1" to="/">Go back to homepage</Link>
        </div>
    )
}