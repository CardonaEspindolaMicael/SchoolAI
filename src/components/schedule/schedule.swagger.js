/**
 * @swagger
 * components:
 *   schemas:
 *     Schedule:
 *       type: object
 *       required:
 *         - assignmentId
 *         - dayOfWeek
 *         - startTime
 *         - endTime
 *         - quarter
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the schedule
 *           example: "mno33333-e89b-12d3-a456-426614174014"
 *         assignmentId:
 *           type: string
 *           format: uuid
 *           description: ID of the class assignment
 *           example: "abc12345-e89b-12d3-a456-426614174008"
 *         dayOfWeek:
 *           type: string
 *           enum: [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
 *           description: Day of the week for the class
 *           example: "monday"
 *         startTime:
 *           type: string
 *           format: date-time
 *           description: Start time of the class
 *           example: "2024-01-01T08:00:00.000Z"
 *         endTime:
 *           type: string
 *           format: date-time
 *           description: End time of the class
 *           example: "2024-01-01T09:30:00.000Z"
 *         quarter:
 *           type: string
 *           maxLength: 20
 *           description: Academic quarter
 *           example: "2025-Q1"
 *         assignment:
 *           $ref: '#/components/schemas/ClassAssignment'
 *           description: Class assignment information
 *     
 *     ScheduleCreate:
 *       type: object
 *       required:
 *         - assignmentId
 *         - dayOfWeek
 *         - startTime
 *         - endTime
 *         - quarter
 *       properties:
 *         assignmentId:
 *           type: string
 *           format: uuid
 *           description: ID of the class assignment
 *           example: "abc12345-e89b-12d3-a456-426614174008"
 *         dayOfWeek:
 *           type: string
 *           enum: [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
 *           description: Day of the week for the class
 *           example: "monday"
 *         startTime:
 *           type: string
 *           format: date-time
 *           description: Start time of the class
 *           example: "2024-01-01T08:00:00.000Z"
 *         endTime:
 *           type: string
 *           format: date-time
 *           description: End time of the class
 *           example: "2024-01-01T09:30:00.000Z"
 *         quarter:
 *           type: string
 *           minLength: 1
 *           maxLength: 20
 *           description: Academic quarter
 *           example: "2025-Q1"
 *     
 *     ScheduleUpdate:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the schedule
 *           example: "mno33333-e89b-12d3-a456-426614174014"
 *         assignmentId:
 *           type: string
 *           format: uuid
 *           description: ID of the class assignment
 *           example: "abc12345-e89b-12d3-a456-426614174008"
 *         dayOfWeek:
 *           type: string
 *           enum: [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
 *           description: Day of the week for the class
 *           example: "tuesday"
 *         startTime:
 *           type: string
 *           format: date-time
 *           description: Start time of the class
 *           example: "2024-01-01T09:00:00.000Z"
 *         endTime:
 *           type: string
 *           format: date-time
 *           description: End time of the class
 *           example: "2024-01-01T10:30:00.000Z"
 *         quarter:
 *           type: string
 *           minLength: 1
 *           maxLength: 20
 *           description: Academic quarter
 *           example: "2025-Q1"
 *     
 *     ScheduleResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Success message
 *           example: "Schedule created successfully!"
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the schedule
 *           example: "mno33333-e89b-12d3-a456-426614174014"
 *         assignmentId:
 *           type: string
 *           format: uuid
 *           description: ID of the class assignment
 *           example: "abc12345-e89b-12d3-a456-426614174008"
 *         dayOfWeek:
 *           type: string
 *           enum: [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
 *           description: Day of the week for the class
 *           example: "monday"
 *         startTime:
 *           type: string
 *           format: date-time
 *           description: Start time of the class
 *           example: "2024-01-01T08:00:00.000Z"
 *         endTime:
 *           type: string
 *           format: date-time
 *           description: End time of the class
 *           example: "2024-01-01T09:30:00.000Z"
 *         quarter:
 *           type: string
 *           description: Academic quarter
 *           example: "2025-Q1"
 *         assignment:
 *           $ref: '#/components/schemas/ClassAssignment'
 *           description: Class assignment information
 */

/**
 * @swagger
 * tags:
 *   name: Schedules
 *   description: Schedule management endpoints
 */

/**
 * @swagger
 * /api-v1/schedules:
 *   get:
 *     summary: Get all schedules
 *     description: Retrieve a list of all schedules in the system
 *     tags: [Schedules]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of schedules retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Schedule'
 *             example:
 *               - id: "mno33333-e89b-12d3-a456-426614174014"
 *                 assignmentId: "abc12345-e89b-12d3-a456-426614174008"
 *                 dayOfWeek: "monday"
 *                 startTime: "2024-01-01T08:00:00.000Z"
 *                 endTime: "2024-01-01T09:30:00.000Z"
 *                 quarter: "2025-Q1"
 *                 assignment:
 *                   id: "abc12345-e89b-12d3-a456-426614174008"
 *                   gradeId: "def67890-e89b-12d3-a456-426614174009"
 *                   subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *                   teacherId: "ghi11111-e89b-12d3-a456-426614174010"
 *                   grade:
 *                     id: "def67890-e89b-12d3-a456-426614174009"
 *                     name: "6th Grade A"
 *                     year: 2025
 *                   subject:
 *                     id: "123e4567-e89b-12d3-a456-426614174000"
 *                     name: "Mathematics"
 *                     description: "Advanced mathematics including algebra, calculus, and geometry"
 *                   teacher:
 *                     id: "ghi11111-e89b-12d3-a456-426614174010"
 *                     name: "John Doe"
 *                     email: "john.doe@school.com"
 *               - id: "pqr44444-e89b-12d3-a456-426614174015"
 *                 assignmentId: "abc12345-e89b-12d3-a456-426614174008"
 *                 dayOfWeek: "wednesday"
 *                 startTime: "2024-01-01T10:00:00.000Z"
 *                 endTime: "2024-01-01T11:30:00.000Z"
 *                 quarter: "2025-Q1"
 *                 assignment:
 *                   id: "abc12345-e89b-12d3-a456-426614174008"
 *                   gradeId: "def67890-e89b-12d3-a456-426614174009"
 *                   subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *                   teacherId: "ghi11111-e89b-12d3-a456-426614174010"
 *                   grade:
 *                     id: "def67890-e89b-12d3-a456-426614174009"
 *                     name: "6th Grade A"
 *                     year: 2025
 *                   subject:
 *                     id: "123e4567-e89b-12d3-a456-426614174000"
 *                     name: "Mathematics"
 *                     description: "Advanced mathematics including algebra, calculus, and geometry"
 *                   teacher:
 *                     id: "ghi11111-e89b-12d3-a456-426614174010"
 *                     name: "John Doe"
 *                     email: "john.doe@school.com"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *   
 *   post:
 *     summary: Create a new schedule
 *     description: Create a new schedule with the provided information
 *     tags: [Schedules]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ScheduleCreate'
 *           example:
 *             assignmentId: "abc12345-e89b-12d3-a456-426614174008"
 *             dayOfWeek: "friday"
 *             startTime: "2024-01-01T14:00:00.000Z"
 *             endTime: "2024-01-01T15:30:00.000Z"
 *             quarter: "2025-Q1"
 *     responses:
 *       200:
 *         description: Schedule created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ScheduleResponse'
 *             example:
 *               message: "Schedule created successfully!"
 *               id: "mno33333-e89b-12d3-a456-426614174014"
 *               assignmentId: "abc12345-e89b-12d3-a456-426614174008"
 *               dayOfWeek: "friday"
 *               startTime: "2024-01-01T14:00:00.000Z"
 *               endTime: "2024-01-01T15:30:00.000Z"
 *               quarter: "2025-Q1"
 *               assignment:
 *                 id: "abc12345-e89b-12d3-a456-426614174008"
 *                 gradeId: "def67890-e89b-12d3-a456-426614174009"
 *                 subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *                 teacherId: "ghi11111-e89b-12d3-a456-426614174010"
 *                 grade:
 *                   id: "def67890-e89b-12d3-a456-426614174009"
 *                   name: "6th Grade A"
 *                   year: 2025
 *                 subject:
 *                   id: "123e4567-e89b-12d3-a456-426614174000"
 *                   name: "Mathematics"
 *                   description: "Advanced mathematics including algebra, calculus, and geometry"
 *                 teacher:
 *                   id: "ghi11111-e89b-12d3-a456-426614174010"
 *                   name: "John Doe"
 *                   email: "john.doe@school.com"
 *       400:
 *         description: Bad request - Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               ok: false
 *               errores:
 *                 - code: "invalid_string"
 *                   message: "Invalid class assignment ID"
 *                   path: ["assignmentId"]
 *                 - code: "invalid_enum_value"
 *                   message: "Day of week must be a valid day"
 *                   path: ["dayOfWeek"]
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *   
 *   put:
 *     summary: Update an existing schedule
 *     description: Update an existing schedule with the provided information
 *     tags: [Schedules]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ScheduleUpdate'
 *           example:
 *             id: "mno33333-e89b-12d3-a456-426614174014"
 *             assignmentId: "abc12345-e89b-12d3-a456-426614174008"
 *             dayOfWeek: "tuesday"
 *             startTime: "2024-01-01T09:00:00.000Z"
 *             endTime: "2024-01-01T10:30:00.000Z"
 *             quarter: "2025-Q1"
 *     responses:
 *       200:
 *         description: Schedule updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ScheduleResponse'
 *             example:
 *               message: "Schedule updated successfully!"
 *               id: "mno33333-e89b-12d3-a456-426614174014"
 *               assignmentId: "abc12345-e89b-12d3-a456-426614174008"
 *               dayOfWeek: "tuesday"
 *               startTime: "2024-01-01T09:00:00.000Z"
 *               endTime: "2024-01-01T10:30:00.000Z"
 *               quarter: "2025-Q1"
 *               assignment:
 *                 id: "abc12345-e89b-12d3-a456-426614174008"
 *                 gradeId: "def67890-e89b-12d3-a456-426614174009"
 *                 subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *                 teacherId: "ghi11111-e89b-12d3-a456-426614174010"
 *                 grade:
 *                   id: "def67890-e89b-12d3-a456-426614174009"
 *                   name: "6th Grade A"
 *                   year: 2025
 *                 subject:
 *                   id: "123e4567-e89b-12d3-a456-426614174000"
 *                   name: "Mathematics"
 *                   description: "Advanced mathematics including algebra, calculus, and geometry"
 *                 teacher:
 *                   id: "ghi11111-e89b-12d3-a456-426614174010"
 *                   name: "John Doe"
 *                   email: "john.doe@school.com"
 *       400:
 *         description: Bad request - Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /api-v1/schedules/{id}:
 *   get:
 *     summary: Get schedule by ID
 *     description: Retrieve a specific schedule by its unique identifier
 *     tags: [Schedules]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unique identifier of the schedule
 *         example: "mno33333-e89b-12d3-a456-426614174014"
 *     responses:
 *       200:
 *         description: Schedule retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Schedule'
 *             example:
 *               id: "mno33333-e89b-12d3-a456-426614174014"
 *               assignmentId: "abc12345-e89b-12d3-a456-426614174008"
 *               dayOfWeek: "monday"
 *               startTime: "2024-01-01T08:00:00.000Z"
 *               endTime: "2024-01-01T09:30:00.000Z"
 *               quarter: "2025-Q1"
 *               assignment:
 *                 id: "abc12345-e89b-12d3-a456-426614174008"
 *                 gradeId: "def67890-e89b-12d3-a456-426614174009"
 *                 subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *                 teacherId: "ghi11111-e89b-12d3-a456-426614174010"
 *                 grade:
 *                   id: "def67890-e89b-12d3-a456-426614174009"
 *                   name: "6th Grade A"
 *                   year: 2025
 *                 subject:
 *                   id: "123e4567-e89b-12d3-a456-426614174000"
 *                   name: "Mathematics"
 *                   description: "Advanced mathematics including algebra, calculus, and geometry"
 *                 teacher:
 *                   id: "ghi11111-e89b-12d3-a456-426614174010"
 *                   name: "John Doe"
 *                   email: "john.doe@school.com"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       404:
 *         description: Schedule not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               message: "Schedule not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *   
 *   delete:
 *     summary: Delete a schedule
 *     description: Delete a specific schedule by its unique identifier
 *     tags: [Schedules]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unique identifier of the schedule to delete
 *         example: "mno33333-e89b-12d3-a456-426614174014"
 *     responses:
 *       200:
 *         description: Schedule deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *                   example: "Schedule deleted successfully"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /api-v1/schedules/assignment/{assignmentId}:
 *   get:
 *     summary: Get schedules by assignment
 *     description: Retrieve all schedules for a specific class assignment
 *     tags: [Schedules]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: assignmentId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID of the class assignment
 *         example: "abc12345-e89b-12d3-a456-426614174008"
 *     responses:
 *       200:
 *         description: Schedules for assignment retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Schedule'
 *             example:
 *               - id: "mno33333-e89b-12d3-a456-426614174014"
 *                 assignmentId: "abc12345-e89b-12d3-a456-426614174008"
 *                 dayOfWeek: "monday"
 *                 startTime: "2024-01-01T08:00:00.000Z"
 *                 endTime: "2024-01-01T09:30:00.000Z"
 *                 quarter: "2025-Q1"
 *                 assignment:
 *                   id: "abc12345-e89b-12d3-a456-426614174008"
 *                   gradeId: "def67890-e89b-12d3-a456-426614174009"
 *                   subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *                   teacherId: "ghi11111-e89b-12d3-a456-426614174010"
 *                   grade:
 *                     id: "def67890-e89b-12d3-a456-426614174009"
 *                     name: "6th Grade A"
 *                     year: 2025
 *                   subject:
 *                     id: "123e4567-e89b-12d3-a456-426614174000"
 *                     name: "Mathematics"
 *                     description: "Advanced mathematics including algebra, calculus, and geometry"
 *                   teacher:
 *                     id: "ghi11111-e89b-12d3-a456-426614174010"
 *                     name: "John Doe"
 *                     email: "john.doe@school.com"
 *               - id: "pqr44444-e89b-12d3-a456-426614174015"
 *                 assignmentId: "abc12345-e89b-12d3-a456-426614174008"
 *                 dayOfWeek: "wednesday"
 *                 startTime: "2024-01-01T10:00:00.000Z"
 *                 endTime: "2024-01-01T11:30:00.000Z"
 *                 quarter: "2025-Q1"
 *                 assignment:
 *                   id: "abc12345-e89b-12d3-a456-426614174008"
 *                   gradeId: "def67890-e89b-12d3-a456-426614174009"
 *                   subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *                   teacherId: "ghi11111-e89b-12d3-a456-426614174010"
 *                   grade:
 *                     id: "def67890-e89b-12d3-a456-426614174009"
 *                     name: "6th Grade A"
 *                     year: 2025
 *                   subject:
 *                     id: "123e4567-e89b-12d3-a456-426614174000"
 *                     name: "Mathematics"
 *                     description: "Advanced mathematics including algebra, calculus, and geometry"
 *                   teacher:
 *                     id: "ghi11111-e89b-12d3-a456-426614174010"
 *                     name: "John Doe"
 *                     email: "john.doe@school.com"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /api-v1/schedules/day/{dayOfWeek}:
 *   get:
 *     summary: Get schedules by day of week
 *     description: Retrieve all schedules for a specific day of the week
 *     tags: [Schedules]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: dayOfWeek
 *         required: true
 *         schema:
 *           type: string
 *           enum: [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
 *         description: Day of the week to filter by
 *         example: "monday"
 *     responses:
 *       200:
 *         description: Schedules for day retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Schedule'
 *             example:
 *               - id: "mno33333-e89b-12d3-a456-426614174014"
 *                 assignmentId: "abc12345-e89b-12d3-a456-426614174008"
 *                 dayOfWeek: "monday"
 *                 startTime: "2024-01-01T08:00:00.000Z"
 *                 endTime: "2024-01-01T09:30:00.000Z"
 *                 quarter: "2025-Q1"
 *                 assignment:
 *                   id: "abc12345-e89b-12d3-a456-426614174008"
 *                   gradeId: "def67890-e89b-12d3-a456-426614174009"
 *                   subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *                   teacherId: "ghi11111-e89b-12d3-a456-426614174010"
 *                   grade:
 *                     id: "def67890-e89b-12d3-a456-426614174009"
 *                     name: "6th Grade A"
 *                     year: 2025
 *                   subject:
 *                     id: "123e4567-e89b-12d3-a456-426614174000"
 *                     name: "Mathematics"
 *                     description: "Advanced mathematics including algebra, calculus, and geometry"
 *                   teacher:
 *                     id: "ghi11111-e89b-12d3-a456-426614174010"
 *                     name: "John Doe"
 *                     email: "john.doe@school.com"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /api-v1/schedules/quarter/{quarter}:
 *   get:
 *     summary: Get schedules by quarter
 *     description: Retrieve all schedules for a specific academic quarter
 *     tags: [Schedules]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: quarter
 *         required: true
 *         schema:
 *           type: string
 *         description: Academic quarter to filter by
 *         example: "2025-Q1"
 *     responses:
 *       200:
 *         description: Schedules for quarter retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Schedule'
 *             example:
 *               - id: "mno33333-e89b-12d3-a456-426614174014"
 *                 assignmentId: "abc12345-e89b-12d3-a456-426614174008"
 *                 dayOfWeek: "monday"
 *                 startTime: "2024-01-01T08:00:00.000Z"
 *                 endTime: "2024-01-01T09:30:00.000Z"
 *                 quarter: "2025-Q1"
 *                 assignment:
 *                   id: "abc12345-e89b-12d3-a456-426614174008"
 *                   gradeId: "def67890-e89b-12d3-a456-426614174009"
 *                   subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *                   teacherId: "ghi11111-e89b-12d3-a456-426614174010"
 *                   grade:
 *                     id: "def67890-e89b-12d3-a456-426614174009"
 *                     name: "6th Grade A"
 *                     year: 2025
 *                   subject:
 *                     id: "123e4567-e89b-12d3-a456-426614174000"
 *                     name: "Mathematics"
 *                     description: "Advanced mathematics including algebra, calculus, and geometry"
 *                   teacher:
 *                     id: "ghi11111-e89b-12d3-a456-426614174010"
 *                     name: "John Doe"
 *                     email: "john.doe@school.com"
 *               - id: "pqr44444-e89b-12d3-a456-426614174015"
 *                 assignmentId: "abc12345-e89b-12d3-a456-426614174008"
 *                 dayOfWeek: "wednesday"
 *                 startTime: "2024-01-01T10:00:00.000Z"
 *                 endTime: "2024-01-01T11:30:00.000Z"
 *                 quarter: "2025-Q1"
 *                 assignment:
 *                   id: "abc12345-e89b-12d3-a456-426614174008"
 *                   gradeId: "def67890-e89b-12d3-a456-426614174009"
 *                   subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *                   teacherId: "ghi11111-e89b-12d3-a456-426614174010"
 *                   grade:
 *                     id: "def67890-e89b-12d3-a456-426614174009"
 *                     name: "6th Grade A"
 *                     year: 2025
 *                   subject:
 *                     id: "123e4567-e89b-12d3-a456-426614174000"
 *                     name: "Mathematics"
 *                     description: "Advanced mathematics including algebra, calculus, and geometry"
 *                   teacher:
 *                     id: "ghi11111-e89b-12d3-a456-426614174010"
 *                     name: "John Doe"
 *                     email: "john.doe@school.com"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
