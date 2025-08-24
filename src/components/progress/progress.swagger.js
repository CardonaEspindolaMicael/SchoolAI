/**
 * @swagger
 * components:
 *   schemas:
 *     Progress:
 *       type: object
 *       required:
 *         - userId
 *         - subtopicId
 *         - progressType
 *         - percentage
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the progress record
 *           example: "abc12345-e89b-12d3-a456-426614174006"
 *         userId:
 *           type: string
 *           format: uuid
 *           description: ID of the user (teacher or student)
 *           example: "def67890-e89b-12d3-a456-426614174007"
 *         subtopicId:
 *           type: string
 *           format: uuid
 *           description: ID of the subtopic
 *           example: "789e0123-e89b-12d3-a456-426614174003"
 *         progressType:
 *           type: string
 *           enum: [learning, teaching, mastery]
 *           description: Type of progress being tracked
 *           example: "learning"
 *         percentage:
 *           type: number
 *           format: decimal
 *           minimum: 0
 *           maximum: 100
 *           description: Progress percentage (0.00-100.00)
 *           example: 75.5
 *         completedAt:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Timestamp when progress was completed
 *           example: "2024-01-01T00:00:00.000Z"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the progress record was created
 *           example: "2024-01-01T00:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the progress record was last updated
 *           example: "2024-01-01T00:00:00.000Z"
 *         user:
 *           $ref: '#/components/schemas/User'
 *           description: User information
 *         subtopic:
 *           $ref: '#/components/schemas/Subtopic'
 *           description: Subtopic information
 *     
 *     ProgressCreate:
 *       type: object
 *       required:
 *         - userId
 *         - subtopicId
 *         - progressType
 *         - percentage
 *       properties:
 *         userId:
 *           type: string
 *           format: uuid
 *           description: ID of the user (teacher or student)
 *           example: "def67890-e89b-12d3-a456-426614174007"
 *         subtopicId:
 *           type: string
 *           format: uuid
 *           description: ID of the subtopic
 *           example: "789e0123-e89b-12d3-a456-426614174003"
 *         progressType:
 *           type: string
 *           enum: [learning, teaching, mastery]
 *           description: Type of progress being tracked
 *           example: "learning"
 *         percentage:
 *           type: number
 *           minimum: 0
 *           maximum: 100
 *           description: Progress percentage (0-100)
 *           example: 75.5
 *     
 *     ProgressUpdate:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the progress record
 *           example: "abc12345-e89b-12d3-a456-426614174006"
 *         userId:
 *           type: string
 *           format: uuid
 *           description: ID of the user (teacher or student)
 *           example: "def67890-e89b-12d3-a456-426614174007"
 *         subtopicId:
 *           type: string
 *           format: uuid
 *           description: ID of the subtopic
 *           example: "789e0123-e89b-12d3-a456-426614174003"
 *         progressType:
 *           type: string
 *           enum: [learning, teaching, mastery]
 *           description: Type of progress being tracked
 *           example: "learning"
 *         percentage:
 *           type: number
 *           minimum: 0
 *           maximum: 100
 *           description: Progress percentage (0-100)
 *           example: 85.0
 *     
 *     ProgressResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Success message
 *           example: "Progress created successfully!"
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the progress record
 *           example: "abc12345-e89b-12d3-a456-426614174006"
 *         userId:
 *           type: string
 *           format: uuid
 *           description: ID of the user (teacher or student)
 *           example: "def67890-e89b-12d3-a456-426614174007"
 *         subtopicId:
 *           type: string
 *           format: uuid
 *           description: ID of the subtopic
 *           example: "789e0123-e89b-12d3-a456-426614174003"
 *         progressType:
 *           type: string
 *           enum: [learning, teaching, mastery]
 *           description: Type of progress being tracked
 *           example: "learning"
 *         percentage:
 *           type: number
 *           format: decimal
 *           description: Progress percentage (0.00-100.00)
 *           example: 75.5
 *         completedAt:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Timestamp when progress was completed
 *           example: "2024-01-01T00:00:00.000Z"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the progress record was created
 *           example: "2024-01-01T00:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the progress record was last updated
 *           example: "2024-01-01T00:00:00.000Z"
 */

/**
 * @swagger
 * tags:
 *   name: Progress
 *   description: Progress tracking management endpoints
 */

/**
 * @swagger
 * /api-v1/progress:
 *   get:
 *     summary: Get all progress records
 *     description: Retrieve a list of all progress records in the system
 *     tags: [Progress]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of progress records retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Progress'
 *             example:
 *               - id: "abc12345-e89b-12d3-a456-426614174006"
 *                 userId: "def67890-e89b-12d3-a456-426614174007"
 *                 subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *                 progressType: "learning"
 *                 percentage: 75.5
 *                 completedAt: "2024-01-01T00:00:00.000Z"
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-01T00:00:00.000Z"
 *                 user:
 *                   id: "def67890-e89b-12d3-a456-426614174007"
 *                   name: "John Doe"
 *                   email: "john.doe@school.com"
 *                 subtopic:
 *                   id: "789e0123-e89b-12d3-a456-426614174003"
 *                   name: "Algebraic Equations"
 *                   description: "Solving linear equations with one variable"
 *               - id: "ghi11111-e89b-12d3-a456-426614174012"
 *                 userId: "jkl22222-e89b-12d3-a456-426614174013"
 *                 subtopicId: "456e7890-e89b-12d3-a456-426614174004"
 *                 progressType: "teaching"
 *                 percentage: 90.0
 *                 completedAt: null
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-01T00:00:00.000Z"
 *                 user:
 *                   id: "jkl22222-e89b-12d3-a456-426614174013"
 *                   name: "Jane Smith"
 *                   email: "jane.smith@school.com"
 *                 subtopic:
 *                   id: "456e7890-e89b-12d3-a456-426614174004"
 *                   name: "Calculus Basics"
 *                   description: "Introduction to differential calculus"
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
 *     summary: Create a new progress record
 *     description: Create a new progress record with the provided information
 *     tags: [Progress]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProgressCreate'
 *           example:
 *             userId: "def67890-e89b-12d3-a456-426614174007"
 *             subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *             progressType: "learning"
 *             percentage: 75.5
 *     responses:
 *       200:
 *         description: Progress record created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProgressResponse'
 *             example:
 *               message: "Progress created successfully!"
 *               id: "abc12345-e89b-12d3-a456-426614174006"
 *               userId: "def67890-e89b-12d3-a456-426614174007"
 *               subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *               progressType: "learning"
 *               percentage: 75.5
 *               completedAt: null
 *               createdAt: "2024-01-01T00:00:00.000Z"
 *               updatedAt: "2024-01-01T00:00:00.000Z"
 *       400:
 *         description: Bad request - Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               ok: false
 *               errores:
 *                 - code: "invalid_enum_value"
 *                   message: "Progress type must be 'learning', 'teaching', or 'mastery'"
 *                   path: ["progressType"]
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
 *     summary: Update an existing progress record
 *     description: Update an existing progress record with the provided information
 *     tags: [Progress]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProgressUpdate'
 *           example:
 *             id: "abc12345-e89b-12d3-a456-426614174006"
 *             userId: "def67890-e89b-12d3-a456-426614174007"
 *             subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *             progressType: "learning"
 *             percentage: 85.0
 *     responses:
 *       200:
 *         description: Progress record updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProgressResponse'
 *             example:
 *               message: "Progress updated successfully!"
 *               id: "abc12345-e89b-12d3-a456-426614174006"
 *               userId: "def67890-e89b-12d3-a456-426614174007"
 *               subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *               progressType: "learning"
 *               percentage: 85.0
 *               completedAt: null
 *               createdAt: "2024-01-01T00:00:00.000Z"
 *               updatedAt: "2024-01-01T00:00:00.000Z"
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
 * /api-v1/progress/{id}:
 *   get:
 *     summary: Get progress record by ID
 *     description: Retrieve a specific progress record by its unique identifier
 *     tags: [Progress]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unique identifier of the progress record
 *         example: "abc12345-e89b-12d3-a456-426614174006"
 *     responses:
 *       200:
 *         description: Progress record retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Progress'
 *             example:
 *               id: "abc12345-e89b-12d3-a456-426614174006"
 *               userId: "def67890-e89b-12d3-a456-426614174007"
 *               subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *               progressType: "learning"
 *               percentage: 75.5
 *               completedAt: "2024-01-01T00:00:00.000Z"
 *               createdAt: "2024-01-01T00:00:00.000Z"
 *               updatedAt: "2024-01-01T00:00:00.000Z"
 *               user:
 *                 id: "def67890-e89b-12d3-a456-426614174007"
 *                 name: "John Doe"
 *                 email: "john.doe@school.com"
 *               subtopic:
 *                 id: "789e0123-e89b-12d3-a456-426614174003"
 *                 name: "Algebraic Equations"
 *                 description: "Solving linear equations with one variable"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       404:
 *         description: Progress record not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               message: "Progress record not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *   
 *   delete:
 *     summary: Delete a progress record
 *     description: Delete a specific progress record by its unique identifier
 *     tags: [Progress]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unique identifier of the progress record to delete
 *         example: "abc12345-e89b-12d3-a456-426614174006"
 *     responses:
 *       200:
 *         description: Progress record deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *                   example: "Progress record deleted successfully"
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
 * /api-v1/progress/usuario/{userId}:
 *   get:
 *     summary: Get progress records by user
 *     description: Retrieve all progress records for a specific user
 *     tags: [Progress]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID of the user
 *         example: "def67890-e89b-12d3-a456-426614174007"
 *     responses:
 *       200:
 *         description: Progress records for user retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Progress'
 *             example:
 *               - id: "abc12345-e89b-12d3-a456-426614174006"
 *                 userId: "def67890-e89b-12d3-a456-426614174007"
 *                 subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *                 progressType: "learning"
 *                 percentage: 75.5
 *                 completedAt: "2024-01-01T00:00:00.000Z"
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-01T00:00:00.000Z"
 *                 user:
 *                   id: "def67890-e89b-12d3-a456-426614174007"
 *                   name: "John Doe"
 *                   email: "john.doe@school.com"
 *                 subtopic:
 *                   id: "789e0123-e89b-12d3-a456-426614174003"
 *                   name: "Algebraic Equations"
 *                   description: "Solving linear equations with one variable"
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
 * /api-v1/progress/subtopic/{subtopicId}:
 *   get:
 *     summary: Get progress records by subtopic
 *     description: Retrieve all progress records for a specific subtopic
 *     tags: [Progress]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: subtopicId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID of the subtopic
 *         example: "789e0123-e89b-12d3-a456-426614174003"
 *     responses:
 *       200:
 *         description: Progress records for subtopic retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Progress'
 *             example:
 *               - id: "abc12345-e89b-12d3-a456-426614174006"
 *                 userId: "def67890-e89b-12d3-a456-426614174007"
 *                 subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *                 progressType: "learning"
 *                 percentage: 75.5
 *                 completedAt: "2024-01-01T00:00:00.000Z"
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-01T00:00:00.000Z"
 *                 user:
 *                   id: "def67890-e89b-12d3-a456-426614174007"
 *                   name: "John Doe"
 *                   email: "john.doe@school.com"
 *                 subtopic:
 *                   id: "789e0123-e89b-12d3-a456-426614174003"
 *                   name: "Algebraic Equations"
 *                   description: "Solving linear equations with one variable"
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
 * /api-v1/progress/tipo/{progressType}:
 *   get:
 *     summary: Get progress records by type
 *     description: Retrieve all progress records for a specific progress type
 *     tags: [Progress]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: progressType
 *         required: true
 *         schema:
 *           type: string
 *           enum: [learning, teaching, mastery]
 *         description: Type of progress to filter by
 *         example: "learning"
 *     responses:
 *       200:
 *         description: Progress records for type retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Progress'
 *             example:
 *               - id: "abc12345-e89b-12d3-a456-426614174006"
 *                 userId: "def67890-e89b-12d3-a456-426614174007"
 *                 subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *                 progressType: "learning"
 *                 percentage: 75.5
 *                 completedAt: "2024-01-01T00:00:00.000Z"
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-01T00:00:00.000Z"
 *                 user:
 *                   id: "def67890-e89b-12d3-a456-426614174007"
 *                   name: "John Doe"
 *                   email: "john.doe@school.com"
 *                 subtopic:
 *                   id: "789e0123-e89b-12d3-a456-426614174003"
 *                   name: "Algebraic Equations"
 *                   description: "Solving linear equations with one variable"
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
 * /api-v1/progress/completado:
 *   get:
 *     summary: Get completed progress records
 *     description: Retrieve all progress records that have been completed (have a completedAt timestamp)
 *     tags: [Progress]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Completed progress records retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Progress'
 *             example:
 *               - id: "abc12345-e89b-12d3-a456-426614174006"
 *                 userId: "def67890-e89b-12d3-a456-426614174007"
 *                 subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *                 progressType: "learning"
 *                 percentage: 100.0
 *                 completedAt: "2024-01-01T00:00:00.000Z"
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-01T00:00:00.000Z"
 *                 user:
 *                   id: "def67890-e89b-12d3-a456-426614174007"
 *                   name: "John Doe"
 *                   email: "john.doe@school.com"
 *                 subtopic:
 *                   id: "789e0123-e89b-12d3-a456-426614174003"
 *                   name: "Algebraic Equations"
 *                   description: "Solving linear equations with one variable"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
