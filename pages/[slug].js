import styled from "styled-components";
import { fetchAPI } from "../lib/api";
// import Header from "../components/blog/header/header";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("../components/footer/footer"));
const Header = dynamic(() => import("../components/blog/header/header"));
const Image = dynamic(() => import("../components/blog/image/image"));
const Contents = dynamic(() => import("../components/blog/contents/contents"));
const Markdown = dynamic(() => import("../components/blog/markdown/markdown"));
const Breadcrumb = dynamic(() =>
  import("../components/blog/breadcrumb/breadcrumb")
);
const ImageWithText = dynamic(() =>
  import("../components/blog/imageWithText/imageWithText")
);

const Container = styled.main`
  max-width: 1100px;
  margin: auto;
  padding: 0 2rem;
`;
export default function Home({ article, footer }) {
  // console.log(article)
  return (
    <div>
      <Header {...{ ...article }} />
      <Container>
        <Breadcrumb {...{ ...article }} />
        <Contents {...{ ...article }} />
        <article>
          {article.blogCompoments.map((compoment, index) => (
            <section key={compoment.id}>
              {compoment.__component === "blog.markdown-with-image" && (
                <ImageWithText  {...{ ...compoment }} />
              )}
              {compoment.__component === "blog.rich-text" && (
                <Markdown  markdown={compoment.markdown} />
              )}
              {compoment.__component === "blog.image" && (
                <Image  image={compoment.image} />
              )}
            </section>
          ))}
        </article>
      </Container>
      <Footer {...{ ...footer }} />
    </div>
  );
}

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");
  return {
    paths: articles.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  let article = await fetchAPI(`/articles/?slug=${params.slug}`);
  const footer = await fetchAPI("/stopka");
  article = article[0];
  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: { article, footer }, // will be passed to the page component as props
  };
}
