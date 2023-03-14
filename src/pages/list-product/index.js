import ProductsFilter from "./components/ProductsFilter";

function ListProduct() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-4">
                    <ProductsFilter />
                </div>
                <div className="col">
                    2 of 3 (wider)
                </div>
            </div>
        </div>
    );
}

export default ListProduct;