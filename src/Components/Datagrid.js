import react, { useEffect, useState } from 'react'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid'
import { mockDataTeam } from './mockData'
import { Avatar, colors } from '@mui/material'
import { blue } from '@mui/material/colors'

function Datagrid () {
    const [data, setData] = useState([])
    // useEffect( () => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => {
    //         setData(res.data)
    //         console.log(data)
            
    //     })

    // },[])
    useEffect( () => {
        setData(mockDataTeam )

    },[])
    const [pageSize, setPageSize] = useState(5)

    


    const columns = [
    {
        field: "id",
        headerName:"ID",
        width:"70"

    },
    {
        field: "photoUrl",
        headerName:"PHOTO",
        width:"70",
        renderCell :params => <Avatar src={params.row.photoUrl}/>,
        sortable :false,
        filterable : false

    },
    {
        field: "name",
        headerName:"NAME",
        width:"300",
        type : 'singleSelect',
        valueOptions : ['Konfor','Jerry','Atud'],
        editable : true,
        cellClassName : 'name--column--cell',

    },
    {
        field: "email",
        headerName:"EMAIL",
        width:"300"

    },
    {
        field: "age",
        headerName:"AGE",
        width:"100"

    },



]

const rows = data.map( (rows) => ({
    id :rows.id,
    name: rows.name,
    email :rows.email,
    age : rows.age,
    photoUrl : rows.photoUrl,

}))


    return(
        <div style={{ height : '130%', width : "90%", color : 'white'}}>
           <DataGrid
           sx = {{
            "& .MuiDataGrid-footerContainer" : {
                backgroundColor : 'pink',
                borderTop : 'none',
            },
            "& .MuiDataGrid-columnHeader" : {
                backgroundColor : 'pink',
                color : 'black'
            },
            m : 2,
            border : 4,
            '& .MuiDataGrid-cell:hover': {
                color: 'green',
              },
              backgroundColor : 'black',
              color : 'white',
            
            boxShadow : 50,
            borderColor : 'primary.light'
           }}
           rows={mockDataTeam}
           columns={columns}
           initialState = {{pagination: { 
            paginationModel: { 
                pageSize: 5 
            } }}}
           pageSizeOptions={[5, 10, 25]}
           pageSize = {pageSize}
           getRowSpacing={params => ({
            top : params.isFirstVisible ? 0 : 5,
            bottom : params.isLastVisible ? 0 : 5,
           })}
           />
        </div>
    )

}
export default Datagrid