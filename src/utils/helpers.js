import { AVATARS } from "../constants";

export function avatarStyle(name) {
  const i = ((name.charCodeAt(0) || 0) + (name.charCodeAt(1) || 0)) % AVATARS.length;
  return AVATARS[i];
}

export function initials(first, last) {
  return (first[0] || "") + (last[0] || "");
}