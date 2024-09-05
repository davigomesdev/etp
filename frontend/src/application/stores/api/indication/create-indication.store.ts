//zustand imports
import { create } from 'zustand';

//byd game service imports
import * as indicationService from '../../../../infrastructure/api/services/indication.service';

//dto imports
import type { CreateIndicationDTO } from '../../../../infrastructure/api/services/dtos/create-indication.dto';

type State = {
	success: boolean;
	error: string | null;
	isLoading: boolean;
};

type Actions = {
	execute: (body: CreateIndicationDTO) => void;
	reset: () => void;
};

const initialState: State = {
	success: false,
	error: null,
	isLoading: false,
};

export const useCreateIndicationStore = create<State & Actions>()((set) => ({
	...initialState,
	execute: async (body: CreateIndicationDTO): Promise<void> => {
		set({ isLoading: true });

		await indicationService
			.createIndication(body)
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
