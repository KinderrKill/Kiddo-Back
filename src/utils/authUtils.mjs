import * as constants from './constant.mjs';
import UserRepository from '../config/mongo/repository/UserRepository.mjs';
import jwt from 'jsonwebtoken';

export function isConnected(req) {
  const userId = getUserByCookieToken(req);
  return userId !== null;
}

export function isUser(req) {
  const userId = getUserByCookieToken(req);
  if (userId !== null) {
    const user = new UserRepository().getById(userId);
    return user.rank === constants.RANKS_VALUES.USER;
  }
}

export function isConfirmedUser(req) {
  const userId = getUserByCookieToken(req);
  if (userId !== null) {
    const user = new UserRepository().getById(userId);
    return user.rank === constants.RANKS_VALUES.CONFIRMED_USER;
  }
}

export function isModerator(req) {
  const userId = getUserByCookieToken(req);
  if (userId !== null) {
    const user = new UserRepository().getById(userId);
    return user.rank === constants.RANKS_VALUES.MODERATOR;
  }
}

export function isAdmin(req) {
  const userId = getUserByCookieToken(req);
  if (userId !== null) {
    const user = new UserRepository().getById(userId);
    return user.rank === constants.RANKS_VALUES.ADMINISTRATOR;
  }
}

export function getUserByCookieToken(req) {
  const cookieToken = constants.getRequestCookies(req).authorization;
  if (!cookieToken) return null;

  const authCookieToken = cookieToken.split(' ')[1];
  if (!authCookieToken) return null;

  try {
    const result = jwt.verify(authCookieToken, process.env.JWT_TOKEN_SECRET);
    return result._id;
  } catch (err) {
    console.log('ERROR : getUserByCookieToken', err);
    return null;
  }
}
