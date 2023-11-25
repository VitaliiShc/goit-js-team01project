import Pagination from 'tui-pagination';
const options = {
  totalItems: 90,
  itemsPerPage: 6,
  visiblePages: 8,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<li class="tui-page-btn">{{page}}</li>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<button class="tui-ico-btn">' +
      '<span class="icon-svg"><img src="icon-arrow.svg"/></span>' +
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
