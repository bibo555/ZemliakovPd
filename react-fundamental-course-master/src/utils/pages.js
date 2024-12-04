export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalPages) => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
};
