export default function ProfileLayout({children} : {children: React.ReactNode}) {
    return (
        <>
            <h1 className="text-3xl mt-2 text-center">Judul</h1>
            <div>{children}</div>
        </>
    )
}