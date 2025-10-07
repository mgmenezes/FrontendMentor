import { TagPill } from "./TagPill";
import Cactus from "../../assets/Cactus.jpg";
interface MinimalBlogCardProps {
  title: string;
  description?: string;
  imageSrc: string;
}

export const MinimalBlogCard = ({
  title,
  description = "From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.",
  imageSrc = Cactus,
}: MinimalBlogCardProps) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "1.25rem",
          borderBottomLeftRadius: "0",
          borderBottomRightRadius: "0",
          padding: "1rem",
          boxShadow: "8px 8px 20px 0px rgba(85, 85, 85, 0.08)",
          width: "21.875rem",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "0.625rem",
          }}
          src={imageSrc}
          alt={title}
        />
        <TagPill />
        <h1
          style={{
            color: "#20293A",
            fontSize: "1.125rem",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            color: "#394150",
            fontSize: "0.75rem",
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "left",
          }}
        >
          {description}
        </p>
      </div>
      <footer style={{ display: "flex", justifyContent: "flex-start" }}>
        <p
          style={{
            textAlign: "left",
            backgroundColor: "#FFFFFF",
            borderBottomLeftRadius: "1.25rem",
            borderBottomRightRadius: "1.25rem",
            padding: "1rem",
            color: "#394150",
            fontSize: "0.625rem",
            boxShadow: "8px 8px 20px 0px rgba(85, 85, 85, 0.08)",
            width: "21.875rem",
            marginTop: "0.25rem",
          }}
        >
          Annie Spratt
        </p>
      </footer>
    </div>
  );
};
