import { ReactElement, ReactNode, SyntheticEvent, useState } from 'react';
import Tabs, { TabsProps } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Styles } from '@shared/model';

const BASIC_TAB = 'basic-tab';
const BASIC_TAB_PANEL = 'basic-tab-panel';

const getTabPanelId = (index: number) => `${BASIC_TAB_PANEL}-${index}`;
const getTabId = (index: number) => `${BASIC_TAB}-${index}`;

// Panel
export interface TabPanelProps {
  index: number;
  isActive: boolean;
  children?: ReactNode;
}

const CustomTabPanel = ({ index, isActive, children }: TabPanelProps) => {
  return (
    <Box
      role="tabpanel"
      hidden={!isActive}
      id={getTabPanelId(index)}
      aria-labelledby={getTabId(index)}
    >
      {isActive && <Box>{children}</Box>}
    </Box>
  );
};

// Tabs Layout
interface BasicTabsLayoutProps {
  tabs: ReactElement;
  panels: ReactElement[];
  wrapperSx?: Styles;
}

const BasicTabsLayout = ({
  tabs,
  panels,
  wrapperSx = {},
}: BasicTabsLayoutProps) => {
  return (
    <Stack sx={{ width: '100%', ...wrapperSx }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>{tabs}</Box>
      {panels}
    </Stack>
  );
};

// Tabs
export interface TabItem {
  id: number;
  label: string;
  content: ReactNode;
  icon?: ReactElement;
}

export interface TabsConfig {
  tabs: TabItem[];
}

export interface BasicTabsProps extends TabsConfig, TabsProps {
  tabsAriaLabel: string;
  defaultActiveIndex?: number;
  wrapperSx?: Styles;
}

const BasicTabs = ({
  tabs,
  tabsAriaLabel,
  wrapperSx = {},
  defaultActiveIndex = 0,
  ...tabsMUIProps
}: BasicTabsProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  if (!tabs.length) return null;

  const handleChange = (_: SyntheticEvent, newIndex: number) => {
    setActiveIndex(newIndex);
  };

  return (
    <BasicTabsLayout
      wrapperSx={wrapperSx}
      tabs={
        <Tabs
          value={activeIndex}
          onChange={handleChange}
          aria-label={tabsAriaLabel}
          {...tabsMUIProps}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={tab.id}
              label={tab.label}
              icon={tab.icon}
              id={getTabId(index)}
              aria-controls={getTabPanelId(index)}
            />
          ))}
        </Tabs>
      }
      panels={tabs.map((tab, index) => {
        const isActive = activeIndex === index;
        return (
          <CustomTabPanel key={tab.id} isActive={isActive} index={index}>
            {tab.content}
          </CustomTabPanel>
        );
      })}
    />
  );
};

export default BasicTabs;
