import { connect } from 'react-redux';
import Table from '../../constant/Table';
import {handlePageNumber,handleItemsPerPage } from "../../store/actions/tableAction";

const mapStatetoProps = state => ({
    ...state,
    user: state.user.user,
    page: state.table.page,
    itemsPerPage: state.table.itemsPerPage
}
);

const mapDispatchtoProps = (dispatch) => ({
    setPageNumber: (page) => dispatch(handlePageNumber (page)),
    setItemsPerPage: (itemsPerPage) => dispatch(handleItemsPerPage(itemsPerPage))
})


export default 
    connect(
        mapStatetoProps,
        mapDispatchtoProps
    )(Table);
