export const getAllNotices = ({ notices }) => notices.items;
export const getNoticesById = ({ notices }) => notices.item;
export const getNoticesByIdOwner = ({ notices }) => notices.owner;
export const selectCategory = store => store.notices.category;
