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
import { useRef, useState } from 'react';
import { useOutsideClickForm } from './hooks/useOutsideClickForm';
interface ArticleParamsFormProps {
	setArticleStyle: (articleStyle: ArticleStateType) => void;
}

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const { setArticleStyle } = props;
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [formState, setFormState] = useState(defaultArticleState);
	const formRef = useRef<HTMLElement>(null);
	const buttonRef = useRef<HTMLDivElement>(null);
	useOutsideClickForm({
		isFormOpen,
		formRef,
		buttonRef,
		onFormClose: () => setIsFormOpen(false),
	});

	return (
		<>
			<div ref={buttonRef}>
				<ArrowButton
					isOpen={isFormOpen}
					onClick={() => {
						setIsFormOpen(!isFormOpen);
					}}
				/>
			</div>
			<aside
				ref={formRef}
				className={clsx(styles.container, {
					[styles.container_open]: isFormOpen,
				})}>
				<form
					className={styles.form}
					onSubmit={(e) => {
						e.preventDefault();
						setArticleStyle(formState);
					}}
					onReset={() => {
						setArticleStyle(defaultArticleState);
						setFormState(defaultArticleState);
					}}>
					<Text size={31} uppercase weight={800}>
						Задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						selected={formState.fontFamilyOption}
						title='шрифт'
						onChange={(option) => {
							setFormState((prev) => ({
								...prev,
								fontFamilyOption: option,
							}));
						}}
					/>
					<RadioGroup
						name='size'
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						title='размер шрифта'
						onChange={(option) => {
							setFormState((prev) => ({
								...prev,
								fontSizeOption: option,
							}));
						}}
					/>
					<Select
						options={fontColors}
						selected={formState.fontColor}
						title='Цвет шрифта'
						onChange={(option) => {
							setFormState((prev) => ({
								...prev,
								fontColor: option,
							}));
						}}
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={formState.backgroundColor}
						title='Цвет фона'
						onChange={(option) => {
							setFormState((prev) => ({
								...prev,
								backgroundColor: option,
							}));
						}}
					/>
					<Select
						options={contentWidthArr}
						selected={formState.contentWidth}
						title='Ширина контента'
						onChange={(option) => {
							setFormState((prev) => ({
								...prev,
								contentWidth: option,
							}));
						}}
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
