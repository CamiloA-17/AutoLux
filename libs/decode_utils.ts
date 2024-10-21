import { jwtDecode } from "jwt-decode";
import { getCookie } from 'typescript-cookie'; 

export const getUidFromToken = (): string | null => {
    const token = getCookie('token');
    if (token) {
        try {
            const decoded: any = jwtDecode(token);
            console.log(decoded);
            
            return decoded.user_id;
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    }
    return null;
};