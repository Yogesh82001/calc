export const Text = ({message, cssclass, alignment})=>{
    console.log('CSS Class Name ',cssclass);
    let myClassName = `${alignment} alert ${cssclass}`;
    return (<h1 className={myClassName}>{message}</h1>)
}