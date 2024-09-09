import { model, Schema } from 'mongoose';
import { TProject } from './project.interface';


const ProjectSchema = new Schema<TProject>(
  {
    projectName: { type: String, required: true },
    image: { type: String, required: true },
    liveClientLink: { type: String, default: '' },
    liveServerLink: { type: String, default: '' },
    githubClient: { type: String, default: '' },
    githubServer: { type: String, default: '' },
    category: {
      type: String,
      enum: ['Frontend', 'Backend', 'MERN'],
      required: true,
    },

    technology: { type: [String], required: true },

    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);
export const Project = model<TProject>('CompletedProject', ProjectSchema);
