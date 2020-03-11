import { STORE_PAGE_NUMBER,ITEMS_PER_PAGE } from "../constant/tableConstant";

  
  export const handlePageNumber = (page) => ({
    type: STORE_PAGE_NUMBER,
    page
  });

  export const handleItemsPerPage = (itemsPerPage) => ({
    type: ITEMS_PER_PAGE,
    itemsPerPage
  })
  

  