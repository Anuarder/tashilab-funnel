import type React from 'react';
import { AppToolbar } from '~entities/toolbar';

interface BaseLayoutProps {
  children: React.ReactNode;
  withProgressBar?: boolean;
  progress?: number;
  isCanGoBack?: boolean;
  events?: {
    onGoBack?: () => void;
  };
}

export function BaseLayout(props: BaseLayoutProps) {
  return (
    <main className="text-purple-text-primary vh-full overflow-hidden grid grid-rows-[auto_1fr_auto] max-w-[500px] mx-auto">
      <header>
        <AppToolbar
          withProgressBar={props?.withProgressBar}
          isCanGoBack={props?.isCanGoBack}
          progress={props.progress}
          events={props?.events}
        />
      </header>

      {props.children}
    </main>
  );
}
