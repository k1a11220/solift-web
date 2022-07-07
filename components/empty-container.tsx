import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import styled from "@emotion/styled";
import Image from "next/image";

interface EmptyContainerProps {
  description: ReactJSXElement;
  image: string;
}

const Container = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  & p {
    font-size: 18px;
    font-weight: 500;
  }
`;

const EmptyContainer = ({ description, image }: EmptyContainerProps) => {
  return (
    <Container>
      <Image src={image} alt="scope" width={56} height={56} />
      {description}
    </Container>
  );
};

export default EmptyContainer;
