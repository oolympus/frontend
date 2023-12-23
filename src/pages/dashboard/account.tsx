import type { ChangeEvent } from 'react';
import { useCallback, useState } from 'react';
import { subDays, subHours, subMinutes } from 'date-fns';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { AccountGeneralSettings } from 'src/sections/dashboard/account/account-general-settings';
import { AccountSecuritySettings } from 'src/sections/dashboard/account/account-security-settings';
import { getCustomers } from 'src/api/customers/data';
import { loans } from 'src/api/loans/data';

const now = new Date();

const tabs = [
	{ label: 'General', value: 'general' },
	{ label: 'Security', value: 'security' },
];

const Page = () => {
	const user = getCustomers(1)[0];
	const [currentTab, setCurrentTab] = useState<string>('general');

	usePageView();

	const handleTabsChange = useCallback((event: ChangeEvent<any>, value: string): void => {
		setCurrentTab(value);
	}, []);

	return (
		<>
			<Seo title="Dashboard: Account" />
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 8,
				}}
			>
				<Container maxWidth="xl">
					<Stack
						spacing={3}
						sx={{ mb: 3 }}
					>
						<Typography variant="h4">Account</Typography>
						<div>
							<Tabs
								indicatorColor="primary"
								onChange={handleTabsChange}
								scrollButtons="auto"
								textColor="primary"
								value={currentTab}
								variant="scrollable"
							>
								{tabs.map((tab) => (
									<Tab
										key={tab.value}
										label={tab.label}
										value={tab.value}
									/>
								))}
							</Tabs>
							<Divider />
						</div>
					</Stack>
					{currentTab === 'general' && (
						<>
							<AccountGeneralSettings
								user={user}
								loans={loans}
							/>
						</>
					)}
					{currentTab === 'security' && (
						<AccountSecuritySettings
							loginEvents={[
								{
									id: '1bd6d44321cb78fd915462fa',
									createdAt: subDays(subHours(subMinutes(now, 5), 7), 1).getTime(),
									ip: '95.130.17.84',
									type: 'Credential login',
									userAgent: 'Chrome, Mac OS 10.15.7',
								},
								{
									id: 'bde169c2fe9adea5d4598ea9',
									createdAt: subDays(subHours(subMinutes(now, 25), 9), 1).getTime(),
									ip: '95.130.17.84',
									type: 'Credential login',
									userAgent: 'Chrome, Mac OS 10.15.7',
								},
							]}
						/>
					)}
				</Container>
			</Box>
		</>
	);
};

export default Page;
