import { getProductById } from "@/lib/actions"
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
    params: { id: string }
}

const ProductDetails = async ({ params: { id } }: Props) => {
    const product = await getProductById(id);

    if (!product) redirect('/')

    return (
        <div className="product-container">
            <div className="flex gap-28 xl:flex-row flex-col">
                <div className="product-image">
                    <Image
                        src={product.image}
                        alt={product.title}
                        height={400}
                        width={580}
                        className="mx-auto"
                    />
                </div>

                <div className="flex flex-col flex-1">
                    
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
