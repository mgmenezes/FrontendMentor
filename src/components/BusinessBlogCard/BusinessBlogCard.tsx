import "./index.css";
import Avatar from "../../assets/avatar-image-business-card.png";
import Hero from "../../assets/hero-image-1.jpg";

export const BusinessBlogCard = () => {
  return (
    <section className="business-card-container">
      <article
        className="business-card"
        role="article"
        aria-label="Business Blog Card"
      >
        <div style={{ position: "relative", width: "100%", height: "300px" }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={Hero}
            alt="Hero Image"
          />
          <svg
            style={{
              position: "absolute",
              bottom: "-2px",
              left: 0,
              width: "100%",
              height: "auto",
            }}
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,90 Q360,60 720,80 T1440,90 L1440,120 L0,120 Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
        <span
          style={{
            color: "#111729",
            fontFamily: "Poppins",
            fontSize: "1.5rem",
            fontWeight: "600",
            padding: "1rem 2rem 0 2rem",
            textAlign: "left",
          }}
        >
          Perfect solution for small business
        </span>
        <span
          style={{
            color: "#394150",
            fontFamily: "Lato",
            fontSize: "0.875rem",
            padding: "0rem 2rem 0.75rem 2rem",
            textAlign: "left",
          }}
        >
          Small businesses need to generate leads to grow. <br /> You can use
          tools like Ringy.
        </span>
      </article>
      <div className="business-card__footer">
        <div
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1rem 2rem",
            justifyContent: "flex-start",
          }}
        >
          <img
            id="avatar"
            src={Avatar}
            style={{
              borderRadius: "50%",
              width: "3rem",
              height: "3rem",
              objectFit: "cover",
              border: "2px solid #F2F5F9",
            }}
            alt="Business Blog Card"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <span
              style={{
                color: "#111729",
                fontFamily: "Lato",
                fontWeight: "600",
              }}
            >
              Amy Burgess
            </span>
            <span
              style={{
                color: "#4A5567",
                fontFamily: "Lato",
                marginTop: "-0.25rem",
                fontWeight: "600",
              }}
            >
              Customer Manger, Solution Oy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
