import type { FC } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export const Colors1: FC = () => {
	const theme = useTheme();

	const colors = [
		{
			name: 'Primary',
			code: theme.palette.primary.main,
		},
		{
			name: 'Text Primary',
			code: theme.palette.text.primary,
		},
		{
			name: 'Text Secondary',
			code: theme.palette.text.secondary,
		},
		{
			name: 'Divider',
			code: theme.palette.divider,
		},
	];

	return (
		<Box sx={{ p: 3 }}>
			<List
				disablePadding
				sx={{
					'& li:not(:last-child)': {
						pb: '33px',
						pt: 0,
					},
					'& li:last-child': {
						py: 0,
					},
				}}
			>
				{colors.map((color) => (
					<ListItem
						disableGutters
						key={color.code}
					>
						<ListItemAvatar>
							<Box
								sx={{
									backgroundColor: color.code,
									borderRadius: '10px',
									height: 46,
									mr: 2,
									width: 46,
								}}
							/>
						</ListItemAvatar>
						<ListItemText
							primary={<Typography variant="subtitle2">{color.name}</Typography>}
							secondary={
								<Typography
									color="text.secondary"
									variant="caption"
								>
									{color.code}
								</Typography>
							}
						/>
					</ListItem>
				))}
			</List>
		</Box>
	);
};
