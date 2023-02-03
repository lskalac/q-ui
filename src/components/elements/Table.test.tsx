import {describe, expect, it} from 'vitest';
import Table, {TableAction, TableColumn} from './Table';
import {render, screen} from '@testing-library/react';

interface TableTestData {
	id: string;
	title: string;
}

const data: TableTestData[] = [
	{
		id: '1234',
		title: 'Some test title',
	},
];

const columns: TableColumn<TableTestData>[] = [
	{
		key: 'id',
		label: 'Id',
	},
	{
		key: 'title',
		label: 'Title',
	},
];

const actions: TableAction<TableTestData>[] = [
	{
		Component: (props) => <div>{props.data.title + ' header'}</div>,
	},
];

describe('Table', () => {
	it('should display data rows', () => {
		render(<Table data={data} columns={columns} />);

		expect(screen.getByTestId('table-data').children.length).toBe(1);
		expect(screen.getByText('Some test title')).toBeDefined();
	});

	it('should display no data row', () => {
		render(<Table data={[]} columns={columns} />);

		expect(screen.getByTestId('no-data')).toBeDefined();
	});

	it('should display action column', () => {
		render(<Table data={data} columns={columns} actions={actions} />);

		expect(screen.getByTestId('table-header').children.length).toBe(3);
		expect(screen.getByText('Some test title header')).toBeDefined();
	});
});
