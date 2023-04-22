import getPostMetaData from '../utils/getPostMetaData'
import Home from '@/components/Home'
import PostCard from '@/components/PostCard'


const HomePage = () => {
    const postMetaData = getPostMetaData()
    const postPreviews = postMetaData.slice(0, 9).map(post => (
        <PostCard key={post.slug} {...post} />
    ))

    return (
        <Home count={postMetaData.length}>
            {postPreviews}
        </Home>
    )
}

export default HomePage