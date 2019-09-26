import { Link } from "react-router-dom";

import TagList from "src/components/TagList";

export default ({ articles }) => {
  return (
    <aside className="hidden sm:block w-1/3 mt-8 pr-8">
      <form className="md:flex mt-2">
        <input
          type="text"
          placeholder="Search"
          className="md:flex-auto w-full md:min-w-0 border border-indigo-400 text-sm px-4 py-2 rounded-t md:rounded-t-none md:rounded-l outline-none"
        />
        <button
          type="submit"
          className="w-full md:w-auto bg-indigo-400 hover:bg-indigo-600 text-white uppercase text-sm rounded-b md:rounded-b-none md:rounded-r px-3 py-2">
          Go
        </button>
      </form>
      <nav className="mt-8">
        <h2 className="font-semibold text-indigo-800">Recent Hammers</h2>
        <ul className="text-sm mt-2">
          {articles.map(article => (
            <li key={article.id} className="my-2">
              <Link
                to={`/posts/${article.slug}`}
                className="text-indigo-600 hover:bg-indigo-100 rounded">
                {article.title}
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="font-semibold text-indigo-800 mt-16">Popular Tags</h2>
        <ul className="text-sm mt-2">
          <TagList tags={articles[0].tags} />
        </ul>
      </nav>
    </aside>
  );
};