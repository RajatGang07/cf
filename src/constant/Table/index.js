import React, { useState } from 'react';
import { Icon, Label, Table, Button, Dropdown } from 'semantic-ui-react'
import _ from 'lodash';
import PropTypes from 'prop-types'
import { Pagination } from 'semantic-ui-react'
import { formatAddress } from '../../utils/formatAddress';
import { numberOption } from '../ui/DropDown/numberOption';
import { formatCompany } from '../../utils/formatCompany';


const UserTable = ({user,page,itemsPerPage,setPageNumber,setItemsPerPage,userInfo,deleteUser,...props}) => {

    let [column, setColumn] = useState(null);
    let [direction, setDirection] = useState(null);

    const handleSort = (clickedColumn) => () => {
        if (column !== clickedColumn) {
            setColumn(column = clickedColumn);
            setDirection(direction = 'ascending');
            user = _.sortBy(user, [clickedColumn])
            return
        }
        user = user.reverse();
        direction === 'ascending' ? setDirection(direction = 'descending') : setDirection(direction = 'ascending');
    }


    const setPageNum = (event, { activePage }) => {
        setPageNumber(activePage);
    };

    const onChangeDropDown = (e, data) => {
        setItemsPerPage(parseInt(data.value))
    }
    const userData = user.slice(
        (page - 1) * itemsPerPage,
        (page - 1) * itemsPerPage + itemsPerPage
    );

    return (
        <div>
            <Table celled>
                <Table.Header sortable={true.toString()}>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'name' ? direction : null}
                            onClick={handleSort('name')}>Name</Table.HeaderCell>
                        <Table.HeaderCell>User Name</Table.HeaderCell>
                        <Table.HeaderCell sorted={column === 'email' ? direction : null}
                            onClick={handleSort('email')}>Email</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell>Website</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>Company</Table.HeaderCell>
                        <Table.HeaderCell>Info</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {userData.map((user, index) => {
                        return (
                            <Table.Row key={user.id}>
                                <Table.Cell>
                                    <Label ribbon>{user.name}</Label>
                                </Table.Cell>
                                <Table.Cell>{user.username}</Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>{user.phone}</Table.Cell>
                                <Table.Cell>{user.website}</Table.Cell>
                                <Table.Cell>{formatAddress(user.address)}</Table.Cell>
                                <Table.Cell>{formatCompany(user.company)}</Table.Cell>
                                <Table.Cell>
                                    <Button
                                        floated='right'
                                        icon
                                        labelPosition='left'
                                        primary
                                        size='small'
                                        onClick={() => userInfo(user.id)}
                                    >
                                        <Icon name='user' />Info
                                        </Button>
                                </Table.Cell>

                                <Table.Cell>
                                    <Button
                                        negative
                                        floated='right'
                                        icon
                                        primary
                                        size='small'
                                        onClick={() => deleteUser(user.id, index)}
                                    > Delete
                                        </Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
            <div>
                Please select rows in table &nbsp;
                <Dropdown
                    inline
                    options={numberOption}
                    defaultValue={numberOption[0].value}
                    onChange={onChangeDropDown}
                />
                {
                    userData.length && <Pagination
                        activePage={page}
                        siblingRange={1}
                        onPageChange={setPageNum}
                        totalPages={Math.ceil(user.length / itemsPerPage)} />
                }
            </div>
        </div>


    )
};

UserTable.propTypes = {
    page: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
}

export default UserTable;

