import DetailsProduct from "@/components/product/DetailsProduct"

const MainProduct = () => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
                Galeria de imagenes
            </section>
            <DetailsProduct />
        </main>
    )
}

export default MainProduct