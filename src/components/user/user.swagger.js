/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *           example: "507f1f77bcf86cd799439011"
 *         name:
 *           type: string
 *           description: The user's full name
 *           example: "John Doe"
 *         email:
 *           type: string
 *           format: email
 *           description: The user's email address
 *           example: "john.doe@example.com"
 *         password:
 *           type: string
 *           minLength: 6
 *           description: The user's password (min 6 characters)
 *           example: "password123"
 *         image:
 *           type: string
 *           description: URL to user's profile image
 *           example: "https://example.com/avatar.jpg"
 *         bio:
 *           type: string
 *           description: User's biography
 *           example: "Software developer passionate about blockchain"
 *         isPremium:
 *           type: boolean
 *           description: Whether the user has premium status
 *           default: false
 *           example: false
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: User creation timestamp
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: User last update timestamp
 *     
 *     UserCreate:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           minLength: 1
 *           description: The user's full name
 *           example: "John Doe"
 *         email:
 *           type: string
 *           format: email
 *           description: The user's email address
 *           example: "john.doe@example.com"
 *         password:
 *           type: string
 *           minLength: 6
 *           description: The user's password (min 6 characters)
 *           example: "password123"
 *         image:
 *           type: string
 *           description: URL to user's profile image
 *           example: "https://example.com/avatar.jpg"
 *         bio:
 *           type: string
 *           description: User's biography
 *           example: "Software developer passionate about blockchain"
 *         isPremium:
 *           type: boolean
 *           description: Whether the user has premium status
 *           default: false
 *           example: false
 *     
 *     UserUpdate:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The user's ID
 *           example: "507f1f77bcf86cd799439011"
 *         name:
 *           type: string
 *           minLength: 1
 *           description: The user's full name
 *           example: "John Doe Updated"
 *         email:
 *           type: string
 *           format: email
 *           description: The user's email address
 *           example: "john.updated@example.com"
 *         password:
 *           type: string
 *           minLength: 6
 *           description: The user's new password (min 6 characters)
 *           example: "newpassword123"
 *         image:
 *           type: string
 *           description: URL to user's profile image
 *           example: "https://example.com/new-avatar.jpg"
 *         bio:
 *           type: string
 *           description: User's biography
 *           example: "Updated bio"
 *         isPremium:
 *           type: boolean
 *           description: Whether the user has premium status
 *           example: true
 *     
 *     PasswordChange:
 *       type: object
 *       required:
 *         - id
 *         - currentPassword
 *         - newPassword
 *       properties:
 *         id:
 *           type: string
 *           description: The user's ID
 *           example: "507f1f77bcf86cd799439011"
 *         currentPassword:
 *           type: string
 *           description: Current password for verification
 *           example: "oldpassword123"
 *         newPassword:
 *           type: string
 *           minLength: 6
 *           description: New password (min 6 characters)
 *           example: "newpassword123"
 *     
 *     RoleAssignment:
 *       type: object
 *       required:
 *         - userId
 *         - roleId
 *       properties:
 *         userId:
 *           type: string
 *           description: The user's ID
 *           example: "507f1f77bcf86cd799439011"
 *         roleId:
 *           type: string
 *           description: The role's ID to assign
 *           example: "507f1f77bcf86cd799439012"
 *     
 *     RoleRemoval:
 *       type: object
 *       required:
 *         - userId
 *         - roleId
 *       properties:
 *         userId:
 *           type: string
 *           description: The user's ID
 *           example: "507f1f77bcf86cd799439011"
 *         roleId:
 *           type: string
 *           description: The role's ID to remove
 *           example: "507f1f77bcf86cd799439012"
 *     
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Error message
 *           example: "User not found"
 *         error:
 *           type: string
 *           description: Detailed error information
 *           example: "Database connection failed"
 *     
 *     ValidationError:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *           example: false
 *         errores:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 example: "invalid_string"
 *               message:
 *                 type: string
 *                 example: "Invalid email format"
 *               path:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["email"]
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management endpoints
 */

/**
 * @swagger
 * /usuario:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users in the system
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *             example:
 *               - id: "507f1f77bcf86cd799439011"
 *                 name: "John Doe"
 *                 email: "john.doe@example.com"
 *                 image: "https://example.com/avatar.jpg"
 *                 bio: "Software developer"
 *                 isPremium: false
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-01T00:00:00.000Z"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   
 *   post:
 *     summary: Create a new user
 *     description: Register a new user in the system
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserCreate'
 *           example:
 *             name: "Jane Smith"
 *             email: "jane.smith@example.com"
 *             password: "password123"
 *             image: "https://example.com/avatar.jpg"
 *             bio: "Blockchain enthusiast"
 *             isPremium: false
 *     responses:
 *       200:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario registrado con éxito!"
 *                 id:
 *                   type: string
 *                   example: "507f1f77bcf86cd799439011"
 *                 name:
 *                   type: string
 *                   example: "Jane Smith"
 *                 email:
 *                   type: string
 *                   example: "jane.smith@example.com"
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationError'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   
 *   put:
 *     summary: Update user information
 *     description: Update an existing user's information
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserUpdate'
 *           example:
 *             id: "507f1f77bcf86cd799439011"
 *             name: "John Doe Updated"
 *             email: "john.updated@example.com"
 *             bio: "Updated bio"
 *             isPremium: true
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario actualizado con éxito!"
 *                 id:
 *                   type: string
 *                   example: "507f1f77bcf86cd799439011"
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationError'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /usuario/premium:
 *   get:
 *     summary: Get premium users
 *     description: Retrieve a list of all premium users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of premium users retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *             example:
 *               - id: "507f1f77bcf86cd799439011"
 *                 name: "Premium User"
 *                 email: "premium@example.com"
 *                 isPremium: true
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /usuario/email/{email}:
 *   get:
 *     summary: Get user by email
 *     description: Retrieve a user by their email address
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *           format: email
 *         description: User's email address
 *         example: "john.doe@example.com"
 *     responses:
 *       200:
 *         description: User found successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /usuario/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Retrieve a user by their unique ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User's unique ID
 *         example: "507f1f77bcf86cd799439011"
 *     responses:
 *       200:
 *         description: User found successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   
 *   delete:
 *     summary: Delete user
 *     description: Delete a user from the system
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User's unique ID to delete
 *         example: "507f1f77bcf86cd799439011"
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             example:
 *               message: "Usuario eliminado con éxito"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /usuario/contrasena:
 *   patch:
 *     summary: Change user password
 *     description: Change a user's password with current password verification
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PasswordChange'
 *           example:
 *             id: "507f1f77bcf86cd799439011"
 *             currentPassword: "oldpassword123"
 *             newPassword: "newpassword123"
 *     responses:
 *       200:
 *         description: Password changed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             example:
 *               message: "Contraseña actualizada con éxito"
 *       400:
 *         description: Invalid current password or validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /usuario/token:
 *   patch:
 *     summary: Renew user token
 *     description: Generate a new authentication token for the user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: string
 *                 description: User's ID
 *                 example: "507f1f77bcf86cd799439011"
 *           example:
 *             id: "507f1f77bcf86cd799439011"
 *     responses:
 *       200:
 *         description: Token renewed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             example:
 *               message: "Token renovado con éxito"
 *               token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /usuario/asignar-rol:
 *   post:
 *     summary: Assign role to user
 *     description: Assign a specific role to a user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RoleAssignment'
 *           example:
 *             userId: "507f1f77bcf86cd799439011"
 *             roleId: "507f1f77bcf86cd799439012"
 *     responses:
 *       200:
 *         description: Role assigned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             example:
 *               message: "Rol asignado con éxito"
 *       400:
 *         description: Validation error or role already assigned
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /usuario/remover-rol:
 *   delete:
 *     summary: Remove role from user
 *     description: Remove a specific role from a user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RoleRemoval'
 *           example:
 *             userId: "507f1f77bcf86cd799439011"
 *             roleId: "507f1f77bcf86cd799439012"
 *     responses:
 *       200:
 *         description: Role removed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             example:
 *               message: "Rol removido con éxito"
 *       400:
 *         description: Validation error or role not assigned
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
