import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Avocado } from '@components/Avos/Avo';

const Avo = () => {
    const [avo, setAvo] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            url: '/api/avo/2zd33b8c',
        }).then(({ data: { avo } }) => {
            setAvo(avo);
        });
    }, []);
    return <Avocado></Avocado>;
};

export default Avo;
