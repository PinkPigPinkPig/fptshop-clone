import ProductCard from "components/ProductCard";
import ProductsFilter from "./components/ProductsFilter";
import styles from './components/components.module.scss'
import ListOption from "./components/ListOption";

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
    const listProduct = [...Array(7).keys()]

    return (
        <div className={`container text-center p-5 my-5 bg-light rounded-3`} style={{ minWidth: '800px' }}>
            <div className="d-flex" style={{ minWidth: '800px' }}>
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
                <div className={`col ${styles.productSection}`}>
                    <ListOption />
                    <div className={`row three-cols bg-white rounded-3`}>
                        {listProduct.map((item, index) => (
                            <div key={index} className={`col-4 my-2`}>
                                <ProductCard />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ListProduct;