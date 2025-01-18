import { Post } from '../types/main';
import axios from 'axios';

export const getPosts = async () : Promise<Post[]> => {
    const url = `${import.meta.env.VITE_BASE_URL}/posts`;
    try {
        const res = await axios.get(url);
        return res.data as Post[];
    } catch (e) {
        console.error('Request failed. You can not retrieve posts', e)
        return [];
    }
}

export const getPostById = async (id: string) : Promise<Post[]> => {
    const url = `${import.meta.env.VITE_BASE_URL}/posts/${id}`;
    try {
        const res = await axios.get(url);
        return res.data as Post[];
    } catch (e) {
        console.error('Request failed. You can not retrieve posts by id', e)
        return [];
    }
}

export const getPostsByCategory = async (category: string): Promise<Post[] | []>  => {
    const url = `${import.meta.env.VITE_BASE_URL}/posts/category`;
    try {
        const res = await axios.post(url,  {
            category: category.toLowerCase(), 
        });

        return res.data as Post[];

    } catch(e) {
        console.error('Request failed. You can not retrieve posts of celected category', e)
        return [];
    }  
}