import express from 'express'
import { getJobById, getJobs } from '../controllers/jobController.js';

const router = express.Router()

// Route to get all jobs data
router.get('/', getJobs)

// Route to get a single job by ID
router.get('/:id', getJobById)


export default router;
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c020f008-d761-590b-b26e-827e7a0dd783")}catch(e){}}();
//# debugId=c020f008-d761-590b-b26e-827e7a0dd783
