import type { FC } from 'react';
import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';
import ClockIcon from '@untitled-ui/icons-react/build/esm/Clock';
import HeartIcon from '@untitled-ui/icons-react/build/esm/Heart';
import Share07Icon from '@untitled-ui/icons-react/build/esm/Share07';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import type { Comment } from 'src/types/social';

import { SocialComment } from './social-comment';
import { SocialCommentAdd } from './social-comment-add';

interface SocialPostCardProps {
	authorAvatar: string;
	authorName: string;
	comments: Comment[];
	createdAt: number;
	isLiked: boolean;
	likes: number;
	media?: string;
	message: string;
}

export const SocialPostCard: FC<SocialPostCardProps> = (props) => {
	const {
		authorAvatar,
		authorName,
		comments,
		createdAt,
		isLiked: isLikedProp,
		likes: likesProp,
		media,
		message,
		...other
	} = props;
	const [isLiked, setIsLiked] = useState<boolean>(isLikedProp);
	const [likes, setLikes] = useState<number>(likesProp);

	const handleLike = useCallback((): void => {
		setIsLiked(true);
		setLikes((prevLikes) => prevLikes + 1);
	}, []);

	const handleUnlike = useCallback((): void => {
		setIsLiked(false);
		setLikes((prevLikes) => prevLikes - 1);
	}, []);

	return (
		<Card {...other}>
			<CardHeader
				avatar={
					<Avatar
						component="a"
						href="#"
						src={authorAvatar}
					/>
				}
				disableTypography
				subheader={
					<Stack
						alignItems="center"
						direction="row"
						spacing={1}
					>
						<SvgIcon color="action">
							<ClockIcon />
						</SvgIcon>
						<Typography
							color="text.secondary"
							variant="caption"
						>
							{formatDistanceToNowStrict(createdAt)} ago
						</Typography>
					</Stack>
				}
				title={
					<Stack
						alignItems="center"
						direction="row"
						spacing={0.5}
						sx={{ mb: 1 }}
					>
						<Link
							color="text.primary"
							href="#"
							variant="subtitle2"
						>
							{authorName}
						</Link>
						<Typography variant="body2">updated her status</Typography>
					</Stack>
				}
			/>
			<Box
				sx={{
					pb: 2,
					px: 3,
				}}
			>
				<Typography variant="body1">{message}</Typography>
				{media && (
					<Box sx={{ mt: 3 }}>
						<CardActionArea>
							<CardMedia
								image={media}
								sx={{
									backgroundPosition: 'top',
									height: 500,
								}}
							/>
						</CardActionArea>
					</Box>
				)}
				<Stack
					alignItems="center"
					direction="row"
					justifyContent="space-between"
					spacing={2}
					sx={{ mt: 2 }}
				>
					<div>
						<Stack
							alignItems="center"
							direction="row"
						>
							{isLiked ? (
								<Tooltip title="Unlike">
									<IconButton onClick={handleUnlike}>
										<SvgIcon
											sx={{
												color: 'error.main',
												'& path': {
													fill: (theme) => theme.palette.error.main,
													fillOpacity: 1,
												},
											}}
										>
											<HeartIcon />
										</SvgIcon>
									</IconButton>
								</Tooltip>
							) : (
								<Tooltip title="Like">
									<IconButton onClick={handleLike}>
										<SvgIcon>
											<HeartIcon />
										</SvgIcon>
									</IconButton>
								</Tooltip>
							)}
							<Typography
								color="text.secondary"
								variant="subtitle2"
							>
								{likes}
							</Typography>
						</Stack>
					</div>
					<div>
						<IconButton>
							<SvgIcon>
								<Share07Icon />
							</SvgIcon>
						</IconButton>
					</div>
				</Stack>
				<Divider sx={{ my: 3 }} />
				<Stack spacing={3}>
					{comments.map((comment) => (
						<SocialComment
							authorAvatar={comment.author.avatar}
							authorName={comment.author.name}
							createdAt={comment.createdAt}
							key={comment.id}
							message={comment.message}
						/>
					))}
				</Stack>
				<Divider sx={{ my: 3 }} />
				<SocialCommentAdd />
			</Box>
		</Card>
	);
};

SocialPostCard.propTypes = {
	authorAvatar: PropTypes.string.isRequired,
	authorName: PropTypes.string.isRequired,
	comments: PropTypes.array.isRequired,
	createdAt: PropTypes.number.isRequired,
	isLiked: PropTypes.bool.isRequired,
	likes: PropTypes.number.isRequired,
	media: PropTypes.string,
	message: PropTypes.string.isRequired,
};
