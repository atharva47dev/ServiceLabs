/**
 * ticketsRoutes.js
 * @description :: CRUD API routes for tickets
 */

const express = require('express');
const router = express.Router();
const ticketsController = require('../../controller/admin/ticketsController');
const { PLATFORM } =  require('../../constants/authConstant'); 
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');

router.route('/admin/tickets/create').post(auth(PLATFORM.ADMIN),checkRolePermission,ticketsController.addTickets);
router.route('/admin/tickets/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,ticketsController.bulkInsertTickets);
router.route('/admin/tickets/list').post(auth(PLATFORM.ADMIN),checkRolePermission,ticketsController.findAllTickets);
router.route('/admin/tickets/count').post(auth(PLATFORM.ADMIN),checkRolePermission,ticketsController.getTicketsCount);
router.route('/admin/tickets/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,ticketsController.getTickets);
router.route('/admin/tickets/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,ticketsController.updateTickets);    
router.route('/admin/tickets/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,ticketsController.partialUpdateTickets);
router.route('/admin/tickets/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,ticketsController.bulkUpdateTickets);
router.route('/admin/tickets/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,ticketsController.softDeleteTickets);
router.route('/admin/tickets/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,ticketsController.softDeleteManyTickets);
router.route('/admin/tickets/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,ticketsController.deleteTickets);
router.route('/admin/tickets/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,ticketsController.deleteManyTickets);

module.exports = router;
