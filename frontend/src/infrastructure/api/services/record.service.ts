//service
import { type RequestConfig, requestConfig } from '../request-config';

//config imports
import serverEnv from '../../../domain/envs/server.env';

//enums imports
import { MethodEnum } from '../../../domain/enums/method.enum';

//entity imports
import type { CreateRecordDTO } from './dtos/create-record.dto';

export const createRecord = async (body: CreateRecordDTO): Promise<void> => {
	const config: RequestConfig = requestConfig(MethodEnum.POST, body);

	await fetch(`${serverEnv.apiUrl}/records`, config)
		.then((res) => res.json())
		.catch((err) => console.log(err));
};
