//zustand imports
import { create } from 'zustand';

//byd game service imports
import * as recordService from '../../../../infrastructure/api/services/record.service';

//dto imports
import type { CreateRecordDTO } from '../../../../infrastructure/api/services/dtos/create-record.dto';

type State = {
	success: boolean;
	error: string | null;
	isLoading: boolean;
};

type Actions = {
	execute: (body: CreateRecordDTO) => void;
	reset: () => void;
};

const initialState: State = {
	success: false,
	error: null,
	isLoading: false,
};

export const useCreateRecordStore = create<State & Actions>()((set) => ({
	...initialState,
	execute: async (body: CreateRecordDTO): Promise<void> => {
		set({ isLoading: true });

		await recordService
			.createRecord(body)
			.then(() => {
				set({
					isLoading: false,
					success: true,
					error: null,
				});
			})
			.catch((error) => {
				set({
					isLoading: false,
					success: false,
					error: error.message,
				});
			});
	},
	reset: (): void => {
		set({
			isLoading: false,
			success: false,
			error: null,
		});
	},
}));
