import {withComponentInfoLog} from '../withComponentInfoLog';

export interface TableColumn<T> {
	key: keyof T;
	label: string;
}

export interface TableAction<T> {
	Component: React.FC<{data: T}>;
}

interface TableProps<T> {
	columns: TableColumn<T>[];
	data: T[];
	actions?: TableAction<T>[];
}

export const Table = <T,>(props: TableProps<T>) => {
	const {data, columns, actions} = props;

	return (
		<div className="table">
			<table>
				<thead>
					<tr data-testid="table-header">
						{columns.map((x, i) => (
							<th key={i}>{x.label}</th>
						))}
						{actions && actions.length > 0 && <th>Actions</th>}
					</tr>
				</thead>
				<tbody data-testid="table-data">
					{data.map((x, i) => (
						<tr key={i}>
							{columns.map((c, i) => (
								//@ts-ignore
								<td key={i}>{x[c.key]}</td>
							))}
							{actions && actions.length > 0 && (
								<td>
									{actions.map((a, i) => (
										<a.Component key={i} data={x} />
									))}
								</td>
							)}
						</tr>
					))}
					{data.length === 0 && (
						<tr aria-colspan={columns.length} data-testid="no-data">
							<td>No data found.</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default withComponentInfoLog(Table);
