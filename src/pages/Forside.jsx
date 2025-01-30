import { Header } from "../components/header/Header"
import { Nyheder } from "../components/nyheder/nyheder"
import { Værlser } from "../components/værelse/Værelse"

export const Forside = () => {

    return(
        <>
            < Header />
            < Nyheder />
            < Værlser />
        </>
    )
}