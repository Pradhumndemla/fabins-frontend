import { Link } from "react-router-dom";

export default function FollowSuggestion() {
  return (
    <>
      <div className="col-sm-6 col-lg-12">
        <div className="card">
          {/* <!--  Card header START --> */}
          <div className="card-header pb-0 border-0">
            <h5 className="card-title mb-0">Who to follow</h5>
          </div>
          {/* <!--  Card header END --> */}
          {/* <!--  Card body START --> */}
          <div className="card-body">
            {/* <!--  Connection item START --> */}
            <div className="hstack gap-2 mb-3">
              {/* <!--  Avatar --> */}
              <div className="avatar">
                <Link href="/">
                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/avatar/04.jpg"
                    alt=""
                  />
                </Link>
              </div>
              {/* <!--  Title --> */}
              <div className="overflow-hidden">
                <Link className="h6 mb-0" href="/">
                  Judy Nguyen
                </Link>
                <p className="mb-0 small text-truncate">News anchor</p>
              </div>
              {/* <!--  Button --> */}
              <Link
                className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                href="/"
              >
                <i className="fa-solid fa-plus"> </i>
              </Link>
            </div>
            {/* <!--  Connection item END --> */}
            {/* <!--  Connection item START --> */}
            <div className="hstack gap-2 mb-3">
              {/* <!--  Avatar --> */}
              <div className="avatar avatar-story">
                <Link href="/">

                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/avatar/05.jpg"
                    alt=""
                  />
                </Link>
              </div>
              {/* <!--  Title --> */}
              <div className="overflow-hidden">
                <Link className="h6 mb-0" href="/">
                  Amanda Reed
                </Link>
                <p className="mb-0 small text-truncate">Web Developer</p>
              </div>
              {/* <!--  Button --> */}
              <Link
                className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                href="/"
              >
                <i className="fa-solid fa-plus"> </i>
              </Link>
            </div>
            {/* <!--  Connection item END --> */}

            {/* <!--  Connection item START --> */}
            <div className="hstack gap-2 mb-3">
              {/* <!--  Avatar --> */}
              <div className="avatar">
                <Link href="/">

                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/avatar/11.jpg"
                    alt=""
                  />
                </Link>
              </div>
              {/* <!--  Title --> */}
              <div className="overflow-hidden">
                <Link className="h6 mb-0" href="/">
                  Billy Vasquez
                </Link>
                <p className="mb-0 small text-truncate">News anchor</p>
              </div>
              {/* <!--  Button --> */}
              <Link
                className="btn btn-primary rounded-circle icon-md ms-auto"
                href="/"
              >
                <i className="bi bi-person-check-fill"> </i>
              </Link>
            </div>
            {/* <!--  Connection item END --> */}

            {/* <!--  Connection item START --> */}
            <div className="hstack gap-2 mb-3">
              {/* <!--  Avatar --> */}
              <div className="avatar">
                <Link href="/">

                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/avatar/01.jpg"
                    alt=""
                  />
                </Link>
              </div>
              {/* <!--  Title --> */}
              <div className="overflow-hidden">
                <Link className="h6 mb-0" href="/">
                  Lori Ferguson
                </Link>
                <p className="mb-0 small text-truncate">
                  Web Developer at Fabins
                </p>
              </div>
              {/* <!--  Button --> */}
              <Link
                className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                href="/"
              >
                <i className="fa-solid fa-plus"> </i>
              </Link>
            </div>
            {/* <!--  Connection item END --> */}

            {/* <!--  Connection item START --> */}
            <div className="hstack gap-2 mb-3">
              {/* <!--  Avatar --> */}
              <div className="avatar">
                <Link href="/">

                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/avatar/placeholder.jpg"
                    alt=""
                  />
                </Link>
              </div>
              {/* <!--  Title --> */}
              <div className="overflow-hidden">
                <Link className="h6 mb-0" href="/">
                  Carolyn Ortiz
                </Link>
                <p className="mb-0 small text-truncate">News anchor</p>
              </div>
              {/* <!--  Button --> */}
              <Link
                className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                href="/"
              >
                <i className="fa-solid fa-plus"> </i>
              </Link>
            </div>
            {/* <!--  Connection item END --> */}

            {/* <!--  View more button --> */}
            <div className="d-grid mt-3">
              <Link className="btn btn-sm btn-primary-soft" href="/">
                View more
              </Link>
            </div>
          </div>
          {/* <!--  Card body END --> */}
        </div>
      </div>
    </>
  );
}