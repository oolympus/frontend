import type { FC } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export const Colors2: FC = () => {
	const theme = useTheme();

	const colors = [
		{
			name: 'Success',
			code: theme.palette.success.main,
		},
		{
			name: 'Error',
			code: theme.palette.error.main,
		},
		{
			name: 'Warning',
			code: theme.palette.warning.main,
		},
		{
			name: 'Info',
			code: theme.palette.info.main,
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
