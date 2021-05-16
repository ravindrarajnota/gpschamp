import { SUBDOMAIN } from '../constants/index';

export function getSubDomain(url) {
  return url;
  // const hostname = window?.location?.hostname;
// alert(hostname);
// alert(url);
//   if (hostname?.includes('TEST')) {
//     return SUBDOMAIN.TEST;
//   }

//   if (hostname?.includes('NEW')) {
//     return SUBDOMAIN.NEW;
//   }

//   if ([SUBDOMAIN.TEST, SUBDOMAIN.NEW].includes(url)) {
//     return url;
//   }

//   return SUBDOMAIN.TEST;
}
