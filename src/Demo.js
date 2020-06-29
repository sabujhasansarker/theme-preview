import React from "react";

const Demo = () => {
  const demoDatas = [
    {
      name: "Personal Portfolio — One Page",
      text:
        "It comes with landing page feature. This tamplate you can be used for your Personal useses, Freelancer, Designer, and      Developer etc.",
      bandeg: "New",
      img: "https://quixlab.com/demo/tradix/images/portfolio.jpg",
    },
    {
      name: "Personal Portfolio — One Page",
      text:
        "It comes with landing page feature. This tamplate you can be used for your Personal useses, Freelancer, Designer, and      Developer etc.",
      bandeg: "Hot",
      img: "https://quixlab.com/demo/tradix/images/portfolio.jpg",
    },
    {
      name: "Personal Portfolio — One Page",
      text:
        "It comes with landing page feature. This tamplate you can be used for your Personal useses, Freelancer, Designer, and      Developer etc.",
      bandeg: "New",
      img: "https://quixlab.com/demo/tradix/images/portfolio.jpg",
    },
    {
      name: "Personal Portfolio — One Page",
      text:
        "It comes with landing page feature. This tamplate you can be used for your Personal useses, Freelancer, Designer, and      Developer etc.",

      img: "https://quixlab.com/demo/tradix/images/portfolio.jpg",
    },
    {
      name: "Personal Portfolio — One Page",
      text:
        "It comes with landing page feature. This tamplate you can be used for your Personal useses, Freelancer, Designer, and      Developer etc.",
      bandeg: "New",
      img: "https://quixlab.com/demo/tradix/images/portfolio.jpg",
    },
    {
      name: "Personal Portfolio — One Page",
      text:
        "It comes with landing page feature. This tamplate you can be used for your Personal useses, Freelancer, Designer, and      Developer etc.",

      img: "https://quixlab.com/demo/tradix/images/portfolio.jpg",
    },
  ];
  return (
    <div className="demo pt-5 bg-protfulio-bg" id="demo">
      <div className="container mt-5">
        <div className="row">
          {demoDatas.map((data, index) => (
            <div className="col-lg-4 col-md-6 mb-4 " key={index}>
              <a
                href="#someting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none "
              >
                <img
                  src="https://quixlab.com/demo/tradix/images/portfolio.jpg"
                  alt=""
                  className="img-fluid position-relative"
                />
                <p className="position-absolute ">
                  {data.bandeg && (
                    <span className="badge bg-danger">{data.bandeg}</span>
                  )}
                </p>
                <div className="demo_footer position-absolute">
                  <h3 className="title">{data.name}</h3>
                  <p className="info">{data.text}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demo;
