import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const res = await fetch("https://arrown-blog.com/wp-json/wp/v2/posts?_embed");
  const data = await res.json();

  if (res) {
    return json(data);
  } else {
    throw new Error(data.message);
  }
};

export default function Posts() {
  const posts = useLoaderData();

  const getFomattedDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    return `${year}/${month}/${day}`;
  };

  // getFomattedDate(post.date);

  return (
    <main className="py-20">
      <div>
        <ul className="w-8/12 m-auto grid grid-cols-3 gap-4">
          {posts.map((post) => (
            <li key={post.slug} className="">
              <Link to={`/${post.slug}`} className="text-black-600 font-medium">
                <figure className="mb-3">
                  <img
                    src={post["_embedded"]["wp:featuredmedia"][0]["source_url"]}
                    alt=""
                  />
                </figure>

                {post.title.rendered}

                <div>
                  <time className="block mt-3 text-sm">
                    {getFomattedDate(post.date)}
                  </time>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
