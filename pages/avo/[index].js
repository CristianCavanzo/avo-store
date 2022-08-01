import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Index = () => {
    let {
        query: { index },
    } = useRouter();
    const [productList, setProductList] = useState([]);
    console.log(`/api/avo/${index}`);
    useEffect(() => {
        axios({
            method: 'get',
            url: `/api/avo/${index}`,
        }).then(({ data }) => {
            setProductList(data);
        });
    }, []);
    return <div>{console.log(productList)}</div>;
};

export default Index;
