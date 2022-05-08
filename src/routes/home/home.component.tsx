import { useState, MouseEvent } from 'react';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import {
	Greeting,
	GreetingTitle,
	BackgroundWrapper,
	BackgroundImage,
	HomeContent,
	GreetingSubtitle,
	BackgroundOverlay,
} from './home.styles';
import Content from '../../components/content/content.component';
import Spinner from '../../components/spinner/spinner.component';
import Card, { CardModal, CardProps } from '../../components/card/card.component';

import { useParallax } from 'react-scroll-parallax';

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [modal, setModal] = useState<any>(undefined);

	const { ref } = useParallax<HTMLImageElement>({ speed: -100 });

	const handleModalClose = (e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
		setModal(undefined);
	};

	const handleCardOnClick = (e: MouseEvent<HTMLImageElement>, card: CardProps) => {
		e.stopPropagation();
		console.log(1);
		setModal(<CardModal handleModalClose={handleModalClose} {...card} />);
	};

	return (
		<div style={{ width: '100%' }}>
			<BackgroundWrapper ref={ref}>
				<BackgroundImage onLoad={() => setLoading(false)} src='./assets/background.png' />
				<BackgroundOverlay></BackgroundOverlay>
			</BackgroundWrapper>
			<Greeting>
				<GreetingTitle>Đội Tâm lý học Your Mate</GreetingTitle>
				<GreetingSubtitle>Trường Trung học Thực hành - Đại học Sư Phạm</GreetingSubtitle>
			</Greeting>
			<HomeContent>
				<Content title='Đôi lời mở đầu' bg='var(--color-secondary)'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, suscipit corrupti
					distinctio itaque neque aliquid doloribus quidem modi esse mollitia dolores ut animi optio
					cupiditate sequi, quaerat non provident rerum!
				</Content>
				<Content title='Về Chúng Mình'>
					<div style={{ display: 'flex', flexFlow: 'column' }}>
						<div style={{ display: 'flex', gap: '10px' }}>
							<Card
								alt='placeholder'
								src={'https://picsum.photos/200/500'}
								title='Placeholder Title 1'
								body='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, suscipit
							corrupti distinctio itaque neque aliquid doloribus quidem modi esse mollitia dolores
							ut animi optio cupiditate sequi, quaerat non provident rerum!'
								handleCardOnClick={handleCardOnClick}
							/>
							<Card
								alt='placeholder'
								src={'https://picsum.photos/200/502'}
								title='Placeholder Title 2'
								body='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, suscipit
							corrupti distinctio itaque neque aliquid doloribus quidem modi esse mollitia dolores
							ut animi optio cupiditate sequi, quaerat non provident rerum!'
								handleCardOnClick={handleCardOnClick}
							/>
							<Card
								alt='placeholder'
								src={'https://picsum.photos/200/501'}
								title='Placeholder Title 3'
								body='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, suscipit
							corrupti distinctio itaque neque aliquid doloribus quidem modi esse mollitia dolores
							ut animi optio cupiditate sequi, quaerat non provident rerum!'
								handleCardOnClick={handleCardOnClick}
							/>
						</div>
						<div>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, suscipit
							corrupti distinctio itaque neque aliquid doloribus quidem modi esse mollitia dolores
							ut animi optio cupiditate sequi, quaerat non provident rerum!
						</div>
					</div>
				</Content>
				<Content title='Những dự án &amp; thành tựu' bg='var(--color-secondary)'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, suscipit corrupti
					distinctio itaque neque aliquid doloribus quidem modi esse mollitia dolores ut animi optio
					cupiditate sequi, quaerat non provident rerum!
				</Content>
				<Content title='Lời kết thúc'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, suscipit corrupti
					distinctio itaque neque aliquid doloribus quidem modi esse mollitia dolores ut animi optio
					cupiditate sequi, quaerat non provident rerum!
				</Content>
			</HomeContent>
			{loading && <Spinner></Spinner>}
			{modal && modal}
		</div>
	);
};

//eslint-disable-next-line
{
	/* <Parallax pages={3}>
				<ParallaxLayer offset={0} speed={0.15}>
					<BackgroundWrapper
						onLoad={() => setLoading(false)}
						src='./assets/background.png'
					></BackgroundWrapper>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={1}>
					<Greeting>
						<GreetingTitle>Đội Tâm lý học Your Mate</GreetingTitle>
						<GreetingSubtitle>Trường Trung học Thực hành - Đại học Sư Phạm</GreetingSubtitle>
					</Greeting>
					<HomeContent>
						<Content title='Đôi lời mở đầu' bg='var(--color-secondary)'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, suscipit
							corrupti distinctio itaque neque aliquid doloribus quidem modi esse mollitia dolores
							ut animi optio cupiditate sequi, quaerat non provident rerum!
						</Content>
						<Content title='Về Chúng Mình'>
							<div style={{ display: 'flex', flexFlow: 'column' }}>
								<div style={{ display: 'flex', gap: '10px' }}>
									<Card
										alt='placeholder'
										src={'https://picsum.photos/200/500'}
										title='Placeholder Title 1'
										body='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, suscipit
							corrupti distinctio itaque neque aliquid doloribus quidem modi esse mollitia dolores
							ut animi optio cupiditate sequi, quaerat non provident rerum!'
										handleCardOnClick={handleCardOnClick}
									/>
									<Card
										alt='placeholder'
										src={'https://picsum.photos/200/502'}
										title='Placeholder Title 2'
										body='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, suscipit
							corrupti distinctio itaque neque aliquid doloribus quidem modi esse mollitia dolores
							ut animi optio cupiditate sequi, quaerat non provident rerum!'
										handleCardOnClick={handleCardOnClick}
									/>
									<Card
										alt='placeholder'
										src={'https://picsum.photos/200/501'}
										title='Placeholder Title 3'
										body='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, suscipit
							corrupti distinctio itaque neque aliquid doloribus quidem modi esse mollitia dolores
							ut animi optio cupiditate sequi, quaerat non provident rerum!'
										handleCardOnClick={handleCardOnClick}
									/>
								</div>
								<div>
									{' '}
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, suscipit
									corrupti distinctio itaque neque aliquid doloribus quidem modi esse mollitia
									dolores ut animi optio cupiditate sequi, quaerat non provident rerum!
								</div>
							</div>
						</Content>
						<Content title='Những dự án &amp; thành tựu' bg='var(--color-secondary)'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, suscipit
							corrupti distinctio itaque neque aliquid doloribus quidem modi esse mollitia dolores
							ut animi optio cupiditate sequi, quaerat non provident rerum!
						</Content>
						<Content title='Lời kết thúc'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, suscipit
							corrupti distinctio itaque neque aliquid doloribus quidem modi esse mollitia dolores
							ut animi optio cupiditate sequi, quaerat non provident rerum!
						</Content>
					</HomeContent>
				</ParallaxLayer>
			</Parallax> */
}

export default Home;
