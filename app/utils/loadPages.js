/**
 * Author: DuongHan
 * Created: 5/19/19
 *
 */

class Page {
  constructor() {
    this.pages = [];
  }

  get pages() {
    return this.pages;
  }

  set pages(pages) {
    this.pages = pages;
  }
}

export default new Page();
