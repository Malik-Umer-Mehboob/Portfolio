import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0px 12px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0px 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
  @media (max-width: 768px) {
    width: 280px;
    height: 460px;
    padding: 20px 16px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    height: 160px;
  }
`;


const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
width: 100%;
display: flex;
flex-direction: column;
// gap: 0px;
flex-wrap: wrap;
padding: 0px 2px;`;
const Title = styled.div`
font-size: 20px;
font-weight: 600;
color: ${({ theme }) => theme.text_secondary};
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`;
const Date = styled.div`
font-size: 12px;
font-weight: 400;
margin-left: 2px;
color: ${({ theme }) => theme.text_secondary + 80};
@media only screen and (max-width: 768px) {
font-size: 10px;
}
`;
const Description = styled.div`
font-weight: 400;
color: ${({ theme }) => theme.text_secondary + 99};
overflow: hidden;
margin-top: 8px;
display: -webkit-box;
-webkit-line-clamp: 6;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`;

const Button = styled.a`
color: ${({ theme }) => theme.text_primary};
text-decoration: none;
font-weight: 600;
text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;  /* <-- this creates spacing between buttons */
  margin-top: 10px;
`;



const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} alt={project.title} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        {project.date && <Date>{project.date}</Date>}
        <Description>{project.description}</Description>
      </Details>

      <ButtonGroup>
        <Button href={project.webapp} target="_blank">
          Link
        </Button>
        <Button href={project.github} target="_blank">
          Github
        </Button>
      </ButtonGroup>
    </Card>
  );
};


export default ProjectCard;