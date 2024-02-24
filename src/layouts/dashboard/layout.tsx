import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

import { useSettings } from 'src/hooks/use-settings';

import { useSections } from './config';
import { HorizontalLayout } from './horizontal-layout';
import { VerticalLayout } from './vertical-layout';
import { withAuth } from 'src/hocs/withAuth';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = withAuth((props) => {
  const settings = useSettings();
  const sections = useSections();

  if (settings.layout === 'horizontal') {
    return (
      <HorizontalLayout
        sections={sections}
        navColor={settings.navColor}
        {...props}
      />
    );
  }

  return (
    <VerticalLayout
      sections={sections}
      navColor={settings.navColor}
      {...props}
    />
  );
});

Layout.propTypes = {
  children: PropTypes.node,
};
