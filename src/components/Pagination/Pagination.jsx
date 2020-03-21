import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const getPages = (total: Number, limit: Number, page: Number) => {
    let totalPages = parseInt(total / limit) + (total % limit !== 0 ? 1 : 0);
    if (totalPages < 1) totalPages = 1;
    let pages;
    if (totalPages <= 5) {
        pages = new Array(totalPages).fill(0).map((_, k) => k + 1)
    } else if (page < 3) {
        pages = new Array(5).fill(0).map((_, k) => k + 1);
    } else if (page > totalPages - 2) {
        pages = new Array(5).fill(0).map((_, k) => totalPages - k).reverse()
    } else {
        pages = new Array(5).fill(0).map((_, k) => k + page - 2);
    }
    return { pages, totalPages };
}

interface PaginationProps {
    onChange: (page: Number) => void,
    total: Number,
    limit: Number,
    page: Number
}

export default ({ limit, total, page, onChange }: PaginationProps) => {
    const { pages, totalPages } = getPages(total, limit, page);
    const _onChange = (page) => () => {
        onChange(page);
    }

    return (
        <Pagination aria-label="Page navigation example">
            <PaginationItem onClick={() => onChange(1)}>
                <PaginationLink first href="#" />
            </PaginationItem>

            {pages.map((_page) => (
                <PaginationItem onClick={_onChange(_page)} active={page === _page} key={_page}>
                    <PaginationLink href="#">
                        {_page}
                    </PaginationLink>
                </PaginationItem>
            ))}

            <PaginationItem onClick={() => onChange(totalPages)}>
                <PaginationLink last href="#" />
            </PaginationItem>
        </Pagination>
    );
};
