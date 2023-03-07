import ProductsFilter from "./components/ProductsFilter";

function ListProduct() {
    return (
        <div class="container text-center">
            <div class="row">
                <div class="col-3 bg-primary">
                    <ProductsFilter />
                </div>
                <div class="col bg-secondary">
                    2 of 3 (wider)
                </div>
            </div>
        </div>
    );
}

export default ListProduct;