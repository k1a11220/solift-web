import { Header } from "@components/header";
import Layout from "@components/layout";
import Post from "@components/post";

const PostDetail = () => {
  return (
    <Layout hasTabBar hasHeader>
      <Header title={""} type={""} />
      <Post />
    </Layout>
  );
};

export default PostDetail;
