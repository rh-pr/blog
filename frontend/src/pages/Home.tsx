import BlogCard from "../components/common/BlogCard"
import { Post } from '../types/main';
function Home() {
    const data = [
        {
            id: '1',
            title: 'The Rise of AI in Everyday Tech',
            url: 'https://images.unsplash.com/photo-1612066473428-fb6833a0d855?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content: 'Artificial Intelligence (AI) is transforming the way we interact with technology. From voice assistants like Alexa and Siri to personalized recommendations on Netflix, AI is at the heart of modern innovations. Its role in automating tasks, improving user experiences, and powering smart devices is revolutionizing industries. As AI continues to evolve, it is becoming an integral part of everyday life, shaping a smarter, more connected future',
            createData: '11 Jan, 2025',
            comments: '0',
            description: 'Technology'
        },
        {
            id: '2',
            title: 'Fueling Your Inner Drive',
            url: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c291bHxlbnwwfHwwfHx8MA%3D%3D',
            content: 'Motivation is the key to achieving our dreams and goals. Whether it’s a simple reminder to keep pushing forward or a deep internal drive, staying motivated can help us overcome challenges and seize opportunities. The journey may be tough, but every step forward is a step toward success. Stay focused, stay persistent, and the rewards will follow.',
            createData: '11 Jan, 2025',
            comments: '0',
            description: 'Motivation'
        },
        {
            id: '3',
            title: 'Embracing the Beauty of the Wild',
            url: 'https://images.unsplash.com/photo-1448132037527-82365ac9ae39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dWV8ZW58MHx8MHx8fDA%3D',
            content: 'Nature’s beauty is unmatched in its tranquility and magnificence. From towering mountains to serene forests, the natural world offers endless inspiration. Taking time to connect with nature can help reduce stress, spark creativity, and bring a sense of peace to our busy lives. Let’s step outside and appreciate the wonders of the earth.',
            createData: '11 Jan, 2025',
            comments: '0',
            description: 'Nature'
        },
        {
            id: '4',
            title: 'The Path to Growth and Knowledge',
            url: 'https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content: 'Learning is a lifelong journey that unlocks the doors to growth and discovery. Whether through formal education, self-study, or hands-on experiences, learning equips us with the tools to navigate the world and achieve our goals. Every new piece of knowledge brings us closer to understanding our purpose and potential.',
            createData: '11 Jan, 2025',
            comments: '0',
            description: 'Learning'
        },
        {
            id: '5',
            title: 'The Rise of AI in Everyday Tech',
            url: 'https://images.unsplash.com/photo-1612066473428-fb6833a0d855?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content: 'Artificial Intelligence (AI) is transforming the way we interact with technology. From voice assistants like Alexa and Siri to personalized recommendations on Netflix, AI is at the heart of modern innovations. Its role in automating tasks, improving user experiences, and powering smart devices is revolutionizing industries. As AI continues to evolve, it is becoming an integral part of everyday life, shaping a smarter, more connected future',
            createData: '11 Jan, 2025',
            comments: '0',
            description: 'Technology'
        },
        {
            id: '6',
            title: 'Fueling Your Inner Drive',
            url: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c291bHxlbnwwfHwwfHx8MA%3D%3D',
            content: 'Motivation is the key to achieving our dreams and goals. Whether it’s a simple reminder to keep pushing forward or a deep internal drive, staying motivated can help us overcome challenges and seize opportunities. The journey may be tough, but every step forward is a step toward success. Stay focused, stay persistent, and the rewards will follow.',
            createData: '11 Jan, 2025',
            comments: '0',
            description: 'Motivation'
        },
        {
            id: '7',
            title: 'The Rise of AI in Everyday Tech',
            url: 'https://images.unsplash.com/photo-1612066473428-fb6833a0d855?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            content: 'Artificial Intelligence (AI) is transforming the way we interact with technology. From voice assistants like Alexa and Siri to personalized recommendations on Netflix, AI is at the heart of modern innovations. Its role in automating tasks, improving user experiences, and powering smart devices is revolutionizing industries. As AI continues to evolve, it is becoming an integral part of everyday life, shaping a smarter, more connected future',
            createData: '11 Jan, 2025',
            comments: '0',
            description: 'Technology'
        },
    ]
  return (
    <div className="w-screen ">
       <div className="flex flex-wrap">
         {data && data.map((el: Post, ind:number) => <BlogCard key={`card-${ind}`} data={el} />)}
       </div>
    </div>
  )
}

export default Home
