export default function TabButton({children,onSelect}){
    function handleClick(){
        console.log(`Clicked on tab: ${children}`);
    
    }
    return(
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}