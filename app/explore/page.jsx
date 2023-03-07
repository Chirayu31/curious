import Explore from "@/components/Explore"
import getPostMetaData from '@/utils/getPostMetaData';


const ExplorePage = () => {
    const postMetaData = getPostMetaData()

    return (
        <Explore postMetaData={postMetaData} />

    )
}

export default ExplorePage