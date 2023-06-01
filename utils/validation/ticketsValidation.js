/**
 * ticketsValidation.js
 * @description :: validate each post and put request as per tickets model
 */

const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('./commonFilterValidation');

/** validation keys and properties of tickets */
exports.schemaKeys = joi.object({
  ID: joi.string().allow(null).allow(''),
  title: joi.string().allow(null).allow(''),
  product: joi.string().allow(null).allow(''),
  type: joi.string().allow(null).allow(''),
  description: joi.string().allow(null).allow(''),
  attachment: joi.string().allow(null).allow(''),
  severity: joi.string().allow(null).allow(''),
  status: joi.string().allow(null).allow(''),
  created_at: joi.string().allow(null).allow(''),
  updated_at: joi.string().allow(null).allow(''),
  closed_at: joi.string().allow(null).allow(''),
  team_name: joi.string().allow(null).allow(''),
  created_by: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of tickets for updation */
exports.updateSchemaKeys = joi.object({
  ID: joi.string().allow(null).allow(''),
  title: joi.string().allow(null).allow(''),
  product: joi.string().allow(null).allow(''),
  type: joi.string().allow(null).allow(''),
  description: joi.string().allow(null).allow(''),
  attachment: joi.string().allow(null).allow(''),
  severity: joi.string().allow(null).allow(''),
  status: joi.string().allow(null).allow(''),
  created_at: joi.string().allow(null).allow(''),
  updated_at: joi.string().allow(null).allow(''),
  closed_at: joi.string().allow(null).allow(''),
  team_name: joi.string().allow(null).allow(''),
  created_by: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of tickets for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      ID: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      title: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      product: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      type: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      description: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      attachment: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      severity: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      status: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      created_at: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      updated_at: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      closed_at: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      team_name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      created_by: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any(),
      _id: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object())
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  populate: joi.array().items(populate),
  select: select
    
}).unknown(true);
