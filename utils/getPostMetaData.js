import matter from 'gray-matter'
import fs from 'fs'

const getPostMetaData = () => {
    const folder = 'posts/'
    const files = fs.readdirSync(folder)
    const mdFiles = files.filter((file) => file.endsWith('.md'))

    const posts = mdFiles.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf-8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            image: matterResult.data.image,
            slug: fileName.replace('.md', ''),
        }
    })

    posts.sort((a, b) => new Date(b.date) - new Date(a.date))

    return posts
}
export default getPostMetaData