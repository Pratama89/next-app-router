import Modal from "@/components/core/Modal";
import { getData } from "@/services/product"
import Image from "next/image";

export default async function DetailProductPage(props: any) {
    const {params} = props;
    const product = await getData(`http://localhost:3000/api/product/?id=` + params.id)

    return (

        <Modal>
            <Image 
            src={product.data.image} 
            alt="" 
            className="w-full object-cover aspect-square col-span-2 h-96"
            height={400} width={400}
            />
            <div className="bg-white p-6 px-6 items-center text-center">
                <h3>{product.data.name}</h3>
                <h3>Harga: Rp{product.data.price}</h3>
            </div>

        </Modal>
            
    )
}