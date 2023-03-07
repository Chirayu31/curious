import getPostMetaData from '../utils/getPostMetaData'
import Home from '@/components/Home'
import PostCard from '@/components/PostCard'

const HomePage = () => {
    const postMetaData = getPostMetaData()
    const postPreviews = postMetaData.map(post => (
        <PostCard key={post.slug} {...post} />
    ))

    return (
        <Home count={postMetaData.length}>
            {postPreviews}
        </Home>
    )
}

export default HomePage