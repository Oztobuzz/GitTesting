import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { ContentWrapper, ContentTitle, ContentBody } from './content.styles';

interface ContentProps {
	children?: React.ReactNode;
	title?: string;
	bg?: string;
}

const Content: FC<ContentProps> = ({ children, title, bg }) => {
	const { inView, ref } = useInView({ triggerOnce: true });

	return (
		<ContentWrapper ref={ref} bg={bg}>
			<div className={inView ? 'load' : ''}>
				<ContentTitle>{title}</ContentTitle>
				<ContentBody>{children}</ContentBody>
			</div>
		</ContentWrapper>
	);
};

export default Content;
