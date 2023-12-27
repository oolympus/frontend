import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import SvgIcon from '@mui/material/SvgIcon';

import HomeSmileIcon from 'src/icons/untitled-ui/duocolor/home-smile';
import ShoppingBag03Icon from 'src/icons/untitled-ui/duocolor/shopping-bag-03';
import ShoppingCart01Icon from 'src/icons/untitled-ui/duocolor/shopping-cart-01';
import Users03Icon from 'src/icons/untitled-ui/duocolor/users-03';
import { tokens } from 'src/locales/tokens';
import { paths } from 'src/paths';

export interface Item {
	disabled?: boolean;
	external?: boolean;
	icon?: ReactNode;
	items?: Item[];
	label?: ReactNode;
	path?: string;
	title: string;
}

export interface Section {
	items: Item[];
	subheader?: string;
}

export const useSections = () => {
	const { t } = useTranslation();

	return useMemo(() => {
		return [
			{
				items: [
					{
						title: t(tokens.nav.overview),
						path: paths.dashboard.index,
						icon: (
							<SvgIcon fontSize="small">
								<HomeSmileIcon />
							</SvgIcon>
						),
					},
					{
						title: t(tokens.nav.account),
						path: paths.dashboard.account,
						icon: (
							<SvgIcon fontSize="small">
								<HomeSmileIcon />
							</SvgIcon>
						),
					},
				],
			},
			{
				subheader: t(tokens.nav.concepts),
				items: [
					{
						title: t(tokens.nav.customers),
						path: paths.dashboard.customers.index,
						icon: (
							<SvgIcon fontSize="small">
								<Users03Icon />
							</SvgIcon>
						),
					},
					{
						title: t(tokens.nav.productList),
						path: paths.dashboard.products.index,
						icon: (
							<SvgIcon fontSize="small">
								<ShoppingBag03Icon />
							</SvgIcon>
						),
					},
					{
						title: t(tokens.nav.loanList),
						icon: (
							<SvgIcon fontSize="small">
								<ShoppingCart01Icon />
							</SvgIcon>
						),
						path: paths.dashboard.loans.index,
					},
				],
			},
		];
	}, [t]);
};
