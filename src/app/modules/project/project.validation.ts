import { z } from 'zod';

export const projectValidationSchema = z.object({
  projectName: z.string(),
  image: z
    .string()
   
    .nonempty({ message: 'Image URL is required' }),
  liveClientLink: z
    .string()
    
    .optional(),
  liveServerLink: z
    .string()
   
    .optional(),
  githubClient: z
    .string()
    
    .optional(),
  githubServer: z
    .string()
    
    .optional(),
  category: z.enum(['Frontend', 'Backend', 'MERN'], {
    required_error: 'Category is required',
  }),
  technology: z
    .array(z.string())
    .nonempty({ message: 'At least one technology is required' }),
  isDeleted: z.boolean().optional(),
});
