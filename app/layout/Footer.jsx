import { Link } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }) => {
  const res = await fetch(`https://arrown-blog.com/wp-json/wp/v2/categories`);
  const data = await res.json();
  // console.log(res, 111111);

  if (res) {
    return json(data);
  } else {
    throw new Error(data.message);
  }
};

const Footer = () => {
  return (
    <footer className="bg-[#214369] py-20 ">
      <div className="w-11/12 mx-auto flex justify-center">
        <p className="text-[#fff]">Arrown</p>
      </div>
    </footer>
  );
};

export default Footer;
