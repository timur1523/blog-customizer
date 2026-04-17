import clsx from 'clsx';
import { CSSProperties, useState } from 'react';
import { ArticleParamsForm } from './components/article-params-form';
import { Article } from './components/article';
import { defaultArticleState } from './constants/articleProps';
import './styles/index.scss';
import styles from './styles/index.module.scss';

export const App = () => {
	const [articleStyle, setArticleStyle] = useState(defaultArticleState);
	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleStyle.fontFamilyOption.value,
					'--font-size': articleStyle.fontSizeOption.value,
					'--font-color': articleStyle.fontColor.value,
					'--container-width': articleStyle.contentWidth.value,
					'--bg-color': articleStyle.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setArticleStyle={setArticleStyle} />
			<Article />
		</main>
	);
};
