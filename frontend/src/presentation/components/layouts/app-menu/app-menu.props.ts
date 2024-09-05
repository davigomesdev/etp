//react improts
import React from 'react';

export interface AppMenuProps {
	title: string;
	icon: React.JSX.Element;
	children?: React.JSX.Element;
	onClick?: () => void;
}
