import { useState } from "react";
import { Button  } from "../components/Button";
import { Text } from "../components/Text";

export const Calc = ()=>{
    // const [calcValues, setCalcState] = useState({currentValue:0, operatorFlag:false});
    const [currentValue, setCurrentValue] = useState("0");
    const [operatorFlag, setOperatorFlag] = useState(false);
    const isDigit = (val)=>!isNaN(parseInt(val));
    
    const computeIt = ()=>{
        setCurrentValue(eval(currentValue));
    }
    const takeInput = (val)=>{
        // setCalcState({...calcValues, currentValue:val});
        if(!operatorFlag && (val === '+' || val==='-' || val==='*' || val === '/')){
            setOperatorFlag(true);
            //if(currentValue ==='0'){
            setCurrentValue(currentValue + val);
            //}
        }
        else
        if(currentValue === '0'){
            setOperatorFlag(false);
           setCurrentValue(val);
        }
        else if(isDigit(val)){
            setOperatorFlag(false);
            setCurrentValue(currentValue + val);
        }
    }
    return (
    <>
    <Text cssclass='alert-danger' message="Calc App" alignment="text-center"/>
    <Text cssclass='alert-info' message={currentValue} alignment="text-end"/>
    <table className="table">
        <tbody>
        <tr>
        <Button fn={takeInput} cssclass="secondary" val="7"/>
        <Button fn={takeInput} cssclass="secondary" val="8"/>
        <Button fn={takeInput} cssclass="secondary" val="9"/>
        <Button fn={takeInput} cssclass="secondary" val="+"/>
        </tr>
        <tr>
        <Button fn={takeInput} cssclass="secondary" val="4"/>
        <Button fn={takeInput} cssclass="secondary" val="5"/>
        <Button fn={takeInput} cssclass="secondary" val="6"/>
        <Button fn={takeInput} cssclass="secondary" val="-"/>
        </tr>
        <tr>
        <Button fn={takeInput} cssclass="secondary" val="1"/>
        <Button fn={takeInput} cssclass="secondary" val="2"/>
        <Button fn={takeInput} cssclass="secondary" val="3"/>
        <Button fn={takeInput} cssclass="secondary" val="*"/>
        </tr>
        <tr>
        <Button fn={takeInput} cssclass="secondary" val="0"/>
        <Button fn={takeInput} cssclass="secondary" val="."/>
        <Button fn={computeIt} cssclass="primary" val="="/>
        <Button fn={takeInput} cssclass="secondary" val="/"/>
        </tr>
        </tbody>
    </table>
    
    </>
    );
}