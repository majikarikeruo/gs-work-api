import { json } from "@remix-run/node";

import { useLoaderData } from "@remix-run/react";

import Share from "../components/share";
import AboutMe from "../components/AboutMe";

export const loader = async ({ params }) => {
  const res = await fetch(
    `https://arrown-blog.com/wp-json/wp/v2/posts/?slug=${params.slug}&_embed`
  );
  const data = await res.json();
  console.log(data);
  if (res) {
    return json(data);
  } else {
    throw new Error(data.message);
  }
};

export default function PostSlug() {
  const posts = useLoaderData();
  const post = posts[0];

  const getFomattedDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    return `${year}/${month}/${day}`;
  };

  const formattedDate = getFomattedDate(post.date);
  const formattedModifyDate = getFomattedDate(post.modified);

  return (
    <div>
      <article className="entry-content mt-3">
        <h1 className="text-[27px] font-bold entry-title">
          {post.title.rendered}
        </h1>
        <span>{post.category_name}</span>
        <div className="mt-4">
          <time className="entry-date">{formattedDate}</time>
          <time className="entry-date">{formattedModifyDate}</time>
        </div>
        <figure className="my-6">
          <img
            src={post["_embedded"]["wp:featuredmedia"][0]["source_url"]}
            alt=""
          />
        </figure>
        <Share />
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </article>

      <aside className="entry-aside my-5">
        <div>
          <h2 className="text-[27px] font-bold">お問い合わせ</h2>
          <p>
            今回の件について、何かあればお気軽にお問い合わせください！今回の件について、何かあればお気軽にお問い合わせください！
          </p>
          <div className="flex items-center justify-center mt-4">
            <a
              href="#"
              className="btn btn-contact block font-bold p-3 px-6 bg-[#E8AF4A] text-white text-md pa-4 text-center rounded-2xl"
            >
              お問い合わせフォームへ
            </a>
          </div>
        </div>

        <div className="mt-4">
          <h2>この記事をシェアする</h2>
          <p className="text-center">
            この記事がお役に立ったらぜひシェアお願いします
          </p>
          <Share />
        </div>
        <AboutMe />
      </aside>
    </div>
  );
}
