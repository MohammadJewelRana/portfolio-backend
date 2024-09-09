import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProjectServices } from './project.service';

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.createProjectIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully created the project!!',
    data: result,
  });
});
const getAllProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjectFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All project data retrieved successfully!!',
    data: result,
  });
});

export const ProjectControllers = {
  createProject,
  getAllProject
};
