import styled from "@emotion/styled";
import { useState } from "react";

const Tabs = styled.div``;

const TabListWrapper = styled.div`
  background-color: var(--white);
  height: 50px;
  border-bottom: 1px solid var(--grey100);
  position: sticky;
  top: 0;
`;

const TabList = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
`;

const Item = styled.div`
  font-size: 17px;
  min-width: fit-content;
  margin-top: 14px;
  color: var(--grey200);
  height: 100%;
  padding-bottom: 13px;

  &:first-of-type {
    margin-left: 22px;
  }
`;

const TabPanels = styled.div`
  margin: 22px;
`;

const TabIndicator = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Tabs aria-label="History of Ancient Rome">
      <TabListWrapper>
        <TabList>
          <Item
            style={{
              color: activeTab === 0 ? "var(--grey500)" : "var(--grey200)",
              borderBottom: activeTab === 0 ? "2px solid var(--grey500)" : "",
              fontWeight: activeTab === 0 ? "500" : "400",
            }}
            onClick={() => setActiveTab(0)}
            key="FoR"
          >
            인기혜택
          </Item>
          <Item
            style={{
              color: activeTab === 1 ? "var(--grey500)" : "var(--grey200)",
              borderBottom: activeTab === 1 ? "2px solid var(--grey500)" : "",
              fontWeight: activeTab === 1 ? "500" : "400",
            }}
            onClick={() => setActiveTab(1)}
            key="MaR"
          >
            문화
          </Item>
          <Item
            style={{
              color: activeTab === 2 ? "var(--grey500)" : "var(--grey200)",
              borderBottom: activeTab === 2 ? "2px solid var(--grey500)" : "",
              fontWeight: activeTab === 2 ? "500" : "400",
            }}
            onClick={() => setActiveTab(2)}
            key="Emp"
          >
            여행
          </Item>
        </TabList>
      </TabListWrapper>

      <TabPanels>
        {activeTab === 0 && (
          <div key="FoR">Arma virumque cano, Troiae qui primus ab oris.</div>
        )}
        {activeTab === 1 && (
          <div key="MaR">Senatus Populusque Romanusenatus</div>
        )}
        {activeTab === 2 && <div key="Emp">Alea jacta est.</div>}
      </TabPanels>
    </Tabs>
  );
};

export default TabIndicator;
