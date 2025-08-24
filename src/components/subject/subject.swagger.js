/**
 * @swagger
 * components:
 *   schemas:
 *     Subject:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the subject
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         name:
 *           type: string
 *           maxLength: 100
 *           description: Name of the subject
 *           example: "Mathematics"
 *         description:
 *           type: string
 *           description: Optional description of the subject
 *           example: "Advanced mathematics including algebra, calculus, and geometry"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the subject was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the subject was last updated
 *         subtopics:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Subtopic'
 *           description: List of subtopics associated with this subject
 *         assignments:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ClassAssignment'
 *           description: List of class assignments for this subject
 *     
 *     SubjectCreate:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           minLength: 1
 *           maxLength: 100
 *           description: Name of the subject
 *           example: "Mathematics"
 *         description:
 *           type: string
 *           description: Optional description of the subject
 *           example: "Advanced mathematics including algebra, calculus, and geometry"
 *     
 *     SubjectUpdate:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the subject
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         name:
 *           type: string
 *           minLength: 1
 *           maxLength: 100
 *           description: Name of the subject
 *           example: "Advanced Mathematics"
 *         description:
 *           type: string
 *           description: Optional description of the subject
 *           example: "Comprehensive mathematics curriculum"
 *     
 *     SubjectResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Success message
 *           example: "Subject created successfully!"
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the subject
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         name:
 *           type: string
 *           description: Name of the subject
 *           example: "Mathematics"
 *         description:
 *           type: string
 *           description: Description of the subject
 *           example: "Advanced mathematics including algebra, calculus, and geometry"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the subject was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the subject was last updated
 *     
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: Error message
 *           example: "Subject not found"
 *         message:
 *           type: string
 *           description: Error message
 *           example: "Subject not found"
 *         ok:
 *           type: boolean
 *           description: Success status
 *           example: false
 *         errores:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: Error code
 *               message:
 *                 type: string
 *                 description: Error message
 *               path:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Path to the error
 */

/**
 * @swagger
 * tags:
 *   name: Subjects
 *   description: Subject management endpoints
 */

/**
 * @swagger
 * /api-v1/subjects:
 *   get:
 *     summary: Get all subjects
 *     description: Retrieve a list of all subjects in the system
 *     tags: [Subjects]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of subjects retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subject'
 *             example:
 *               - id: "123e4567-e89b-12d3-a456-426614174000"
 *                 name: "Mathematics"
 *                 description: "Advanced mathematics including algebra, calculus, and geometry"
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-01T00:00:00.000Z"
 *               - id: "456e7890-e89b-12d3-a456-426614174001"
 *                 name: "Physics"
 *                 description: "Study of matter, energy, and their interactions"
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-01T00:00:00.000Z"
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
 *     summary: Create a new subject
 *     description: Create a new subject with the provided information
 *     tags: [Subjects]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubjectCreate'
 *           example:
 *             name: "Chemistry"
 *             description: "Study of matter and its properties"
 *     responses:
 *       200:
 *         description: Subject created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubjectResponse'
 *             example:
 *               message: "Subject created successfully!"
 *               id: "789e0123-e89b-12d3-a456-426614174002"
 *               name: "Chemistry"
 *               description: "Study of matter and its properties"
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
 *                 - code: "too_small"
 *                   message: "Subject name is required"
 *                   path: ["name"]
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
 *     summary: Update an existing subject
 *     description: Update an existing subject with the provided information
 *     tags: [Subjects]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubjectUpdate'
 *           example:
 *             id: "123e4567-e89b-12d3-a456-426614174000"
 *             name: "Advanced Mathematics"
 *             description: "Comprehensive mathematics curriculum"
 *     responses:
 *       200:
 *         description: Subject updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubjectResponse'
 *             example:
 *               message: "Subject updated successfully!"
 *               id: "123e4567-e89b-12d3-a456-426614174000"
 *               name: "Advanced Mathematics"
 *               description: "Comprehensive mathematics curriculum"
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
 * /api-v1/subjects/{id}:
 *   get:
 *     summary: Get subject by ID
 *     description: Retrieve a specific subject by its unique identifier
 *     tags: [Subjects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unique identifier of the subject
 *         example: "123e4567-e89b-12d3-a456-426614174000"
 *     responses:
 *       200:
 *         description: Subject retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *             example:
 *               id: "123e4567-e89b-12d3-a456-426614174000"
 *               name: "Mathematics"
 *               description: "Advanced mathematics including algebra, calculus, and geometry"
 *               createdAt: "2024-01-01T00:00:00.000Z"
 *               updatedAt: "2024-01-01T00:00:00.000Z"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       404:
 *         description: Subject not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               message: "Subject not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *   
 *   delete:
 *     summary: Delete a subject
 *     description: Delete a specific subject by its unique identifier
 *     tags: [Subjects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unique identifier of the subject to delete
 *         example: "123e4567-e89b-12d3-a456-426614174000"
 *     responses:
 *       200:
 *         description: Subject deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *                   example: "Subject deleted successfully"
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
 * /api-v1/subjects/nombre/{name}:
 *   get:
 *     summary: Get subject by name
 *     description: Retrieve a specific subject by its name
 *     tags: [Subjects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the subject
 *         example: "Mathematics"
 *     responses:
 *       200:
 *         description: Subject retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *             example:
 *               id: "123e4567-e89b-12d3-a456-426614174000"
 *               name: "Mathematics"
 *               description: "Advanced mathematics including algebra, calculus, and geometry"
 *               createdAt: "2024-01-01T00:00:00.000Z"
 *               updatedAt: "2024-01-01T00:00:00.000Z"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       404:
 *         description: Subject not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               message: "Subject not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /api-v1/subjects/con-subtopics:
 *   get:
 *     summary: Get subjects with subtopics
 *     description: Retrieve all subjects along with their associated subtopics
 *     tags: [Subjects]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Subjects with subtopics retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 allOf:
 *                   - $ref: '#/components/schemas/Subject'
 *                   - type: object
 *                     properties:
 *                       subtopics:
 *                         type: array
 *                         items:
 *                           $ref: '#/components/schemas/Subtopic'
 *             example:
 *               - id: "123e4567-e89b-12d3-a456-426614174000"
 *                 name: "Mathematics"
 *                 description: "Advanced mathematics including algebra, calculus, and geometry"
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-01T00:00:00.000Z"
 *                 subtopics:
 *                   - id: "789e0123-e89b-12d3-a456-426614174003"
 *                     name: "Algebraic Equations"
 *                     description: "Solving linear equations with one variable"
 *                     subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
