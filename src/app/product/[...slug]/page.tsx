// type DetailProductPageProps = { params: { slug: string } };

export default function DetailProductPage({params} : {params: {slug: string}}) {
    // const { params } = props;
    console.log(params.slug);
    return (
        <div className="flex flex-col items-center justify-between mt-5 font-bold">
            <h1>Detail Product Page</h1>
            <div className=" mt-5 text-black">Slug : {params.slug[0]}</div>
            <div className=" mt-5 text-black">Slug : {params.slug[1]}</div>
            <div className=" mt-5 text-black">Slug : {params.slug[2]}</div>
        </div>
    )
}