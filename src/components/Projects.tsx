import BitgatesProject from "./Projects/BitGates";
import DisasterManagementProject from "./Projects/DisasterManagment";
import Skribble from "./Projects/Skribble";
import TaxBuddyProject from "./Projects/Taxbuddy";


export default function(){
    return<>
    <h1 className="text-7xl font-bold text-white text-center bg-black">My <span className="text-blue-300"> Projects</span></h1>
        <Skribble />
        <DisasterManagementProject />
        <TaxBuddyProject />
        <BitgatesProject />
        
    </>
}