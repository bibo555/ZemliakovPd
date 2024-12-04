import React from 'react';

const Pagination = ({ totalPages, page, changePage }) => {
    const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="page__wrapper">
            {pagesArray.map((p) => (
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                >
                    {p}
                </span>
            ))}
        </div>
    );
};

export default Pagination;
