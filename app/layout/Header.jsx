import { Link } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }) => {
  const res = await fetch(`https://arrown-blog.com/wp-json/wp/v2/categories`);
  const data = await res.json();

  if (res) {
    return json(data);
  } else {
    throw new Error(data.message);
  }
};

const Header = () => {
  const categories = [
    {
      ja: "自己紹介",
      en: "About",
    },
    {
      ja: "プログラミング",
      en: "Programming",
    },
    {
      ja: "健康・疲労回復",
      en: "Programming",
    },
    {
      ja: "コラム",
      en: "Column",
    },
    {
      ja: "Webサイト運営",
      en: "WebSite",
    },
    {
      ja: "旅行・グルメ",
      en: "travel & gourmet",
    },
    {
      ja: "お役立ち",
      en: "useful",
    },
  ];
  console.log(categories);

  return (
    <header className="header py-8 mb-8">
      <div className="w-11/12 mx-auto flex justify-between">
        <h1 className="font-bold text-xl">
          <Link to="/" className="">
            Arrown
          </Link>
        </h1>
        <nav>
          <ul className="flex">
            {categories.map((category) => (
              <li key={category.ja} className="text-center ml-5">
                <Link to="/" className="">
                  {category.ja}
                  <span className="block mt-2 text-[10px] text-[#666666]">
                    {category.en}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
