"use client";
import List from "./components/ItemCat";
import Categories from "./components/Ctaegory";
import { useEffect, useState } from "react";
const Page = () => {
  const limited = 9;
  const [SkipCount, setSkipCount] = useState(1);
  const [ProductCount, setProductCount] = useState([]);
  const [opValue, setOpValue] = useState("beauty");
  const [TheCategory, setTheCategory] = useState([]);

  const setValue = async (value) => {
    setOpValue(value);
  };
  const CategoryFetch = async () => {
    let JSONdata = await fetch(`https://dummyjson.com/products/category-list`);
    let data = await JSONdata.json();
    setTheCategory(data);
  };
  CategoryFetch();

  const DataFetch = async () => {
    let JSONdata = await fetch(
      `https://dummyjson.com/products?limit=${limited}&skip=${
        (SkipCount - 1) * 8
      }`
    );
    let data = await JSONdata.json();
    setProductCount(data.products);
  };
  const BackPage = () => {
    if (SkipCount == 0) {
      setSkipCount(0);
    } else {
      let count = SkipCount;
      setSkipCount(count - 1);
    }
  };

  const NextPage = () => {
    let count = SkipCount;
    setSkipCount(count + 1);
  };

  useEffect(() => {
    DataFetch();
  }, [SkipCount]);

  return (
    <div>
      <div>
        <select onChange={(event) => setValue(event.target.value)}>
          <option value="everything">Everything</option>
          {TheCategory.map((item, index) => {
            return <Categories name={item} key={index} />;
          })}
        </select>
      </div>
      <div className="gaduur">
        {ProductCount.map((item, index) => {
          // if (opValue == "everything") {
          //   return <List info={item} key={index} />;
          // } else {
          if (item.category == opValue) {
            <List info={item} key={index} />;
          }
          // }
        })}
      </div>
      <div className="flexy">
        <button onClick={BackPage}>Back Page</button>
        <div>{SkipCount}</div>
        <button onClick={NextPage}>Next Page</button>
      </div>
    </div>
  );
};
export default Page;
