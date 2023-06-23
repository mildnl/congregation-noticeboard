// @ts-nocheck
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (params.language === 'de') {
        return {
            language: 'de',
        };
    } else if (params.language === 'en') {
        return {
            language: 'en',
        };
    }

    throw error(404, 'Not found');
}