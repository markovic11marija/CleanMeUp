import React, { useEffect, useState } from "react";
import { useTable } from 'react-table';
import { getPriceList } from "../../api/priceListApi";
import { useSelector } from 'react-redux';

function Prices() {

    const [priceList, setPriceList] = useState([]);
    const { items: priceListItems } = useSelector(state => state.priceListReducer);
    useEffect(() => {
        getPriceList();
    }, []);
    useEffect(() => {
        if (priceListItems) {
            setPriceList(priceListItems);
        }
    }, [priceListItems]);
    const data = priceList.sort((a, b) => a.clothesType.localeCompare(b.clothesType));

    const columns = React.useMemo(
        () => [
            {
                // Header: 'Artikl',
                id: 'clothesType',
                accessor: 'clothesType', // accessor is the "key" in the data
            },
            {
                // Header: 'Cena',
                accessor: 'price',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <div id="price-list">
            <table {...getTableProps()} style={{margin: 'auto'}}>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                padding: '10px',
                                                border: 'solid 3px white',
                                                // background: 'papayawhip',
                                                color: 'white',
                                            }}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Prices;