import { Button, Typography } from "@mui/material"
import { useEffect, useState } from "react"

export const Home = () => {
    const[valor, setValor] = useState()
    const[valor2, setValor2] = useState([])

useEffect(()=>{
    setValor(0)
}, [])

useEffect(() => {
    setValor2([...valor2, valor])
}, [valor])

    return(
        <>
        <Typography variant = "h1">CLICKS:{valor}</Typography>
        <Button 
            variant = "contained"
            onClick = {() => setValor(valor + 1)}> 
            Click aqui
        </Button>

        {valor2?.map((item) => (
                <>
                    <Typography variante="h3">
                        {item}º - CLIKS
                    </Typography>
                </>
            ))}
        </>
    )
}