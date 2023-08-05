export const Button = ({cssclass, val, fn})=>{
    let myClassName = `btn btn-${cssclass} w-100 py-3 me-2`;
    
    return (<td><button onClick={()=>{
        fn(val);
    }} className={myClassName}>{val}</button></td>)
}