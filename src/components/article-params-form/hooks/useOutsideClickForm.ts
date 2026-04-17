import { RefObject, useEffect } from 'react';
interface useOutsideClickFormProps {
	isFormOpen: boolean;
	formRef: RefObject<HTMLElement>;
	buttonRef: RefObject<HTMLElement>;
	onFormClose: () => void;
}

export const useOutsideClickForm = ({
	isFormOpen,
	formRef,
	buttonRef,
	onFormClose,
}: useOutsideClickFormProps) => {
	useEffect(() => {
		const handleClickOutsideForm = (e: MouseEvent) => {
			if (
				isFormOpen &&
				formRef.current &&
				!formRef.current.contains(e.target as Node) &&
				buttonRef.current &&
				!buttonRef.current.contains(e.target as Node)
			) {
				onFormClose();
			}
		};
		if (isFormOpen) {
			document.addEventListener('mousedown', handleClickOutsideForm);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutsideForm);
		};
	}, [isFormOpen, formRef, buttonRef, onFormClose]);
};
