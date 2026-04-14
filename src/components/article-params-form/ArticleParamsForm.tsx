import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
interface ArticleParamsFormProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const { isOpen, setIsOpen } = props;

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			/>
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form className={styles.form}>
					<Text size={31} uppercase weight={800}>
						Задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						selected={defaultArticleState.fontFamilyOption}
						title='шрифт'
					/>
					<RadioGroup
						name='size'
						options={fontSizeOptions}
						selected={defaultArticleState.fontSizeOption}
						title='рАЗМЕР шрифта'
					/>
					<Select
						options={fontColors}
						selected={defaultArticleState.fontColor}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={defaultArticleState.backgroundColor}
						title='Цвет фона'
					/>
					<Select
						options={contentWidthArr}
						selected={defaultArticleState.contentWidth}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
