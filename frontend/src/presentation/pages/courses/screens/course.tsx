//style imports
import * as Style from '../styles/course.style';

//theme imports
import { theme } from '../../../themes/theme';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';
import { TextAlignEnum } from '../../../../domain/enums/text-align.enum';

//hook imports
import useCourse from '../hooks/use-course';

//icon imports
import { MdAttachMoney } from 'react-icons/md';
import { IoMdTimer } from 'react-icons/io';
import { IoCalendarOutline } from 'react-icons/io5';
import { FaRegCircle } from 'react-icons/fa';

//component imports
import Banner from '../../../components/layouts/banner/banner';
import Title from '../../../components/common/title/title';
import CourseInfo from '../../../components/layouts/course-info/course-info';
import Paragraph from '../../../components/common/paragraph/paragraph';
import Loading from '../../../components/common/loading/loading';

const Course = () => {
	const { isLoading, course, selected, handleOnClickSetSelected } = useCourse();

	if (isLoading || !course) return <Loading />;

	return (
		<Style.Container>
			<Banner />
			<Style.Content>
				<Style.Name>
					<Title text={course.name} theme={TextThemeEnum.DARK} size={theme.font.size['5xl']} />
				</Style.Name>
				<Style.Data>
					<Style.Topics>
						<li
							onClick={() => handleOnClickSetSelected('goal')}
							className={selected === 'goal' ? 'active' : 'none'}
						>
							<h1>OBJETIVO DO CURSO</h1>
						</li>
						<li
							onClick={() => handleOnClickSetSelected('profile')}
							className={selected === 'profile' ? 'active' : 'none'}
						>
							<h1>PERFIL PROFISSIONAL</h1>
						</li>
						<li
							onClick={() => handleOnClickSetSelected('area')}
							className={selected === 'area' ? 'active' : 'none'}
						>
							<h1>ÁREA DE ATUAÇÃO</h1>
						</li>
					</Style.Topics>
					{selected === 'goal' && <p>{course.goal}</p>}
					{selected === 'profile' && <p>{course.profile}</p>}
					{selected === 'area' && <p>{course.area}</p>}
				</Style.Data>
				<Style.Info>
					<CourseInfo title='Media Salárial' text={course.wage} icon={<MdAttachMoney />} />
					<CourseInfo title='Carga Horária Total' text={course.workload} icon={<IoMdTimer />} />
					<CourseInfo
						title='Duração do Curso'
						text={course.duration}
						icon={<IoCalendarOutline />}
					/>
				</Style.Info>
				<Style.Modules>
					{course.module_I && (
						<Style.Module>
							<h1>Modulo I</h1>
							<ul>
								{course.module_I.split(',').map((module, index) => (
									<li key={index}>
										<FaRegCircle />
										<Paragraph text={module} align={TextAlignEnum.LEFT} />
									</li>
								))}
							</ul>
						</Style.Module>
					)}
					{course.module_II && (
						<Style.Module>
							<h1>Modulo II</h1>
							<ul>
								{course.module_II.split(',').map((module, index) => (
									<li key={index}>
										<FaRegCircle />
										<Paragraph text={module} align={TextAlignEnum.LEFT} />
									</li>
								))}
							</ul>
						</Style.Module>
					)}
					{course.module_III && (
						<Style.Module>
							<h1>Modulo III</h1>
							<ul>
								{course.module_III.split(',').map((module, index) => (
									<li key={index}>
										<FaRegCircle />
										<Paragraph text={module} align={TextAlignEnum.LEFT} />
									</li>
								))}
							</ul>
						</Style.Module>
					)}
					{course.module_IV && (
						<Style.Module>
							<h1>Modulo IV</h1>
							<ul>
								{course.module_IV.split(',').map((module, index) => (
									<li key={index}>
										<FaRegCircle />
										<Paragraph text={module} align={TextAlignEnum.LEFT} />
									</li>
								))}
							</ul>
						</Style.Module>
					)}
					{course.module_V && (
						<Style.Module>
							<h1>Modulo V</h1>
							<ul>
								{course.module_V.split(',').map((module, index) => (
									<li key={index}>
										<FaRegCircle />
										<Paragraph text={module} align={TextAlignEnum.LEFT} />
									</li>
								))}
							</ul>
						</Style.Module>
					)}
					{course.module_VI && (
						<Style.Module>
							<h1>Modulo VI</h1>
							<ul>
								{course.module_VI.split(',').map((module, index) => (
									<li key={index}>
										<FaRegCircle />
										<Paragraph text={module} align={TextAlignEnum.LEFT} />
									</li>
								))}
							</ul>
						</Style.Module>
					)}
				</Style.Modules>
			</Style.Content>
		</Style.Container>
	);
};

export default Course;
