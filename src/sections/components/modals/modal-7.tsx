import type { FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export const Modal7: FC = () => (
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
			<Box
				sx={{
					pt: 3,
					px: 3,
				}}
			>
				<Typography variant="h6">Settings</Typography>
			</Box>
			<Stack
				sx={{ p: 3 }}
				spacing={3}
			>
				<TextField
					fullWidth
					label="Theme"
					select
					SelectProps={{ native: true }}
				>
					{['Light', 'Dark', 'Nature'].map((theme) => (
						<option
							key={theme}
							value={theme}
						>
							{theme}
						</option>
					))}
				</TextField>
				<Stack spacing={1}>
					<div>
						<FormControlLabel
							control={<Switch />}
							label="RTL"
						/>
					</div>
					<div>
						<FormControlLabel
							control={<Switch />}
							label="Responsive font sizes"
						/>
					</div>
					<div>
						<FormControlLabel
							control={<Switch />}
							label="Compact"
						/>
					</div>
					<div>
						<FormControlLabel
							control={<Switch />}
							label="Rounded Corners"
						/>
					</div>
				</Stack>
			</Stack>
			<Box
				sx={{
					pb: 3,
					px: 3,
				}}
			>
				<Button
					fullWidth
					variant="contained"
				>
					Save Settings
				</Button>
			</Box>
		</Paper>
	</Box>
);
