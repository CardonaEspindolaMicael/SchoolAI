/**
 * @swagger
 * components:
 *   schemas:
 *     Subtopic:
 *       type: object
 *       required:
 *         - subjectId
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the subtopic
 *           example: "789e0123-e89b-12d3-a456-426614174003"
 *         subjectId:
 *           type: string
 *           format: uuid
 *           description: ID of the parent subject
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         name:
 *           type: string
 *           maxLength: 100
 *           description: Name of the subtopic
 *           example: "Algebraic Equations"
 *         description:
 *           type: string
 *           description: Optional description of the subtopic
 *           example: "Solving linear equations with one variable"
 *         subject:
 *           $ref: '#/components/schemas/Subject'
 *           description: Parent subject information
 *         progress:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Progress'
 *           description: List of progress records for this subtopic
 *         aiFeedBacks:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/AIFeedback'
 *           description: List of AI-generated feedback for this subtopic
 *     
 *     SubtopicCreate:
 *       type: object
 *       required:
 *         - subjectId
 *         - name
 *       properties:
 *         subjectId:
 *           type: string
 *           format: uuid
 *           description: ID of the parent subject
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         name:
 *           type: string
 *           minLength: 1
 *           maxLength: 100
 *           description: Name of the subtopic
 *           example: "Algebraic Equations"
 *         description:
 *           type: string
 *           description: Optional description of the subtopic
 *           example: "Solving linear equations with one variable"
 *     
 *     SubtopicUpdate:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the subtopic
 *           example: "789e0123-e89b-12d3-a456-426614174003"
 *         subjectId:
 *           type: string
 *           format: uuid
 *           description: ID of the parent subject
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         name:
 *           type: string
 *           minLength: 1
 *           maxLength: 100
 *           description: Name of the subtopic
 *           example: "Advanced Algebraic Equations"
 *         description:
 *           type: string
 *           description: Optional description of the subtopic
 *           example: "Solving complex linear equations with multiple variables"
 *     
 *     SubtopicResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Success message
 *           example: "Subtopic created successfully!"
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the subtopic
 *           example: "789e0123-e89b-12d3-a456-426614174003"
 *         subjectId:
 *           type: string
 *           format: uuid
 *           description: ID of the parent subject
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         name:
 *           type: string
 *           description: Name of the subtopic
 *           example: "Algebraic Equations"
 *         description:
 *           type: string
 *           description: Description of the subtopic
 *           example: "Solving linear equations with one variable"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the subtopic was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the subtopic was last updated
 */

/**
 * @swagger
 * tags:
 *   name: Subtopics
 *   description: Subtopic management endpoints
 */

/**
 * @swagger
 * /api-v1/subtopics:
 *   get:
 *     summary: Get all subtopics
 *     description: Retrieve a list of all subtopics in the system
 *     tags: [Subtopics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of subtopics retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subtopic'
 *             example:
 *               - id: "789e0123-e89b-12d3-a456-426614174003"
 *                 subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *                 name: "Algebraic Equations"
 *                 description: "Solving linear equations with one variable"
 *                 subject:
 *                   id: "123e4567-e89b-12d3-a456-426614174000"
 *                   name: "Mathematics"
 *                   description: "Advanced mathematics including algebra, calculus, and geometry"
 *               - id: "456e7890-e89b-12d3-a456-426614174004"
 *                 subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *                 name: "Calculus Basics"
 *                 description: "Introduction to differential calculus"
 *                 subject:
 *                   id: "123e4567-e89b-12d3-a456-426614174000"
 *                   name: "Mathematics"
 *                   description: "Advanced mathematics including algebra, calculus, and geometry"
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
 *     summary: Create a new subtopic
 *     description: Create a new subtopic with the provided information
 *     tags: [Subtopics]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubtopicCreate'
 *           example:
 *             subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *             name: "Geometry Fundamentals"
 *             description: "Basic geometric concepts and shapes"
 *     responses:
 *       200:
 *         description: Subtopic created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubtopicResponse'
 *             example:
 *               message: "Subtopic created successfully!"
 *               id: "789e0123-e89b-12d3-a456-426614174005"
 *               subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *               name: "Geometry Fundamentals"
 *               description: "Basic geometric concepts and shapes"
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
 *                 - code: "invalid_string"
 *                   message: "Invalid subject ID"
 *                   path: ["subjectId"]
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
 *     summary: Update an existing subtopic
 *     description: Update an existing subtopic with the provided information
 *     tags: [Subtopics]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubtopicUpdate'
 *           example:
 *             id: "789e0123-e89b-12d3-a456-426614174003"
 *             subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *             name: "Advanced Algebraic Equations"
 *             description: "Solving complex linear equations with multiple variables"
 *     responses:
 *       200:
 *         description: Subtopic updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubtopicResponse'
 *             example:
 *               message: "Subtopic updated successfully!"
 *               id: "789e0123-e89b-12d3-a456-426614174003"
 *               subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *               name: "Advanced Algebraic Equations"
 *               description: "Solving complex linear equations with multiple variables"
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
 * /api-v1/subtopics/{id}:
 *   get:
 *     summary: Get subtopic by ID
 *     description: Retrieve a specific subtopic by its unique identifier
 *     tags: [Subtopics]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unique identifier of the subtopic
 *         example: "789e0123-e89b-12d3-a456-426614174003"
 *     responses:
 *       200:
 *         description: Subtopic retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subtopic'
 *             example:
 *               id: "789e0123-e89b-12d3-a456-426614174003"
 *               subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *               name: "Algebraic Equations"
 *               description: "Solving linear equations with one variable"
 *               subject:
 *                 id: "123e4567-e89b-12d3-a456-426614174000"
 *                 name: "Mathematics"
 *                 description: "Advanced mathematics including algebra, calculus, and geometry"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       404:
 *         description: Subtopic not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               message: "Subtopic not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *   
 *   delete:
 *     summary: Delete a subtopic
 *     description: Delete a specific subtopic by its unique identifier
 *     tags: [Subtopics]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unique identifier of the subtopic to delete
 *         example: "789e0123-e89b-12d3-a456-426614174003"
 *     responses:
 *       200:
 *         description: Subtopic deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *                   example: "Subtopic deleted successfully"
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
 * /api-v1/subtopics/nombre/{name}:
 *   get:
 *     summary: Get subtopic by name
 *     description: Retrieve a specific subtopic by its name
 *     tags: [Subtopics]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the subtopic
 *         example: "Algebraic Equations"
 *     responses:
 *       200:
 *         description: Subtopic retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subtopic'
 *             example:
 *               id: "789e0123-e89b-12d3-a456-426614174003"
 *               subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *               name: "Algebraic Equations"
 *               description: "Solving linear equations with one variable"
 *               subject:
 *                 id: "123e4567-e89b-12d3-a456-426614174000"
 *                 name: "Mathematics"
 *                 description: "Advanced mathematics including algebra, calculus, and geometry"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       404:
 *         description: Subtopic not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               message: "Subtopic not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /api-v1/subtopics/subject/{subjectId}:
 *   get:
 *     summary: Get subtopics by subject
 *     description: Retrieve all subtopics for a specific subject
 *     tags: [Subtopics]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: subjectId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID of the subject
 *         example: "123e4567-e89b-12d3-a456-426614174000"
 *     responses:
 *       200:
 *         description: Subtopics for subject retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subtopic'
 *             example:
 *               - id: "789e0123-e89b-12d3-a456-426614174003"
 *                 subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *                 name: "Algebraic Equations"
 *                 description: "Solving linear equations with one variable"
 *                 subject:
 *                   id: "123e4567-e89b-12d3-a456-426614174000"
 *                   name: "Mathematics"
 *                   description: "Advanced mathematics including algebra, calculus, and geometry"
 *               - id: "456e7890-e89b-12d3-a456-426614174004"
 *                 subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *                 name: "Calculus Basics"
 *                 description: "Introduction to differential calculus"
 *                 subject:
 *                   id: "123e4567-e89b-12d3-a456-426614174000"
 *                   name: "Mathematics"
 *                   description: "Advanced mathematics including algebra, calculus, and geometry"
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
 * /api-v1/subtopics/con-progress:
 *   get:
 *     summary: Get subtopics with progress
 *     description: Retrieve all subtopics along with their associated progress records
 *     tags: [Subtopics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Subtopics with progress retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 allOf:
 *                   - $ref: '#/components/schemas/Subtopic'
 *                   - type: object
 *                     properties:
 *                       progress:
 *                         type: array
 *                         items:
 *                           $ref: '#/components/schemas/Progress'
 *             example:
 *               - id: "789e0123-e89b-12d3-a456-426614174003"
 *                 subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *                 name: "Algebraic Equations"
 *                 description: "Solving linear equations with one variable"
 *                 subject:
 *                   id: "123e4567-e89b-12d3-a456-426614174000"
 *                   name: "Mathematics"
 *                   description: "Advanced mathematics including algebra, calculus, and geometry"
 *                 progress:
 *                   - id: "abc12345-e89b-12d3-a456-426614174006"
 *                     userId: "def67890-e89b-12d3-a456-426614174007"
 *                     subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *                     progressType: "learning"
 *                     percentage: 75.5
 *                     completedAt: "2024-01-01T00:00:00.000Z"
 *                     createdAt: "2024-01-01T00:00:00.000Z"
 *                     updatedAt: "2024-01-01T00:00:00.000Z"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
