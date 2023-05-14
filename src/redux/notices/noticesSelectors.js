export const getAllNotices = ({ notices }) => notices.items;

export const selectNoticesByCategory = state => state.notices.category;
