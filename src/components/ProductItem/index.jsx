import React, { useState, useEffect } from "react";
import DetailItem from "@/src/components/ProductItem/DetailItem";
import SmallItem from "@/src/components/ProductItem/SmallItem";


const ProductItem = ({ item }) => {
  const [detail, setDetail] = useState(false);
  useEffect(() => {
    console.log("useEffect")
    const body = document.querySelector("body");
    body.style.overflow = detail? "hidden": ""
  }, [detail])
  

  const detailHendler = () => {
    setDetail(!detail);
  }
  return( <>
    {detail ? <DetailItem item = {item} detailHendler = {detailHendler}/>
     : <SmallItem item = {item} detailHendler = {detailHendler}/>}
     </>)
};

export default ProductItem;
