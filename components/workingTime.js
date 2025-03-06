

export default function WorkingTime({white}){
    return(
        <div>
         <p className={`pt-1 ${ white && "text-white-transparent70"}`}>Kavinės darbo laikas: </p>
         <p className={`pt-1 ${ white && "text-white-transparent70"}`}>I - V 11-19 val.</p>
         <p className={`pt-1 ${ white && "text-white-transparent70"}`}>VI 10-15 val.</p>
         <p className={`pt-1 ${ white && "text-white-transparent70"}`}>VII Nedirbame</p>
        </div>
    );
}