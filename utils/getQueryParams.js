import { useRouter } from 'next/router'

// non functional
export const getQueryParams = ({router}) => {
    return router.query;
}