export interface User {
    id: number | null;
    name: string;
    username: string;
    email?: string;
    phone?: string;
    website?: string;
    address?: {
        city: string,
        geo: {
            lat: string,
            lng: string
        }
        street: string,
        suite: string,
        zipcode: string
    },
    company?: {
        bs: string,
        catchPhrase: string,
        name: string
    }
}