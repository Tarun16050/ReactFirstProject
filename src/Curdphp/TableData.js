import  * as React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import Button from '@material-ui/core/Button';


function TableData(props) {
    //Rows 
    let rows = [];
    if (typeof props.rows === 'string') {
        try {
            rows = JSON.parse(props.rows);
        } catch (error) {
            console.error('Error parsing props.rows:', error);
        }
    } else if (Array.isArray(props.rows)) {
        rows = props.rows;
    }
// Colums
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
          field: 'fname',
          headerName: 'First name',
          width: 180,
          editable: false,
        },
        {
          field: 'lname',
          headerName: 'Last name',
          width: 180,
          editable: false,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          editable: false,
        },
        {
          field: 'mobile',
          headerName: 'Contact No.',
          sortable: false,
          editable: false,
          width: 220,
        },
        {
            field: 'department',
            headerName: 'Department Name',
            width:250,
            editable: false,
          },
          {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <div>
                    <Link to={`/edit/${params.row.id}`}>
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Link>
                    <IconButton onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            ),
        },
      ];

    // Implement delete logic here
    const handleDelete = (id) => {
        if(window.confirm("Are You Sure Delete the Record")){
            async function fetchData() {
                const response = await axios.get(`http://localhost/demoreactexample/Curd_Api/delete.php?id=${id}`);
                alert('Record deleted successfully.');
                window.location.reload();
            }
            fetchData();
        }
    };

    // Implement Multiple delete logic here
    const [selectedRows, setSelectedRows] = React.useState([]);
    const MultiHandleDelete = () => {
        if(window.confirm("Are You Sure Delete the Record")){
            selectedRows.forEach(element => {
                async function fetchDataall() {
                    const response = await axios.get(`http://localhost/demoreactexample/Curd_Api/delete.php?id=${element}`);                   
                }
                fetchDataall();
            });
            alert('Record deleted successfully.');
            window.location.reload();
        }
        };

    return (
        <div className='curd_contanier' style={{width: '80%'}}>
            <div style={{ height: 400, width: '100%',  margin:'30px', paddingRight:'30px'}}>
                <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
                onSelectionModelChange={(newSelection) => { setSelectedRows(newSelection); }}
                />
            </div>
            <Button variant="contained" color="secondary" onClick={MultiHandleDelete} style={{ marginTop: '20px' ,marginBottom: '20px' }}>
                Delete Selected
            </Button>
        </div>
    )
}
export default TableData;
