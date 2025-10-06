import { TagPill } from "./TagPill";

interface MinimalBlogCardProps {
  title: string;
  description: string;
  image: string;
}


export const MinimalBlogCard = ({ title, description, image }: MinimalBlogCardProps) => {
  return (
    <div style={{ backgroundColor: '#e6e6e6', borderRadius: '1.25rem', padding: '1.5rem', boxShadow: '8px 8px 20px 0px rgba(85, 85, 85, 0.08)' }}>
      <h1>aqui tem uma imagem</h1>
      <TagPill />
      <h1 style={{ color: '#191919', fontSize: '1.125rem' }}>{title}</h1>
      <p style={{ color: '#191919', fontSize: '0.75rem' }}>{description}</p>
    </div>
  );
};