'use strict';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import React, { StrictMode, useCallback, useMemo, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { createRoot } from 'react-dom/client';

var filterParams = {
    comparator: (filterLocalDateAtMidnight, cellValue) => {
        var dateAsString = cellValue;
        if (dateAsString == null) return -1;
        var dateParts = dateAsString.split('/');
        var cellDate = new Date(
            Number(dateParts[2]),
            Number(dateParts[1]) - 1,
            Number(dateParts[0])
        );
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
            return 0;
        }
        if (cellDate < filterLocalDateAtMidnight) {
            return -1;
        }
        if (cellDate > filterLocalDateAtMidnight) {
            return 1;
        }
        return 0;
    },
};

const IconModel = (props) => {
    const { see } = props.data || {};
    console.log(see)
    const [isSee, setIsSee] = useState(see);
    // const see = props.valueFormatted ? props.see : props.see;

    return (
        <>
            {isSee == true
                ? (<VisibilityIcon style={{ color: "rgb(50,31,219)" }} />)
                : (<VisibilityOffIcon style={{ color: "rgb(50,31,219)" }} />)
            }
        </>
    )
}



const ProTable = () => {
    const containerStyle = useMemo(() => ({ width: '80%', height: '600px' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [x, setx] = useState(<IconModel see={"true"} />);
    const [date, setData] = useState([
        {
            see: true,
            name: "voice1",
            dateTime: "1/1/2023",
            sensetiveWord: "",
            keyword: "Plane",
        },
        {
            see: false,
            name: "voice2",
            dateTime: "1/2/2021",
            sensetiveWord: "fall",
            keyword: "tree",
        },
        {
            see: true,
            name: "voice2",
            dateTime: "1/2/2021",
            sensetiveWord: "fall",
            keyword: "tree",
        }
    ])
    const [rowData, setRowData] = useState();
    const [columnDefs, setColumnDefs] = useState([
        { field: 'seen', cellRenderer: IconModel },
        { field: 'name', filter: 'agTextColumnFilter' },
        {
            field: 'dateTime',
            filter: 'agDateColumnFilter',
            filterParams: filterParams,
        },
        { field: 'sensetiveWord', filter: 'agTextColumnFilter' },
        { field: 'keyword', filter: 'agTextColumnFilter' },
        // { field: 'gold', filter: 'agNumberColumnFilter' },
        // { field: 'silver', filter: 'agNumberColumnFilter' },
        // { field: 'bronze', filter: 'agNumberColumnFilter' },
        // { field: 'total', filter: false },
    ]);
    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 150,
            filter: 'agTextColumnFilter',
            menuTabs: ['filterMenuTab'],
        };
    }, []);
    const components = useMemo(() => {
        return {
            ModelRender: IconModel,
        };
    }, []);
    const onGridReady = useCallback((params) => {
        setRowData([
            {
                see: true,
                name: "voice1",
                dateTime: "1/1/2023",
                sensetiveWord: "",
                keyword: "Plane",
            },
            {
                see: false,
                name: "voice2",
                dateTime: "1/2/2021",
                sensetiveWord: "fall",
                keyword: "tree",
            },
            {
                see: false,
                name: "voice2",
                dateTime: "1/2/2021",
                sensetiveWord: "fall",
                keyword: "tree",
            }
        ])
        // setRowData(date.map((item, index) => {
        //     console.log("map ==> " + item.see)
        //     return ({
        //         see: <ModelRender see={item.see} />,
        //         name: "voice2",
        //         dateTime: "1/2/2021",
        //         sensetiveWord: "fall",
        //         keyword: "tree",
        //     })
        // }))
        // // fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        //     .then((resp) => resp.json())
        //     .then((data) => setRowData(data));
    }, []);

    return (
        <>
            <div style={containerStyle}>
                <div
                    style={gridStyle}
                    className={
                        "ag-theme-quartz"
                    }
                >
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        onGridReady={onGridReady}
                        components={components}
                        pagination={true}
                    />
                </div>
            </div>
        </>
    );
};

export default ProTable;