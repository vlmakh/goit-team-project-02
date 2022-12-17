import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import refs from './refs';
import { getByKeyword, getTrending } from './api';
const TUI_VISIBLE_PAGES = 5;

export function createPagination(totalItems, visiblePages) {
  const options = {
    itemsPerPage: 20,
    totalItems: totalItems,
    visiblePages: visiblePages < 5 ? visiblePages : TUI_VISIBLE_PAGES,
  };

  const pagination = new Pagination(refs.pagination, options);

  if (visiblePages > 1) {
    refs.pagination.style.display = 'block';
  } else {
    refs.pagination.style.display = 'none';
  }

  return pagination;
}
