import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Tags from '../shop/Tags'
import PopularPost from '../shop/PopularPost'

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  const result = blog.filter((p) => p.id === Number(id));
  console.log(result[0]);

  return (
    <div>
      <PageHeader title={"Single Blog Page"} currPage={"Blog / Blog Details"} />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>{" "}
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>{item.desc}</p>
                                <blockquote>
                                  <p>{item.quotes}</p>
                                  <cite>
                                    <a href="#">...{item.author}</a>
                                  </cite>
                                </blockquote>
                                <p>{item.lower_desc}</p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  Lorem, ipsum dolor sit amet consectetur
                                  adipisicing elit. Explicabo fugiat minima
                                  delectus nemo rem ipsam dolor error aliquam
                                  cumque maiores perspiciatis ea sed veniam
                                  harum, tenetur, illo voluptate dolorem sint.
                                  Accusantium, excepturi nesciunt? Incidunt sit
                                  itaque perferendis, et veniam asperiores nisi
                                  recusandae dolore fugit voluptates sunt quidem
                                  maxime excepturi aliquam deleniti? Blanditiis
                                  enim soluta assumenda voluptas a sint pariatur
                                  modi! Dicta temporibus animi voluptas est sunt
                                  dignissimos facilis explicabo nihil eaque
                                  consequuntur tempore non quam nostrum
                                  accusamus veritatis officia veniam, voluptate
                                  obcaecati doloribus ab ducimus aliquid illum
                                  corrupti voluptates? Dolore! Sunt corrupti
                                  nisi dicta assumenda similique, aliquid quam
                                  saepe eum perferendis molestias architecto a
                                  dolorum vero laudantium accusantium eligendi
                                  ipsa dolorem aliquam! Libero tempore sint aut
                                  ipsam amet, hic aspernatur. Rem aliquid
                                  molestiae nesciunt. Eos reprehenderit nulla
                                  quam! Eligendi incidunt animi eveniet
                                  distinctio enim corrupti, earum laudantium
                                  minus rerum in magnam, alias tenetur accusamus
                                  reiciendis repellendus, eum architecto vel
                                  temporibus! Ad asperiores esse sunt explicabo
                                  dolorum delectus iste! Voluptates, nihil
                                  consectetur? Pariatur dolorem ab dolorum error
                                  ut, laboriosam aspernatur, qui veritatis a
                                  quidem vero aperiam dolores at iusto! Aperiam,
                                  dolorem! Corrupti optio explicabo soluta
                                  dolores numquam.
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/_W3R2VwRyF4?si=dQrQfEMwVnu01v6x"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>

                                <p>
                                  Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Ducimus, aperiam officia
                                  fugiat ad eveniet facilis maxime fugit,
                                  doloremque similique vitae itaque tempora
                                  nihil libero earum alias consectetur veniam,
                                  voluptates laborum? Laborum vitae ea eligendi!
                                  Quia voluptatem vero odio? Ipsa blanditiis
                                  provident natus consequuntur quasi alias
                                  inventore minus adipisci placeat, voluptatibus
                                  quod beatae officiis illo quidem dolorum sunt
                                  dolorem animi nulla. Perspiciatis enim
                                  perferendis, fuga, eum atque saepe quibusdam
                                  mollitia itaque quasi expedita fugiat deserunt
                                  dolore voluptatum laudantium error ut
                                  voluptas! Blanditiis tenetur libero obcaecati
                                  quaerat explicabo temporibus modi rerum illo.
                                  Harum distinctio natus ea corporis magnam
                                  eveniet est, consectetur, rem sint inventore
                                  eos repellat reiciendis asperiores vero a
                                  ipsam totam illum soluta, omnis ab accusantium
                                  voluptates pariatur maiores! Aut, laborum?
                                  Voluptatum cumque quisquam quos sunt
                                  voluptatem. Laborum, magni! Cumque, a ratione!
                                  Magnam possimus vel explicabo consequuntur
                                  nisi delectus illum deserunt quae alias, culpa
                                  fugiat non harum rerum facere? Aperiam, hic.
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                          <i className="icofont-double-left"></i> Previous Blog
                        </a>
                        <a href="#" className="title">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Corrupti, sapiente.
                        </a>
                      </div>
                      <div className="right">
                        <a href="#" className="prev">
                          Next Blog <i className="icofont-double-right"></i>
                        </a>
                        <a href="#" className="title">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Corrupti, sapiente.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <Tags/>
              <PopularPost/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
