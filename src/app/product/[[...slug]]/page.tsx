import Image from "next/image";

type ProductPageProps = { params: { slug: string } };

async function getData() {
  // const res = await fetch('https://fakestoreapi.com/products');
  const res = await fetch('http://localhost:3000/api/product', {
    cache: 'force-cache',
    next: {
      tags: ['product'],
      // revalidate: 30
    }
  });

  if(!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function ProductPage(props: ProductPageProps) {
    const { params } = props;
    const products = await getData();
    console.log(products);
    // console.log(params.slug);
    return (
      <>
      <h1 className="text-3xl font-bold text-center mt-2">
          {params.slug ? "Detail Product Page" : "Product Page"}
      </h1>
      <div className="grid p-4 gap-4 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 hp:grid-cols-2 hp2:grid-cols-2">
        
        {products.data.length > 0 && 
        products.data.map((product: any) => (    
        <div key={product.id}  className="flex flex-col justify-between w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#" className="">
                <img 
                className="p-2 rounded-t-lg mx-auto object-contain w-64 h-64 " 
                src={product.image} 
                alt="product image"
                
                 />
            </a>
            <div className="px-5 pb-5 hp2:px-2 hp2:py-2">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{product.title}</h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                </div>
                <div className="flex items-center justify-between md:flex-row sm:flex sm:flex-col ">
                    <span className="text-xl font-bold text-gray-900 dark:text-white md:text-sm hp2:text-xs">Rp {product.price}</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:h-8 md:w-20 md:text-xs md:px-1 sm:h-full sm:w-full hp2:w-26 hp2:h-8 hp2:text-xs hp2:font-normal hp2:w-26 hp:h-8 hp:text-xs hp:font-normal">Add to cart</a>
                </div>
            </div>
        </div>
        

        ))}
        {params.slug && (
          <>
            <div className=" text-black">Slug : {params.slug[0]}</div>
            <div className=" text-black">Slug : {params.slug[1]}</div>
            <div className=" text-black">Slug : {params.slug[2]}</div>
          </>
        )} 
      </div>
      </>
    )
}