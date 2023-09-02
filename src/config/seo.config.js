const SITE_NAME = 'My Budget - Vanilla JS'

export const getTitle = (title) => {
  return title ? `${title} | ${SITE_NAME}` : SITE_NAME
}