import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { useEffect, useState } from 'react';
interface ArticleParamsFormProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	style: ArticleStateType;
	setStyle: (style: ArticleStateType) => void;
}

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const { isOpen, setIsOpen, style, setStyle } = props;
	const [fontFamilyOption, setFontFamilyOption] = useState(
		style.fontFamilyOption
	);
	const [fontSizeOption, setFontSizeOption] = useState(style.fontSizeOption);
	const [fontColor, setFontColor] = useState(style.fontColor);
	const [backgroundColor, setBackgroundColor] = useState(style.backgroundColor);
	const [contentWidth, setContentWidth] = useState(style.contentWidth);
	useEffect(() => {
		setFontFamilyOption(style.fontFamilyOption);
		setFontSizeOption(style.fontSizeOption);
		setFontColor(style.fontColor);
		setBackgroundColor(style.backgroundColor);
		setContentWidth(style.contentWidth);
	}, [style]);

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
				<form
					className={styles.form}
					onSubmit={(e) => {
						e.preventDefault();
						setStyle({
							fontFamilyOption,
							fontColor,
							backgroundColor,
							contentWidth,
							fontSizeOption,
						});
					}}>
					<Text size={31} uppercase weight={800}>
						Задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						selected={fontFamilyOption}
						title='шрифт'
						onChange={setFontFamilyOption}
					/>
					<RadioGroup
						name='size'
						options={fontSizeOptions}
						selected={fontSizeOption}
						title='рАЗМЕР шрифта'
						onChange={setFontSizeOption}
					/>
					<Select
						options={fontColors}
						selected={fontColor}
						title='Цвет шрифта'
						onChange={setFontColor}
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={backgroundColor}
						title='Цвет фона'
						onChange={setBackgroundColor}
					/>
					<Select
						options={contentWidthArr}
						selected={contentWidth}
						title='Ширина контента'
						onChange={setContentWidth}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={() => {
								setStyle(defaultArticleState);
							}}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
