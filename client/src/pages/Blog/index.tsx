import AllBlogPost from "./component/AllBlogPost"
import FindByCategory from "./component/FindByCategory"
import Head from "./component/Head"
import RecentBlogPost from "./component/RecentBlogPost"


function Blog() {
  return (
    <>
        < Head />
        < RecentBlogPost />
        < AllBlogPost />
        < FindByCategory />
    </>
  )
}

export default Blog