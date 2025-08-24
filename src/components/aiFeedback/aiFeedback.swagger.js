/**
 * @swagger
 * components:
 *   schemas:
 *     AIFeedback:
 *       type: object
 *       required:
 *         - subtopicId
 *         - timeMinutes
 *         - stepNumber
 *         - stepName
 *         - content
 *         - timeAllocation
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the AI feedback
 *           example: "stu55555-e89b-12d3-a456-426614174016"
 *         subtopicId:
 *           type: string
 *           format: uuid
 *           description: ID of the subtopic
 *           example: "789e0123-e89b-12d3-a456-426614174003"
 *         timeMinutes:
 *           type: integer
 *           minimum: 1
 *           description: Total lesson time in minutes
 *           example: 90
 *         stepNumber:
 *           type: integer
 *           minimum: 1
 *           description: Order of the step in the lesson plan
 *           example: 1
 *         stepName:
 *           type: string
 *           maxLength: 100
 *           description: Name of the step
 *           example: "Engaging Introduction"
 *         content:
 *           type: string
 *           description: Detailed content of the step
 *           example: "Begin the lesson by asking students to think about real-world applications of algebraic equations. Show a short video demonstrating how equations are used in engineering and architecture."
 *         studentActivity:
 *           type: string
 *           maxLength: 255
 *           nullable: true
 *           description: Description of student activities for this step
 *           example: "Students will participate in a think-pair-share activity to discuss real-world applications"
 *         timeAllocation:
 *           type: string
 *           maxLength: 455
 *           description: Time allocation breakdown for this step
 *           example: "5 min introduction, 8 min activity, 2 min discussion"
 *         materialsNeeded:
 *           type: string
 *           maxLength: 400
 *           nullable: true
 *           description: Materials required for this step
 *           example: "Whiteboard, markers, worksheets, projector"
 *         successIndicator:
 *           type: string
 *           maxLength: 400
 *           nullable: true
 *           description: Criteria for successful completion of this step
 *           example: "Students can identify at least 3 real-world applications of algebraic equations"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the AI feedback was created
 *           example: "2024-01-01T00:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the AI feedback was last updated
 *           example: "2024-01-01T00:00:00.000Z"
 *         status:
 *           type: boolean
 *           description: Status of the AI feedback (completed or not)
 *           example: false
 *         subtopic:
 *           $ref: '#/components/schemas/Subtopic'
 *           description: Subtopic information
 *     
 *     AIFeedbackCreate:
 *       type: object
 *       required:
 *         - subtopicId
 *         - timeMinutes
 *         - stepNumber
 *         - stepName
 *         - content
 *         - timeAllocation
 *       properties:
 *         subtopicId:
 *           type: string
 *           format: uuid
 *           description: ID of the subtopic
 *           example: "789e0123-e89b-12d3-a456-426614174003"
 *         timeMinutes:
 *           type: integer
 *           minimum: 1
 *           description: Total lesson time in minutes
 *           example: 90
 *         stepNumber:
 *           type: integer
 *           minimum: 1
 *           description: Order of the step in the lesson plan
 *           example: 1
 *         stepName:
 *           type: string
 *           minLength: 1
 *           maxLength: 100
 *           description: Name of the step
 *           example: "Engaging Introduction"
 *         content:
 *           type: string
 *           minLength: 1
 *           description: Detailed content of the step
 *           example: "Begin the lesson by asking students to think about real-world applications of algebraic equations. Show a short video demonstrating how equations are used in engineering and architecture."
 *         studentActivity:
 *           type: string
 *           maxLength: 255
 *           description: Description of student activities for this step
 *           example: "Students will participate in a think-pair-share activity to discuss real-world applications"
 *         timeAllocation:
 *           type: integer
 *           minimum: 1
 *           description: Time allocation in minutes for this step
 *           example: 15
 *         materialsNeeded:
 *           type: string
 *           maxLength: 400
 *           description: Materials required for this step
 *           example: "Whiteboard, markers, worksheets, projector"
 *         successIndicator:
 *           type: string
 *           maxLength: 400
 *           description: Criteria for successful completion of this step
 *           example: "Students can identify at least 3 real-world applications of algebraic equations"
 *     
 *     AIFeedbackUpdate:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the AI feedback
 *           example: "stu55555-e89b-12d3-a456-426614174016"
 *         subtopicId:
 *           type: string
 *           format: uuid
 *           description: ID of the subtopic
 *           example: "789e0123-e89b-12d3-a456-426614174003"
 *         timeMinutes:
 *           type: integer
 *           minimum: 1
 *           description: Total lesson time in minutes
 *           example: 90
 *         stepNumber:
 *           type: integer
 *           minimum: 1
 *           description: Order of the step in the lesson plan
 *           example: 1
 *         stepName:
 *           type: string
 *           minLength: 1
 *           maxLength: 100
 *           description: Name of the step
 *           example: "Enhanced Introduction"
 *         content:
 *           type: string
 *           minLength: 1
 *           description: Detailed content of the step
 *           example: "Begin the lesson with an interactive demonstration using digital tools to show real-world applications of algebraic equations."
 *         studentActivity:
 *           type: string
 *           maxLength: 255
 *           description: Description of student activities for this step
 *           example: "Students will use tablets to explore interactive examples and participate in group discussions"
 *         timeAllocation:
 *           type: integer
 *           minimum: 1
 *           description: Time allocation in minutes for this step
 *           example: 20
 *         materialsNeeded:
 *           type: string
 *           maxLength: 400
 *           description: Materials required for this step
 *           example: "Tablets, interactive whiteboard, digital worksheets"
 *         successIndicator:
 *           type: string
 *           maxLength: 400
 *           description: Criteria for successful completion of this step
 *           example: "Students can demonstrate understanding through interactive exercises and group discussions"
 *     
 *     AIFeedbackResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Success message
 *           example: "AI feedback created successfully!"
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the AI feedback
 *           example: "stu55555-e89b-12d3-a456-426614174016"
 *         subtopicId:
 *           type: string
 *           format: uuid
 *           description: ID of the subtopic
 *           example: "789e0123-e89b-12d3-a456-426614174003"
 *         timeMinutes:
 *           type: integer
 *           description: Total lesson time in minutes
 *           example: 90
 *         stepNumber:
 *           type: integer
 *           description: Order of the step in the lesson plan
 *           example: 1
 *         stepName:
 *           type: string
 *           description: Name of the step
 *           example: "Engaging Introduction"
 *         content:
 *           type: string
 *           description: Detailed content of the step
 *           example: "Begin the lesson by asking students to think about real-world applications of algebraic equations. Show a short video demonstrating how equations are used in engineering and architecture."
 *         studentActivity:
 *           type: string
 *           description: Description of student activities for this step
 *           example: "Students will participate in a think-pair-share activity to discuss real-world applications"
 *         timeAllocation:
 *           type: string
 *           description: Time allocation breakdown for this step
 *           example: "5 min introduction, 8 min activity, 2 min discussion"
 *         materialsNeeded:
 *           type: string
 *           description: Materials required for this step
 *           example: "Whiteboard, markers, worksheets, projector"
 *         successIndicator:
 *           type: string
 *           description: Criteria for successful completion of this step
 *           example: "Students can identify at least 3 real-world applications of algebraic equations"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the AI feedback was created
 *           example: "2024-01-01T00:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the AI feedback was last updated
 *           example: "2024-01-01T00:00:00.000Z"
 *         status:
 *           type: boolean
 *           description: Status of the AI feedback (completed or not)
 *           example: false
 *         subtopic:
 *           $ref: '#/components/schemas/Subtopic'
 *           description: Subtopic information
 */

/**
 * @swagger
 * tags:
 *   name: AI Feedback
 *   description: AI-generated feedback and lesson plan management endpoints
 */

/**
 * @swagger
 * /api-v1/ai-feedback:
 *   get:
 *     summary: Get all AI feedback records
 *     description: Retrieve a list of all AI-generated feedback records in the system
 *     tags: [AI Feedback]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of AI feedback records retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AIFeedback'
 *             example:
 *               - id: "stu55555-e89b-12d3-a456-426614174016"
 *                 subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *                 timeMinutes: 90
 *                 stepNumber: 1
 *                 stepName: "Engaging Introduction"
 *                 content: "Begin the lesson by asking students to think about real-world applications of algebraic equations. Show a short video demonstrating how equations are used in engineering and architecture."
 *                 studentActivity: "Students will participate in a think-pair-share activity to discuss real-world applications"
 *                 timeAllocation: "5 min introduction, 8 min activity, 2 min discussion"
 *                 materialsNeeded: "Whiteboard, markers, worksheets, projector"
 *                 successIndicator: "Students can identify at least 3 real-world applications of algebraic equations"
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-01T00:00:00.000Z"
 *                 status: false
 *                 subtopic:
 *                   id: "789e0123-e89b-12d3-a456-426614174003"
 *                   name: "Algebraic Equations"
 *                   description: "Solving linear equations with one variable"
 *                   subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *               - id: "vwx66666-e89b-12d3-a456-426614174017"
 *                 subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *                 timeMinutes: 90
 *                 stepNumber: 2
 *                 stepName: "Core Concept Development"
 *                 content: "Introduce the basic structure of linear equations and demonstrate solving techniques step by step."
 *                 studentActivity: "Students will work through guided examples on their worksheets"
 *                 timeAllocation: "10 min explanation, 12 min guided practice, 3 min review"
 *                 materialsNeeded: "Worksheets, calculators, whiteboard"
 *                 successIndicator: "Students can solve basic linear equations independently"
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-01T00:00:00.000Z"
 *                 status: false
 *                 subtopic:
 *                   id: "789e0123-e89b-12d3-a456-426614174003"
 *                   name: "Algebraic Equations"
 *                   description: "Solving linear equations with one variable"
 *                   subjectId: "123e4567-e89b-12d3-a456-426614174000"
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
 *     summary: Create a new AI feedback record
 *     description: Create a new AI-generated feedback record with the provided information
 *     tags: [AI Feedback]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AIFeedbackCreate'
 *           example:
 *             subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *             timeMinutes: 90
 *             stepNumber: 3
 *             stepName: "Practice and Application"
 *             content: "Students will work on real-world problem-solving scenarios using algebraic equations."
 *             studentActivity: "Students will solve word problems in small groups"
 *             timeAllocation: 25
 *             materialsNeeded: "Problem worksheets, calculators, group work materials"
 *             successIndicator: "Students can apply equations to solve real-world problems"
 *     responses:
 *       200:
 *         description: AI feedback record created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AIFeedbackResponse'
 *             example:
 *               message: "AI feedback created successfully!"
 *               id: "stu55555-e89b-12d3-a456-426614174016"
 *               subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *               timeMinutes: 90
 *               stepNumber: 3
 *               stepName: "Practice and Application"
 *               content: "Students will work on real-world problem-solving scenarios using algebraic equations."
 *               studentActivity: "Students will solve word problems in small groups"
 *               timeAllocation: "25 minutes"
 *               materialsNeeded: "Problem worksheets, calculators, group work materials"
 *               successIndicator: "Students can apply equations to solve real-world problems"
 *               createdAt: "2024-01-01T00:00:00.000Z"
 *               updatedAt: "2024-01-01T00:00:00.000Z"
 *               status: false
 *               subtopic:
 *                 id: "789e0123-e89b-12d3-a456-426614174003"
 *                 name: "Algebraic Equations"
 *                 description: "Solving linear equations with one variable"
 *                 subjectId: "123e4567-e89b-12d3-a456-426614174000"
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
 *                   message: "Invalid subtopic ID"
 *                   path: ["subtopicId"]
 *                 - code: "too_small"
 *                   message: "Step name is required"
 *                   path: ["stepName"]
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
 *     summary: Update an existing AI feedback record
 *     description: Update an existing AI-generated feedback record with the provided information
 *     tags: [AI Feedback]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AIFeedbackUpdate'
 *           example:
 *             id: "stu55555-e89b-12d3-a456-426614174016"
 *             subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *             timeMinutes: 90
 *             stepNumber: 1
 *             stepName: "Enhanced Introduction"
 *             content: "Begin the lesson with an interactive demonstration using digital tools to show real-world applications of algebraic equations."
 *             studentActivity: "Students will use tablets to explore interactive examples and participate in group discussions"
 *             timeAllocation: 20
 *             materialsNeeded: "Tablets, interactive whiteboard, digital worksheets"
 *             successIndicator: "Students can demonstrate understanding through interactive exercises and group discussions"
 *     responses:
 *       200:
 *         description: AI feedback record updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AIFeedbackResponse'
 *             example:
 *               message: "AI feedback updated successfully!"
 *               id: "stu55555-e89b-12d3-a456-426614174016"
 *               subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *               timeMinutes: 90
 *               stepNumber: 1
 *               stepName: "Enhanced Introduction"
 *               content: "Begin the lesson with an interactive demonstration using digital tools to show real-world applications of algebraic equations."
 *               studentActivity: "Students will use tablets to explore interactive examples and participate in group discussions"
 *               timeAllocation: "20 minutes"
 *               materialsNeeded: "Tablets, interactive whiteboard, digital worksheets"
 *               successIndicator: "Students can demonstrate understanding through interactive exercises and group discussions"
 *               createdAt: "2024-01-01T00:00:00.000Z"
 *               updatedAt: "2024-01-01T00:00:00.000Z"
 *               status: false
 *               subtopic:
 *                 id: "789e0123-e89b-12d3-a456-426614174003"
 *                 name: "Algebraic Equations"
 *                 description: "Solving linear equations with one variable"
 *                 subjectId: "123e4567-e89b-12d3-a456-426614174000"
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
 * /api-v1/ai-feedback/{id}:
 *   get:
 *     summary: Get AI feedback by ID
 *     description: Retrieve a specific AI-generated feedback record by its unique identifier
 *     tags: [AI Feedback]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unique identifier of the AI feedback record
 *         example: "stu55555-e89b-12d3-a456-426614174016"
 *     responses:
 *       200:
 *         description: AI feedback record retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AIFeedback'
 *             example:
 *               id: "stu55555-e89b-12d3-a456-426614174016"
 *               subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *               timeMinutes: 90
 *               stepNumber: 1
 *               stepName: "Engaging Introduction"
 *               content: "Begin the lesson by asking students to think about real-world applications of algebraic equations. Show a short video demonstrating how equations are used in engineering and architecture."
 *               studentActivity: "Students will participate in a think-pair-share activity to discuss real-world applications"
 *               timeAllocation: "5 min introduction, 8 min activity, 2 min discussion"
 *               materialsNeeded: "Whiteboard, markers, worksheets, projector"
 *               successIndicator: "Students can identify at least 3 real-world applications of algebraic equations"
 *               createdAt: "2024-01-01T00:00:00.000Z"
 *               updatedAt: "2024-01-01T00:00:00.000Z"
 *               status: false
 *               subtopic:
 *                 id: "789e0123-e89b-12d3-a456-426614174003"
 *                 name: "Algebraic Equations"
 *                 description: "Solving linear equations with one variable"
 *                 subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       404:
 *         description: AI feedback record not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               message: "AI feedback record not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *   
 *   delete:
 *     summary: Delete an AI feedback record
 *     description: Delete a specific AI-generated feedback record by its unique identifier
 *     tags: [AI Feedback]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unique identifier of the AI feedback record to delete
 *         example: "stu55555-e89b-12d3-a456-426614174016"
 *     responses:
 *       200:
 *         description: AI feedback record deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *                   example: "AI feedback record deleted successfully"
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
 * /api-v1/ai-feedback/subtopic/{subtopicId}:
 *   get:
 *     summary: Get AI feedback by subtopic
 *     description: Retrieve all AI-generated feedback records for a specific subtopic
 *     tags: [AI Feedback]
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
 *         description: AI feedback records for subtopic retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AIFeedback'
 *             example:
 *               - id: "stu55555-e89b-12d3-a456-426614174016"
 *                 subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *                 timeMinutes: 90
 *                 stepNumber: 1
 *                 stepName: "Engaging Introduction"
 *                 content: "Begin the lesson by asking students to think about real-world applications of algebraic equations. Show a short video demonstrating how equations are used in engineering and architecture."
 *                 studentActivity: "Students will participate in a think-pair-share activity to discuss real-world applications"
 *                 timeAllocation: "5 min introduction, 8 min activity, 2 min discussion"
 *                 materialsNeeded: "Whiteboard, markers, worksheets, projector"
 *                 successIndicator: "Students can identify at least 3 real-world applications of algebraic equations"
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-01T00:00:00.000Z"
 *                 status: false
 *                 subtopic:
 *                   id: "789e0123-e89b-12d3-a456-426614174003"
 *                   name: "Algebraic Equations"
 *                   description: "Solving linear equations with one variable"
 *                   subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *               - id: "vwx66666-e89b-12d3-a456-426614174017"
 *                 subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *                 timeMinutes: 90
 *                 stepNumber: 2
 *                 stepName: "Core Concept Development"
 *                 content: "Introduce the basic structure of linear equations and demonstrate solving techniques step by step."
 *                 studentActivity: "Students will work through guided examples on their worksheets"
 *                 timeAllocation: "10 min explanation, 12 min guided practice, 3 min review"
 *                 materialsNeeded: "Worksheets, calculators, whiteboard"
 *                 successIndicator: "Students can solve basic linear equations independently"
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-01T00:00:00.000Z"
 *                 status: false
 *                 subtopic:
 *                   id: "789e0123-e89b-12d3-a456-426614174003"
 *                   name: "Algebraic Equations"
 *                   description: "Solving linear equations with one variable"
 *                   subjectId: "123e4567-e89b-12d3-a456-426614174000"
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
 * /api-v1/ai-feedback/step/{stepNumber}:
 *   get:
 *     summary: Get AI feedback by step number
 *     description: Retrieve all AI-generated feedback records for a specific step number
 *     tags: [AI Feedback]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: stepNumber
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Step number to filter by
 *         example: 1
 *     responses:
 *       200:
 *         description: AI feedback records for step number retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AIFeedback'
 *             example:
 *               - id: "stu55555-e89b-12d3-a456-426614174016"
 *                 subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *                 timeMinutes: 90
 *                 stepNumber: 1
 *                 stepName: "Engaging Introduction"
 *                 content: "Begin the lesson by asking students to think about real-world applications of algebraic equations. Show a short video demonstrating how equations are used in engineering and architecture."
 *                 studentActivity: "Students will participate in a think-pair-share activity to discuss real-world applications"
 *                 timeAllocation: "5 min introduction, 8 min activity, 2 min discussion"
 *                 materialsNeeded: "Whiteboard, markers, worksheets, projector"
 *                 successIndicator: "Students can identify at least 3 real-world applications of algebraic equations"
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-01T00:00:00.000Z"
 *                 status: false
 *                 subtopic:
 *                   id: "789e0123-e89b-12d3-a456-426614174003"
 *                   name: "Algebraic Equations"
 *                   description: "Solving linear equations with one variable"
 *                   subjectId: "123e4567-e89b-12d3-a456-426614174000"
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
 * /api-v1/ai-feedback/completos:
 *   get:
 *     summary: Get completed AI feedback records
 *     description: Retrieve all AI-generated feedback records that have been completed (status = true)
 *     tags: [AI Feedback]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Completed AI feedback records retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AIFeedback'
 *             example:
 *               - id: "stu55555-e89b-12d3-a456-426614174016"
 *                 subtopicId: "789e0123-e89b-12d3-a456-426614174003"
 *                 timeMinutes: 90
 *                 stepNumber: 1
 *                 stepName: "Engaging Introduction"
 *                 content: "Begin the lesson by asking students to think about real-world applications of algebraic equations. Show a short video demonstrating how equations are used in engineering and architecture."
 *                 studentActivity: "Students will participate in a think-pair-share activity to discuss real-world applications"
 *                 timeAllocation: "5 min introduction, 8 min activity, 2 min discussion"
 *                 materialsNeeded: "Whiteboard, markers, worksheets, projector"
 *                 successIndicator: "Students can identify at least 3 real-world applications of algebraic equations"
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-01T00:00:00.000Z"
 *                 status: true
 *                 subtopic:
 *                   id: "789e0123-e89b-12d3-a456-426614174003"
 *                   name: "Algebraic Equations"
 *                   description: "Solving linear equations with one variable"
 *                   subjectId: "123e4567-e89b-12d3-a456-426614174000"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
