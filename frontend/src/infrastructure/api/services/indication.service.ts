//service
import { type RequestConfig, requestConfig } from '../request-config';

//config imports
import serverEnv from '../../../domain/envs/server.env';

//enums imports
import { MethodEnum } from '../../../domain/enums/method.enum';

//entity imports
import type { CreateIndicationDTO } from './dtos/create-indication.dto';

export const createIndication = async (body: CreateIndicationDTO): Promise<void> => {
	const config: RequestConfig = requestConfig(MethodEnum.POST, body);

	await fetch(`${serverEnv.apiUrl}/indication`, config)
		.then((res) => res.json())
		.catch((err) => console.log(err));
};
