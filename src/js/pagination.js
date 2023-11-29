import Pagination from 'tui-pagination';
import icons from '../images/icons.svg';
const options = {
  totalItems: 0,
  itemsPerPage: 0,
  visiblePages: 4,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<li class="tui-page-btn">{{page}}</li>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<button class="tui-ico-btn" type = "button">' +
      '<svg class="tui-icon-arrow"><use href="${icons}#icon-pagination-arrow-right/></svg>' +
      '</button>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};
export const pagination = new Pagination('pagination-container', options);
const page = pagination.getCurrentPage();
