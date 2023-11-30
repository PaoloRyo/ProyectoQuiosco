import Layout from "../Layout/Layout"
import { useEffect,useCallback } from "react";
import useQuiosco from "../hooks/useQuiosco";
import  {formaterDinero} from "../helpers/index"

export default function Total() {

    const {pedido,nombre,setNombre,colocarOrden,total} = useQuiosco();



    const comprobarPedido = useCallback (()=>{
        return pedido.length===0 || nombre ===" " || nombre.length <3;
    },[pedido,nombre]);

    useEffect(()=>{
        comprobarPedido();
    },[pedido,comprobarPedido]);
    


    
    return (
        <Layout pagina={"Confirmar Pedido"}>
        <h1 className="text-4xl font-black">Total y Confirmas Pedido</h1>
        <p className="text-2xl my-10">Confirma tus pedidos</p>

        <form onSubmit={colocarOrden}>
            <div>
                <label 
                htmlFor="nombre"
                className="block uppercase text-slate-800 font-bold text-xl">Nombre</label>
                <input
                id="nombre"
                type="text"
                className="bg-gray-200 w-full mt-3 lg:w-1/3 p-2 rounded-md" 
                value={nombre}
                onChange={e=>setNombre(e.target.value)}
                >
                </input>
                
            </div>
            <div className="mt-10">
                <p className="text-2xl"></p>
                <p>Total a pagar {' '}<span className="font-bold">{formaterDinero(total)}</span></p>
            </div>
            <div className="mt-5">
                <input
                type="submit"
                className={`${comprobarPedido() ? 'bg-indigo-100' : "bg-indigo-600 hover:bg-indigo-800" }w-full lg:w-auto px-5 py-2 rounded uppercase`}
                value="Confirmar pedido"
                disabled={comprobarPedido()}>
                </input>
            </div>
        </form>
    </Layout>
    )
}