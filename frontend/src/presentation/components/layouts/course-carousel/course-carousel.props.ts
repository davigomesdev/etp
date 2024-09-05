//entity improts
import { CourseEntity } from '../../../../domain/entities/course.entity';

export interface CourseCarouselProps {
	title?: string;
	courses: CourseEntity[];
}
