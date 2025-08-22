/**
 * @swagger
 * components:
 *   schemas:
 *     Role:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - permissions
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the role
 *           example: "507f1f77bcf86cd799439012"
 *         name:
 *           type: string
 *           description: The role's name
 *           example: "admin"
 *         description:
 *           type: string
 *           description: The role's description
 *           example: "Administrator with full system access"
 *         permissions:
 *           type: string
 *           description: The role's permissions (comma-separated)
 *           example: "read,write,delete,admin"
 *         isActive:
 *           type: boolean
 *           description: Whether the role is active
 *           default: true
 *           example: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Role creation timestamp
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Role last update timestamp
 *     
 *     RoleCreate:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - permissions
 *       properties:
 *         name:
 *           type: string
 *           minLength: 1
 *           description: The role's name
 *           example: "moderator"
 *         description:
 *           type: string
 *           minLength: 5
 *           description: The role's description (min 5 characters)
 *           example: "Moderator with content management permissions"
 *         permissions:
 *           type: string
 *           minLength: 1
 *           description: The role's permissions (comma-separated)
 *           example: "read,write,moderate"
 *     
 *     RoleUpdate:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: string
 *           description: The role's ID
 *           example: "507f1f77bcf86cd799439012"
 *         name:
 *           type: string
 *           minLength: 1
 *           description: The role's name
 *           example: "senior_moderator"
 *         description:
 *           type: string
 *           minLength: 5
 *           description: The role's description (min 5 characters)
 *           example: "Senior moderator with advanced permissions"
 *         permissions:
 *           type: string
 *           minLength: 1
 *           description: The role's permissions (comma-separated)
 *           example: "read,write,moderate,delete"
 *         isActive:
 *           type: boolean
 *           description: Whether the role is active
 *           example: true
 *     
 *     UserWithRole:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The user's ID
 *           example: "507f1f77bcf86cd799439011"
 *         name:
 *           type: string
 *           description: The user's name
 *           example: "John Doe"
 *         email:
 *           type: string
 *           description: The user's email
 *           example: "john.doe@example.com"
 *         roleId:
 *           type: string
 *           description: The assigned role ID
 *           example: "507f1f77bcf86cd799439012"
 *         roleName:
 *           type: string
 *           description: The assigned role name
 *           example: "admin"
 *     
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Error message
 *           example: "Role not found"
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
 *                 example: "Invalid role name"
 *               path:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["name"]
 */

/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: Role management endpoints
 */

/**
 * @swagger
 * /roles:
 *   get:
 *     summary: Get all roles
 *     description: Retrieve a list of all roles in the system
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of roles retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Role'
 *             example:
 *               - id: "507f1f77bcf86cd799439012"
 *                 name: "admin"
 *                 description: "Administrator with full system access"
 *                 permissions: "read,write,delete,admin"
 *                 isActive: true
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-01T00:00:00.000Z"
 *               - id: "507f1f77bcf86cd799439013"
 *                 name: "moderator"
 *                 description: "Moderator with content management permissions"
 *                 permissions: "read,write,moderate"
 *                 isActive: true
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
 *     summary: Create a new role
 *     description: Create a new role in the system
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RoleCreate'
 *           example:
 *             name: "editor"
 *             description: "Editor with content creation and editing permissions"
 *             permissions: "read,write,edit"
 *     responses:
 *       200:
 *         description: Role created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Rol creado con éxito!"
 *                 id:
 *                   type: string
 *                   example: "507f1f77bcf86cd799439014"
 *                 name:
 *                   type: string
 *                   example: "editor"
 *                 description:
 *                   type: string
 *                   example: "Editor with content creation and editing permissions"
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
 *     summary: Update role information
 *     description: Update an existing role's information
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RoleUpdate'
 *           example:
 *             id: "507f1f77bcf86cd799439012"
 *             name: "senior_admin"
 *             description: "Senior administrator with enhanced permissions"
 *             permissions: "read,write,delete,admin,super"
 *             isActive: true
 *     responses:
 *       200:
 *         description: Role updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Rol actualizado con éxito!"
 *                 id:
 *                   type: string
 *                   example: "507f1f77bcf86cd799439012"
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
 * /roles/activos:
 *   get:
 *     summary: Get active roles
 *     description: Retrieve a list of all active roles in the system
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of active roles retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Role'
 *             example:
 *               - id: "507f1f77bcf86cd799439012"
 *                 name: "admin"
 *                 description: "Administrator with full system access"
 *                 permissions: "read,write,delete,admin"
 *                 isActive: true
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
 * /roles/permisos:
 *   get:
 *     summary: Get roles by permissions
 *     description: Retrieve roles that have specific permissions
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: permissions
 *         schema:
 *           type: string
 *         description: Comma-separated list of permissions to filter by
 *         example: "read,write"
 *     responses:
 *       200:
 *         description: Roles with specified permissions retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Role'
 *             example:
 *               - id: "507f1f77bcf86cd799439012"
 *                 name: "admin"
 *                 description: "Administrator with full system access"
 *                 permissions: "read,write,delete,admin"
 *                 isActive: true
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /roles/nombre/{name}:
 *   get:
 *     summary: Get role by name
 *     description: Retrieve a role by its name
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Role's name
 *         example: "admin"
 *     responses:
 *       200:
 *         description: Role found successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       404:
 *         description: Role not found
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
 * /roles/usuarios/{roleId}:
 *   get:
 *     summary: Get users with specific role
 *     description: Retrieve all users that have a specific role assigned
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: roleId
 *         required: true
 *         schema:
 *           type: string
 *         description: Role's ID to find users for
 *         example: "507f1f77bcf86cd799439012"
 *     responses:
 *       200:
 *         description: Users with role retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserWithRole'
 *             example:
 *               - id: "507f1f77bcf86cd799439011"
 *                 name: "John Doe"
 *                 email: "john.doe@example.com"
 *                 roleId: "507f1f77bcf86cd799439012"
 *                 roleName: "admin"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /roles/{id}:
 *   get:
 *     summary: Get role by ID
 *     description: Retrieve a role by its unique ID
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Role's unique ID
 *         example: "507f1f77bcf86cd799439012"
 *     responses:
 *       200:
 *         description: Role found successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       404:
 *         description: Role not found
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
 *     summary: Delete role
 *     description: Delete a role from the system
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Role's unique ID to delete
 *         example: "507f1f77bcf86cd799439012"
 *     responses:
 *       200:
 *         description: Role deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             example:
 *               message: "Rol eliminado con éxito"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

