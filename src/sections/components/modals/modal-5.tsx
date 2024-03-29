import type { FC } from 'react';
import { subDays, subHours } from 'date-fns';
import CreditCard02Icon from '@untitled-ui/icons-react/build/esm/CreditCard02';
import MessageChatSquareIcon from '@untitled-ui/icons-react/build/esm/MessageChatSquare';
import ShoppingCart03Icon from '@untitled-ui/icons-react/build/esm/ShoppingCart03';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

const now = new Date();

type NotificationType = 'item_shipped' | 'new_message' | 'loan_placed';

interface Notification {
	id: string;
	createdAt: number;
	description: string;
	title: string;
	type: NotificationType;
}

const notifications: Notification[] = [
	{
		id: '5e8883f1b51cc1956a5a1ec0',
		createdAt: subHours(now, 2).getTime(),
		description: 'Dummy text',
		title: 'Your loan is placed',
		type: 'loan_placed',
	},
	{
		id: '5e8883f7ed1486d665d8be1e',
		createdAt: subDays(now, 1).getTime(),
		description: 'You have 32 unread messages',
		title: 'New message received',
		type: 'new_message',
	},
	{
		id: '5e8883fca0e8612044248ecf',
		createdAt: subDays(now, 3).getTime(),
		description: 'Dummy text',
		title: 'Your item is shipped',
		type: 'item_shipped',
	},
	{
		id: '5e88840187f6b09b431bae68',
		createdAt: subDays(now, 7).getTime(),
		description: 'You have 32 unread messages',
		title: 'New message received',
		type: 'new_message',
	},
];

const iconsMap: Record<NotificationType, JSX.Element> = {
	item_shipped: <ShoppingCart03Icon />,
	new_message: <MessageChatSquareIcon />,
	loan_placed: <CreditCard02Icon />,
};

export const Modal5: FC = () => (
	<Box
		sx={{
			backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100'),
			p: 3,
		}}
	>
		<Paper
			elevation={12}
			sx={{
				maxWidth: 320,
				mx: 'auto',
			}}
		>
			<Box sx={{ p: 2 }}>
				<Typography variant="h6">Notifications</Typography>
			</Box>
			<List disablePadding>
				{notifications.map((notification) => {
					const icon = iconsMap[notification.type];

					return (
						<ListItem
							divider
							key={notification.id}
						>
							<ListItemAvatar>
								<Avatar
									sx={{
										backgroundColor: 'primary.main',
										color: 'primary.contrastText',
									}}
								>
									<SvgIcon>{icon}</SvgIcon>
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary={
									<Link
										color="text.primary"
										sx={{
											cursor: 'pointer',
										}}
										underline="none"
										variant="subtitle2"
									>
										{notification.title}
									</Link>
								}
								secondary={notification.description}
							/>
						</ListItem>
					);
				})}
			</List>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					p: 1,
				}}
			>
				<Button size="small">Mark all as read</Button>
			</Box>
		</Paper>
	</Box>
);
