import { Menu } from '../types/main';
import nutImg from '../assets/images/nut.jpg';
import techImg from '../assets/images/tech.jpg';
import learImg from '../assets/images/lear.jpg';
import motImg from '../assets/images/mot.jpg';

export  const menu: Menu[] = [
    {text: 'Nature', path: '/'},
    {text: 'Technology', path: '/'},
    {text: 'Learning', path: '/'},
    {text: 'Motivation', path: '/'}
];

export const borderImg = {
    nature: nutImg,
    technology: techImg,
    learning: learImg,
    motivation: motImg
}

export const categories = ['nature', 'technology', 'learning', 'motivation']