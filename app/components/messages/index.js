/**
 * Author: DuongHan
 * Created: 4/24/19
 *
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.messages';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HomePage container!',
  },

  notFoundTitle: {
    id: `${scope}.notFoundTitle`,
    defaultMessage: 'Lỗi 404 !',
  },

  notFoundDesc: {
    id: `${scope}.notFoundDesc`,
    defaultMessage: 'Trang bạn yêu cầu không tìm thấy !',
  },

  uploadImg: {
    id: `${scope}.uploadImg`,
    defaultMessage: 'Tải ảnh lên',
  },

  upload: {
    id: `${scope}.upload`,
    defaultMessage: 'Tải lên',
  },

  delete: {
    id: `${scope}.delete`,
    defaultMessage: 'Xóa',
  },

  dnd: {
    id: `${scope}.dnd`,
    defaultMessage: 'Kéo thả tệp vào đây hoặc click',
  },
});
