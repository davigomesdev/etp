//service
import { type RequestConfig, requestConfig } from '../request-config';

//config imports
import serverEnv from '../../../domain/envs/server.env';

//enums imports
import { MethodEnum } from '../../../domain/enums/method.enum';

//entity imports
import type { CourseEntity } from '../../../domain/entities/course.entity';

export const getCourseById = async (id: string): Promise<CourseEntity> => {
	const config: RequestConfig = requestConfig(MethodEnum.GET);

	const res = await fetch(`${serverEnv.apiUrl}/courses/${id}`, config)
		.then((res) => res.json())
		.catch((err) => console.log(err));

	return res;
};

export const getAllCourses = async (): Promise<CourseEntity[]> => {
	const config: RequestConfig = requestConfig(MethodEnum.GET);

	const res = await fetch(`${serverEnv.apiUrl}/courses`, config)
		.then((res) => res.json())
		.catch((err) => console.log(err));

	return res;
};
