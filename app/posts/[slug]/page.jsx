import fs from 'fs'
import matter from 'gray-matter'
import getPostMetaData from '@/utils/getPostMetaData'
import Post from '@/components/Post'

const getPostContent = (slug) => {
    const folder = 'posts/'
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, `utf-8`)
    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const posts = getPostMetaData()
    return posts.map((post) => ({
        slug: post.slug
    }))
}

const PostPage = (props) => {
    const slug = props.params.slug
    const post = getPostContent(slug)

    return (
        <Post post={post} />
    )
}

export default PostPage