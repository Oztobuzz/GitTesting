import { FC, MouseEvent } from 'react';

import { Card as MUICard } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CloseIcon from '@mui/icons-material/Close';

import { CardModalWrapper, CardContentWrapper } from './card.styles';

export interface CardProps {
	alt?: string;
	src?: string;
	title?: string;
	body?: string;
	sx?: StyleSheet;
}

export interface CardPropsWithClickHandler extends CardProps {
	handleCardOnClick: (e: MouseEvent<HTMLImageElement>, card: CardProps) => void;
}

export interface CardPropsWithCloseHandler extends CardProps {
	handleModalClose: (e: MouseEvent<HTMLDivElement>) => void;
}

const Card: FC<CardPropsWithClickHandler> = (props) => {
	const { alt, src, title, body, handleCardOnClick } = props;

	return (
		<>
			<MUICard
				sx={{ maxWidth: '300px', minWidth: '200px', maxHeight: '500px', borderRadius: '10px' }}
			>
				<CardMedia
					onClick={(e: MouseEvent<HTMLImageElement>) =>
						handleCardOnClick(e, { alt, src, title, body })
					}
					component='img'
					image={src}
					alt={alt || 'placeholder'}
					height={'70%'}
					sx={{ cursor: 'pointer' }}
				/>
				<CardHeader title={title} />
				<CardContent
					sx={{
						overflow: 'hidden',
						maxHeight: '80px',
						display: '-webkit-box',
						'-webkit-line-clamp': 3,
						'-webkit-box-orient': 'vertical',
					}}
				>
					{body}
				</CardContent>
			</MUICard>
		</>
	);
};

export const CardModal: FC<CardPropsWithCloseHandler> = ({
	alt,
	src,
	title,
	body,
	handleModalClose,
}) => {
	return (
		<CardModalWrapper onClick={handleModalClose}>
			<MUICard
				sx={{
					width: 'clamp(90vh, 500px, 90vw)',
					height: 'clamp(60vh, 500px, 60vw)',
					margin: 'auto',
					borderRadius: '20px',
					position: 'absolute',
					display: 'flex',
					flexFlow: 'row',
				}}
			>
				<CardMedia
					component='img'
					image={src}
					alt={alt || 'placeholder'}
					height={'100%'}
					sx={{
						width: '40%',
					}}
				/>
				<CardContentWrapper>
					<CardHeader title={title} />
					<CardContent
						sx={{
							padding: '10px',
						}}
					>
						{body}
					</CardContent>
					<CloseIcon
						sx={{
							color: 'white',
							position: 'absolute',
							top: '15px',
							right: '15px',
							':hover': {
								cursor: 'pointer',
								color: 'var(--color-primary)',
							},
						}}
					/>
				</CardContentWrapper>
			</MUICard>
		</CardModalWrapper>
	);
};

export default Card;
