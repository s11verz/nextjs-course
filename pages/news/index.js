import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='news/d'>NextJS is a great Framwork</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
