import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

const NavContainer = styled.nav`
  width: 100%;
  background-color: var(--white);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-top: 1px solid var(--grey100);
  position: fixed;
  bottom: 0;
  max-width: 36rem;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  width: 1fr;
  padding: 8px 0;
  color: var(--grey200);

  & svg {
    width: 24px;
    margin-bottom: 3px;
  }
`;

const BottomTabs = () => {
  const router = useRouter();
  return (
    <NavContainer>
      <Link href={"/"}>
        <ItemWrapper
          style={{
            color:
              router.pathname === "/" ? "var(--grey500)" : "var(--grey200)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          홈
        </ItemWrapper>
      </Link>
      <Link href={"/community"}>
        <ItemWrapper
          style={{
            color:
              router.pathname === "/community"
                ? "var(--grey500)"
                : "var(--grey200)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
              clipRule="evenodd"
            />
            <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
          </svg>
          커뮤니티
        </ItemWrapper>
      </Link>
      <Link href={"/benefit"}>
        <ItemWrapper
          style={{
            color:
              router.pathname === "/benefit"
                ? "var(--grey500)"
                : "var(--grey200)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
              clipRule="evenodd"
            />
            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
          </svg>
          혜택
        </ItemWrapper>
      </Link>
      <Link href={"/profile"}>
        <ItemWrapper
          style={{
            color:
              router.pathname === "/profile"
                ? "var(--grey500)"
                : "var(--grey200)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          프로필
        </ItemWrapper>
      </Link>
    </NavContainer>
  );
};

export default BottomTabs;
