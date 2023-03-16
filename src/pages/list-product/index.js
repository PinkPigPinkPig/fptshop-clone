import ProductCard from "components/ProductCard";
import ProductsFilter from "./components/ProductsFilter";

const productList = [
    {
        label: 'Hãng sản xuất',
        option: ['Samsung', 'Xiaomi', 'Asus', 'Masstel', 'Tecno', 'Nokia', 'Vivo', 'Samsung']
    },
    {
        label: 'Mức giá',
        option: ['Dưới 10 triệu', 'Từ 10 - 15 triệu', 'Từ 15 - 20 triệu', 'Từ 20 - 20 triệu', 'Trên 25 triệu']
    },
    {
        label: 'Màn hình',
        option: ['Khoảng 13 inch', 'Khoảng 14 inch', 'Trên 15 inch']
    },
    {
        label: 'CPU',
        option: ['Intel celeron', 'Intel pentium', 'Intel core i3', 'Intel core i5', 'Intel core i7', 'Intel core i9']
    }
]

function ListProduct() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-3 ">
                    {productList.map((item, index) => {
                        return <div className="py-2" key={index}>
                            <ProductsFilter
                                key={index}
                                label={item.label}
                                option={item.option}
                                row={index !== 0 ? '2' : '3'}
                            />
                        </div>
                    })}
                </div>
                <div className="col">
                    <div className="mt-5 mb-5 row">
                        <div className="col-3">
                            <ProductCard />
                        </div>
                        <div className="col-3">
                            <ProductCard />
                        </div>
                        <div className="col-3">
                            <ProductCard />
                        </div>
                        <div className="col-3">
                            <ProductCard />
                        </div>
                    </div>
                    <div className="mt-5 mb-5 row">
                        <div className="col-3">
                            <ProductCard />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default ListProduct;