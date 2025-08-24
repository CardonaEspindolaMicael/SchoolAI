/**
 * @swagger
 * components:
 *   schemas:
 *     ClassAssignment:
 *       type: object
 *       required:
 *         - gradeId
 *         - subjectId
 *         - teacherId
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the class assignment
 *           example: "abc12345-e89b-12d3-a456-426614174008"
 *         gradeId:
 *           type: string
 *           format: uuid
 *           description: ID of the grade
 *           example: "def67890-e89b-12d3-a456-426614174009"
 *         subjectId:
 *           type: string
 *           format: uuid
 *           description: ID of the subject
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         teacherId:
 *           type: string
 *           format: uuid
 *           description: ID of the teacher
 *           example: "ghi11111-e89b-12d3-a456-426614174010"
 *         grade:
 *           $ref: '#/components/schemas/Grade'
 *           description: Grade information
 *         subject:
 *           $ref: '#/components/schemas/Subject'
 *           description: Subject information
 *         teacher:
 *           $ref: '#/components/schemas/User'
 *           description: Teacher information
 *         schedules:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Schedule'
 *           description: List of schedules for this class assignment
 *     
 *     ClassAssignmentCreate:
 *       type: object
 *       required:
 *         - gradeId
 *         - subjectId
 *         - teacherId
 *       properties:
 *         gradeId:
 *           type: string
 *           format: uuid
 *           description: ID of the grade
 *           example: "def67890-e89b-12d3-a456-426614174009"
 *         subjectId:
 *           type: string
 *           format: uuid
 *           description: ID of the subject
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         teacherId:
 *           type: string
 *           format: uuid
 *           description: ID of the teacher
 *           example: "ghi11111-e89b-12d3-a456-426614174010"
 *     
 *     ClassAssignmentUpdate:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the class assignment
 *           example: "abc12345-e89b-12d3-a456-426614174008"
 *         gradeId:
 *           type: string
 *           format: uuid
 *           description: ID of the grade
 *           example: "def67890-e89b-12d3-a456-426614174009"
 *         subjectId:
 *           type: string
 *           format: uuid
 *           description: ID of the subject
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         teacherId:
 *           type: string
 *           format: uuid
 *           description: ID of the teacher
 *           example: "ghi11111-e89b-12d3-a456-426614174010"
 *     
 *     ClassAssignmentResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Success message
 *           example: "Class assignment created successfully!"
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the class assignment
 *           example: "abc12345-e89b-12d3-a456-426614174008"
 *         gradeId:
 *           type: string
 *           format: uuid
 *           description: ID of the grade
 *           example: "def67890-e89b-12d3-a456-426614174009"
 *         subjectId:
 *           type: string
 *           format: uuid
 *           description: ID of the subject
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         teacherId:
 *           type: string
 *           format: uuid
 *           description: ID of the teacher
 *           example: "ghi11111-e89b-12d3-a456-426614174010"
 *         grade:
 *           $ref: '#/components/schemas/Grade'
 *           description: Grade information
 *         subject:
 *           $ref: '#/components/schemas/Subject'
 *           description: Subject information
 *         teacher:
 *           $ref: '#/components/schemas/User'
 *           description: Teacher information
 */

/**
 * @swagger
 * tags:
 *   name: Class Assignments
 *   description: Class assignment management endpoints
 */

/**
 * @swagger
 * /api-v1/class-assignments:
 *   get:
 *     summary: Get all class assignments
 *     description: Retrieve a list of all class assignments in the system
 *     tags: [Class Assignments]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of class assignments retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ClassAssignment'
 *             example:
 *               - id: "abc12345-e89b-12d3-a456-426614174008"
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
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *   
 *   post:
 *     summary: Create a new class assignment
 *     description: Create a new class assignment with the provided information
 *     tags: [Class Assignments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClassAssignmentCreate'
 *           example:
 *             gradeId: "def67890-e89b-12d3-a456-426614174009"
 *             subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *             teacherId: "ghi11111-e89b-12d3-a456-426614174010"
 *     responses:
 *       200:
 *         description: Class assignment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClassAssignmentResponse'
 *             example:
 *               message: "Class assignment created successfully!"
 *               id: "abc12345-e89b-12d3-a456-426614174008"
 *               gradeId: "def67890-e89b-12d3-a456-426614174009"
 *               subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *               teacherId: "ghi11111-e89b-12d3-a456-426614174010"
 *               grade:
 *                 id: "def67890-e89b-12d3-a456-426614174009"
 *                 name: "6th Grade A"
 *                 year: 2025
 *               subject:
 *                 id: "123e4567-e89b-12d3-a456-426614174000"
 *                 name: "Mathematics"
 *                 description: "Advanced mathematics including algebra, calculus, and geometry"
 *               teacher:
 *                 id: "ghi11111-e89b-12d3-a456-426614174010"
 *                 name: "John Doe"
 *                 email: "john.doe@school.com"
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
 *                   message: "Invalid grade ID"
 *                   path: ["gradeId"]
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
 *     summary: Update an existing class assignment
 *     description: Update an existing class assignment with the provided information
 *     tags: [Class Assignments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClassAssignmentUpdate'
 *           example:
 *             id: "abc12345-e89b-12d3-a456-426614174008"
 *             gradeId: "def67890-e89b-12d3-a456-426614174009"
 *             subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *             teacherId: "jkl22222-e89b-12d3-a456-426614174011"
 *     responses:
 *       200:
 *         description: Class assignment updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClassAssignmentResponse'
 *             example:
 *               message: "Class assignment updated successfully!"
 *               id: "abc12345-e89b-12d3-a456-426614174008"
 *               gradeId: "def67890-e89b-12d3-a456-426614174009"
 *               subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *               teacherId: "jkl22222-e89b-12d3-a456-426614174011"
 *               grade:
 *                 id: "def67890-e89b-12d3-a456-426614174009"
 *                 name: "6th Grade A"
 *                 year: 2025
 *               subject:
 *                 id: "123e4567-e89b-12d3-a456-426614174000"
 *                 name: "Mathematics"
 *                 description: "Advanced mathematics including algebra, calculus, and geometry"
 *               teacher:
 *                 id: "jkl22222-e89b-12d3-a456-426614174011"
 *                 name: "Jane Smith"
 *                 email: "jane.smith@school.com"
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
 * /api-v1/class-assignments/{id}:
 *   get:
 *     summary: Get class assignment by ID
 *     description: Retrieve a specific class assignment by its unique identifier
 *     tags: [Class Assignments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unique identifier of the class assignment
 *         example: "abc12345-e89b-12d3-a456-426614174008"
 *     responses:
 *       200:
 *         description: Class assignment retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClassAssignment'
 *             example:
 *               id: "abc12345-e89b-12d3-a456-426614174008"
 *               gradeId: "def67890-e89b-12d3-a456-426614174009"
 *               subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *               teacherId: "ghi11111-e89b-12d3-a456-426614174010"
 *               grade:
 *                 id: "def67890-e89b-12d3-a456-426614174009"
 *                 name: "6th Grade A"
 *                 year: 2025
 *               subject:
 *                 id: "123e4567-e89b-12d3-a456-426614174000"
 *                 name: "Mathematics"
 *                 description: "Advanced mathematics including algebra, calculus, and geometry"
 *               teacher:
 *                 id: "ghi11111-e89b-12d3-a456-426614174010"
 *                 name: "John Doe"
 *                 email: "john.doe@school.com"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       404:
 *         description: Class assignment not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               message: "Class assignment not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *   
 *   delete:
 *     summary: Delete a class assignment
 *     description: Delete a specific class assignment by its unique identifier
 *     tags: [Class Assignments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unique identifier of the class assignment to delete
 *         example: "abc12345-e89b-12d3-a456-426614174008"
 *     responses:
 *       200:
 *         description: Class assignment deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *                   example: "Class assignment deleted successfully"
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
 * /api-v1/class-assignments/teacher/{teacherId}:
 *   get:
 *     summary: Get class assignments by teacher
 *     description: Retrieve all class assignments for a specific teacher
 *     tags: [Class Assignments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: teacherId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID of the teacher
 *         example: "ghi11111-e89b-12d3-a456-426614174010"
 *     responses:
 *       200:
 *         description: Class assignments for teacher retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ClassAssignment'
 *             example:
 *               - id: "abc12345-e89b-12d3-a456-426614174008"
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
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /api-v1/class-assignments/grade/{gradeId}:
 *   get:
 *     summary: Get class assignments by grade
 *     description: Retrieve all class assignments for a specific grade
 *     tags: [Class Assignments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID of the grade
 *         example: "def67890-e89b-12d3-a456-426614174009"
 *     responses:
 *       200:
 *         description: Class assignments for grade retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ClassAssignment'
 *             example:
 *               - id: "abc12345-e89b-12d3-a456-426614174008"
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
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /api-v1/class-assignments/subject/{subjectId}:
 *   get:
 *     summary: Get class assignments by subject
 *     description: Retrieve all class assignments for a specific subject
 *     tags: [Class Assignments]
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
 *         description: Class assignments for subject retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ClassAssignment'
 *             example:
 *               - id: "abc12345-e89b-12d3-a456-426614174008"
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
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
