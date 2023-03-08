import crypto from 'crypto';
import jwt from 'jsonwebtoken';

//Mongoose : Nom des tables pour les liaisons entre les schémas.
export const COLLECTION_NAME = {
  USER: 'User',
  EVENT: 'Event',
  ARTICLE: 'Article',
  COMMENT: 'Comment',
  CATEGORY: 'Category',
  RESTRICTION: 'Restriction',
  BADGE: 'Badge',
  SIGNALEMENT: 'Signalment',
  REACTION: 'Reaction',
};

//Enumération des valeurs pré définis.
export const RANKS_VALUES = {
  USER: 'USER',
  CONFIRMED_USER: 'CONFIRMED_USER',
  MODERATOR: 'MODERATOR',
  ADMINISTRATOR: 'ADMINISTRATOR',
};

export const GENDER_VALUES = {
  Male: 'Male',
  Female: 'Female',
  UNKNOWN: 'UNKNOWN',
};

export const STATUS_VALUES = {
  DRAFTED: 'DRAFTED',
  PUBLISHED: 'PUBLISHED',
  UNLISTED: 'UNLISTED',
  PUBLIC: 'PUBLIC',
  CANCELED: 'CANCELED',
};

export const SIGNALEMENT_TYPE = {
  COMMENT: 'COMMENT',
  EVENT: 'EVENT',
  USER: 'USER',
};

// Tools
export const GENERATE_UUID = crypto.randomUUID();

/*export function getRequestCookies(req) {
  const list = [];
  const cookieHeader = req.headers?.cookie;
  if (!cookieHeader) return list;

  cookieHeader.split(`;`).forEach(function (cookie) {
    let [name, ...rest] = cookie.split(`=`);
    name = name?.trim();
    if (!name) return;
    const value = rest.join(`=`).trim();
    if (!value) return;
    list[name] = decodeURIComponent(value);
  });

  return list;
}*/

export function getRequestCookies(req) {
  const cookies = {};
  const cookieHeader = req.headers?.cookie;
  if (!cookieHeader) return cookies;

  cookieHeader.split(';').forEach((cookie) => {
    const [name, value] = cookie.split('=').map((part) => part.trim());
    if (!name || !value) return;
    cookies[name] = decodeURIComponent(value);
  });

  return cookies;
}

export function getUserTokenByCookies(req) {
  const cookieToken = getRequestCookies(req).authorization;
  if (cookieToken === undefined) return null;

  cookieToken = cookieToken.split(' ')[1];
  console.log('COOKIE TOKEN RETURN : ', cookieToken);

  const jwtResult = jwt.verify(cookieToken, process.env.JWT_TOKEN_SECRET, (err, result) => {
    if (err) return false;
    else if (result) return true;
    else return false;
  });

  return jwtResult ? cookieToken : null;
}

export const TOKEN_VALIDITY_TIME = 3000 * 60 * 1000;
