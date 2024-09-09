import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import { TProject } from './project.interface';
import { Project } from './project.model';

const createProjectIntoDB = async (payload: TProject) => {
  console.log(payload);
  if (!payload) {
    return new AppError(httpStatus.BAD_REQUEST, 'Give project data!!!');
  }

  const result = await Project.create(payload);
  if (!result) {
    return new AppError(
      httpStatus.BAD_REQUEST,
      'Could not create project at this time. ry again!!!',
    );
  }
  return result;
};

const getAllProjectFromDB = async () => {
  const result = await Project.find();
  if (!result) {
    return new AppError(
      httpStatus.BAD_REQUEST,
      'Could not find all project at this time. ry again!!!',
    );
  }

  return result;
};

export const ProjectServices = {
  createProjectIntoDB,
  getAllProjectFromDB
};
