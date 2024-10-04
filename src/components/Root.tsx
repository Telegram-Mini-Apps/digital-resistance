import { App } from './App';
import { DataLoader } from './DataLoader';
import { ConfigProvider } from '../providers/ConfigProvider/ConfigProvider';
import { SWRProvider } from '../providers/SWRProvider';

/**
 * The root application component. It creates all required providers for it.
 */
export function Root(props: {
  /**
   * API base URL used to send requests.
   */
  apiBaseUrl: string;
  /**
   * Base URL used to retrieve translations.
   */
  localesBaseUrl: string;
}) {
  return (
    <ConfigProvider {...props}>
      <SWRProvider>
        <DataLoader>
          <App/>
        </DataLoader>
      </SWRProvider>
    </ConfigProvider>
  );
}
