import { Link } from "react-router-dom";
export default function LoadMorePost() {
  return (
    <>
      {/* <!--  Load more button START --> */}
      <Link
        href="/"
        role="button"
        className="btn btn-loader btn-primary-soft"
        data-bs-toggle="button"
        aria-pressed="true"
      >
        <span className="load-text"> Load more </span>
        <div className="load-icon">
          <div className="spinner-grow spinner-grow-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </Link>
      {/* <!--  Load more button END --> */}
    </>
  );
}