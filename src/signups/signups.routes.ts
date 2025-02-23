import { Router } from 'express';
import * as SignupsController from './signups.controller';

const router = Router();

// GET /signups - Retrieve all signups (Admin only)
router.
    route('/signups').
    get(SignupsController.readSignups);

// GET /signups/user/:userId - Retrieve all signups for a specific user
router.
    route('/signups/user/:userId').
    get(SignupsController.readSignupsByUserId);

// GET /signups/event/:eventId - Retrieve all signups for a specific event
router.
    route('/signups/event/:eventId').
    get(SignupsController.readSignupsByEventId);

// POST /signups - Register a user for an event
router.
    route('/signups').
    post(SignupsController.createSignup);

// DELETE /signups/:signupId - De-register a user from an event
router.
    route('/signups/:signupId').
    delete(SignupsController.deleteSignup);

export default router;
