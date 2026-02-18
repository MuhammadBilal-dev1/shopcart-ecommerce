import React, { useState } from "react";
import Rating from "../components/Rating";
import "../assets/css/review.css";

const reviwtitle = "Add a Review";

let ReviewList = [
  {
    imgUrl: "/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = ({result}) => {
  const [reviewShow, setreviewShow] = useState(true);
  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setreviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setreviewShow(!reviewShow)}>
          Reviews 4
        </li>
      </ul>

      {/* desc and review content */}
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={review.imgUrl} alt={review.name} />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* add review field */}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviwtitle}</h5>
              </div>
            </div>

            <form action="action" className="row">
              <div className="col-md-4 col-12">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                />
              </div>
              <div className="col-md-4 col-12">
                <input
                  type="email"
                  name="email"
                  id="name"
                  placeholder="your Email"
                />
              </div>
              <div className="col-md-4 col-12">
                <div className="rating">
                  <span className="me-2">Your Rating</span>
                  <Rating />
                </div>
              </div>
              <div className="col-md-12 col-12">
                <textarea
                  className="mt-4"
                  name="message"
                  id="message"
                  rows="8"
                  placeholder="Type Here Message"
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="default-button">
                  <span>Submit Review</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* description */}
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ipsam saepe facilis omnis, tempora repellat quos temporibus, animi
            incidunt praesentium asperiores fugiat nisi quis? Repellat labore ad
            expedita quidem inventore. Deserunt sequi quod voluptates quidem
            reiciendis, autem dolorem voluptatem culpa ipsa quam reprehenderit
            harum vitae saepe cupiditate iste quos praesentium architecto
            repudiandae rerum eum distinctio voluptate placeat. Aliquid,
            delectus quos. Consequuntur ullam, beatae iusto officia totam a
            nesciunt repudiandae corporis repellat tempora est temporibus cumque
            voluptates nemo sit reiciendis aperiam voluptatem, mollitia id
            facilis quidem obcaecati magnam modi! Sunt, suscipit.
          </p>

          <div className="post-item">
            <div className="post-thumb">
              <img src={result} alt="" />
            </div>
            <div className="post-content">
              <ul className="lab-ul">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur, voluptates?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur, voluptates?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur, voluptates?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur, voluptates?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur, voluptates?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur, voluptates?
                </li>
              </ul>
            </div>
          </div>
          <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ipsam saepe facilis omnis, tempora repellat quos temporibus, animi
            incidunt praesentium asperiores fugiat nisi quis? Repellat labore ad
            expedita quidem inventore. Deserunt sequi quod voluptates quidem
            reiciendis, autem dolorem voluptatem culpa ipsa quam reprehenderit
            harum vitae saepe cupiditate iste quos praesentium architecto
            repudiandae rerum eum distinctio voluptate placeat. Aliquid,
            delectus quos. Consequuntur ullam, beatae iusto officia totam a
            nesciunt repudiandae corporis repellat tempora est temporibus cumque
            voluptates nemo sit reiciendis aperiam voluptatem, mollitia id
            facilis quidem obcaecati magnam modi! Sunt, suscipit.
            </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Review;
