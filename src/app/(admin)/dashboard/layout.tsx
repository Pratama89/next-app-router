export default function Layout({
    children, 
    products,
    analytics,
    payments,
} : {
    children: React.ReactNode, 
    products: React.ReactNode,
    analytics: React.ReactNode,
    payments: React.ReactNode,
}) {
    return (
        <div className="p-3">
            <div>{children}</div>
            <div className="flex gap-3 mt-3 justify-center items-center" >
                {products}
                {analytics}
            </div>
                {payments}
        </div>
    )
}