// "use client";
// import List from "./components/ItemCat";
// import Categories from "./components/Ctaegory";
// import { useEffect, useState } from "react";
// const Page = () => {
//   const limit = 9;
//   const [SkipCount, setSkipCount] = useState(1);
//   const [ProductCount, setProductCount] = useState([]);
//   const [opValue, setOpValue] = useState();
//   const [TheCategory, setTheCategory] = useState([]);

//   const setValue = async (value) => {
//     setOpValue(value);
//   };

//   const DataFetch = async () => {
//     if (opValue) {
//       console.log("working");
//       const response = await fetch(
//         `https://dummyjson.com/product/category/${opValue}`
//       );
//       const data = await response.json();
//       const { products } = data;
//       setProductCount(products);
//     } else {
//       const response = await fetch(
//         `https://dummyjson.com/product?limit=${limit}&skip=${SkipCount * limit}`
//       );
//       const data = await response.json();
//       const { products } = data;
//       setProductCount(products);
//     }

//     const responseCategory = await fetch(
//       `https://dummyjson.com/products/category-list/`
//     );
//     const categories = await responseCategory.json();
//     setTheCategory(categories);

//     // let JSONdata = await fetch(
//     //   `https://dummyjson.com/products?limit=${limited}&skip=${
//     //     (SkipCount - 1) * 8
//     //   }&category=${opValue}`
//     // );
//     // let data = await JSONdata.json();
//     // setProductCount(data.products);
//     // const responseCategory = await fetch(
//     //   `https://dummyjson.com/products/category-list/`
//     // );
//     // const categories = await responseCategory.json();
//     // setAllCategories(categories);
//   };
//   const BackPage = () => {
//     if (SkipCount == 0) {
//       setSkipCount(0);
//     } else {
//       let count = SkipCount;
//       setSkipCount(count - 1);
//     }
//   };

//   const NextPage = () => {
//     let count = SkipCount;
//     setSkipCount(count + 1);
//   };

//   useEffect(() => {
//     DataFetch();
//   }, [SkipCount]);

//   return (
//     <div>
//       <div>
//         <select onChange={(event) => setValue(event.target.value)}>
//           <option value="">Everything</option>
//           {TheCategory.map((item, index) => {
//             return <Categories name={item} key={index} />;
//           })}
//         </select>
//       </div>
//       <div className="gaduur">
//         {ProductCount.map((item, index) => {
//           if (opValue == "") {
//             console.log("hi");
//             return <List info={item} key={index} />;
//           }
//           if (item.category == opValue) {
//             return <List info={item} key={index} />;
//           }
//         })}
//       </div>
//       <div className="flexy">
//         <button onClick={BackPage}>Back Page</button>
//         <div>{SkipCount}</div>
//         <button onClick={NextPage}>Next Page</button>
//       </div>
//     </div>
//   );
// };
// export default Page;
"use client";
import { useEffect, useState } from "react";
import { ProductCard } from "./components/ItemCat";

export default function Home() {
  const [skipCount, setSkipCount] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [select, setSelect] = useState();
  const limit = 30;
  const fetchProducts = async () => {
    if (select) {
      console.log("working");
      const response = await fetch(
        `https://dummyjson.com/product/category/${select}`
      );
      const data = await response.json();
      const { products } = data;
      setAllProducts(products);
    } else {
      const response = await fetch(
        `https://dummyjson.com/product?limit=${limit}&skip=${skipCount * limit}`
      );
      const data = await response.json();
      const { products } = data;
      setAllProducts(products);
    }

    const responseCategory = await fetch(
      `https://dummyjson.com/products/category-list/`
    );
    const categories = await responseCategory.json();
    setAllCategories(categories);
  };

  const btnIncrease = () => setSkipCount(skipCount + 1);
  const btnDecrease = () => {
    if (skipCount == 1) return;
    setSkipCount(skipCount - 1);
  };

  useEffect(() => {
    console.log(skipCount);
    fetchProducts();
  }, [skipCount, select]);

  return (
    <main>
      <section>
        <div className="container">
          <select
            name=""
            id=""
            value={select}
            onChange={(e) => {
              setSelect(e.target.value);
            }}
          >
            <option value="">All</option>
            {allCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <div className="row">
            {allProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="btns">
            <button onClick={btnDecrease}>{"<"}</button>
            <h1 className="page">{skipCount}</h1>
            <button onClick={btnIncrease}>{">"}</button>
          </div>
        </div>
      </section>
    </main>
  );
}
