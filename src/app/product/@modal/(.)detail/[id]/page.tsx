import Modal from "@/components/core/Modal";
import { getData } from "@/services/product"

export default async function DetailProductPage(props: any) {
    const {params} = props;
    const product = await getData(`http://localhost:3000/api/product/?id=` + params.id)

    return (

        <Modal>
            <img 
            src={product.data.image} 
            alt="" 
            className="w-full object-cover aspect-square col-span-2"/>
            <div className="bg-white p-6 px-6 items-center text-center">
                <h3>{product.data.name}</h3>
                <h3>Harga: Rp{product.data.price}</h3>
            </div>

        </Modal>
            
    )
}